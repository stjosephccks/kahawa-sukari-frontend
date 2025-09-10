import { useState, useEffect } from 'react';
import axios from 'axios';
import CacheQueue from '@/utils/cacheQueue';

const LiturgicalResponse = () => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [cache] = useState(() => new CacheQueue('liturgical_program', 5, 4)); // 4 hours cache duration

  const processLiturgicalData = (liturgicalData) => {
    if (!liturgicalData) return null;
    
    const today = new Date().getDate().toString();
    const todaysSchedule = liturgicalData.days?.find(day => day.date === today) || liturgicalData.days?.[0];
    
    const responseData = {
      ...liturgicalData,
      currentDay: todaysSchedule,
      weekTitle: liturgicalData.weekTitle || 'Liturgical Program'
    };
    
    setResponse(responseData);
    setSelectedDay(todaysSchedule);
    return responseData;
  };

  const fetchLiturgicalResponse = async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      let data = null;
      
      // Always try to get cached data first for immediate response
      const cachedData = cache.getLatest();
      
      // Only use cached data if not forcing refresh and it exists
      if (!forceRefresh && cachedData) {
        processLiturgicalData(cachedData);
        setIsLoading(false);
        
        // Still fetch fresh data in background to check for updates
        try {
          const res = await axios.get('/api/liturgy');
          const freshData = res.data?.[0];
          
          // If we got fresh data and it's different from cached data, update UI
          if (freshData && freshData.days?.length > 0 && 
              JSON.stringify(freshData) !== JSON.stringify(cachedData)) {
            cache.enqueue(freshData);
            processLiturgicalData(freshData);
            console.log('Liturgical data updated from background refresh');
          }
        } catch (backgroundError) {
          console.log('Background refresh failed, keeping cached data');
        }
        return;
      }

      // If we reach here, either we're forcing refresh or no valid cache exists
      try {
        const res = await axios.get('/api/liturgy');
        data = res.data?.[0];
        
        // Only update cache if we got valid data
        if (data && data.days?.length > 0) {
          cache.enqueue(data);
          processLiturgicalData(data);
        } else if (cachedData) {
          // If no data from API but we have cached data, use that
          processLiturgicalData(cachedData);
        } else {
          // No data from either source
          setResponse(null);
          setError('No liturgical program data available');
        }
      } catch (apiError) {
        console.error('API Error:', apiError);
        // If API fails but we have cached data, use that
        if (cachedData) {
          processLiturgicalData(cachedData);
        } else {
          setError('Failed to load liturgical program. Please check your connection.');
          setResponse(null);
        }
      }
      
      setIsLoading(false);
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred while loading the liturgical program');
      setResponse(null);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiturgicalResponse();
  }, []);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  if (isLoading) return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      <p className="mt-2 text-gray-600">Loading liturgical program...</p>
    </div>
  );

  if (error) return null;

  if (!response) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary mb-1">{response.weekTitle}</h2>
        <p className="text-gray-600">
          {new Date(response.weekStartDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })} - {new Date(new Date(response.weekStartDate).setDate(new Date(response.weekStartDate).getDate() + 6)).toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}
        </p>
      </div>
      
      {/* Day Selector */}
      <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-2">
        {response.days.map((day, index) => (
          <button
            key={index}
            onClick={() => handleDaySelect(day)}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              selectedDay?.date === day.date
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {day?.day?.slice(0, 3)} {day.date}
          </button>
        ))}
      </div>
      
      {selectedDay && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-2">
              {selectedDay.day}, {selectedDay.date} {selectedDay.month}
            </h3>
            
            {(selectedDay.specialCelebration || selectedDay.saint) && (
              <div className="mb-3">
                {selectedDay.day === 'SUNDAY' ? (
                  <p className="font-medium text-lg">{selectedDay.specialCelebration || selectedDay.saint}</p>
                ) : selectedDay.saint && selectedDay.saint !== 'Ordinary Weekday' ? (
                  <p className="font-medium text-lg">
                    {selectedDay.saint.replace(/^(Feast of|Solemnity of|Memorial of|Optional Memorial of|Commemoration of|Votive Mass of)\s*/i, '')}
                  </p>
                ) : (
                  <p className="font-medium text-lg">{selectedDay.specialCelebration}</p>
                )}
              </div>
            )}
            
            {selectedDay.liturgicalRank && (
              <p className="text-sm text-gray-600">
                <span className="font-medium">Liturgical Rank:</span> {selectedDay.liturgicalRank}
              </p>
            
            )}
          </div>

          {selectedDay.schedule && selectedDay.schedule.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Schedule</h4>
              <div className="space-y-3">
                {selectedDay.schedule.map((service, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${
                      service.highlight 
                        ? 'bg-blue-50 border-l-4 border-primary' 
                        : 'bg-gray-50 border border-gray-100'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <p className="font-medium text-gray-900">
                          <span className="text-primary">{service.time}</span>  {service.service}
                        </p>
                        {service.location && (
                          <p className="text-sm text-gray-600 mt-1">
                            <span className="font-medium">Location:</span> {service.location}
                          </p>
                        )}
                      </div>
                      {service.language && (
                        <span className="text-xs bg-primary text-white px-2 py-1 rounded-full whitespace-nowrap">
                          {service.language}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* {response.fileUrl && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <a
            href={response.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Program
          </a>
        </div>
      )} */}
    </div>
  );
};

export default LiturgicalResponse;
