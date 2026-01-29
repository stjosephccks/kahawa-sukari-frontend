import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek } from 'date-fns';
import axios from 'axios';
import NavBar from '@/components/Navbar';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [selectedActivityType, setSelectedActivityType] = useState('All');
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState('month');

  const groups = ['All','St. JohnPaul II Outstation', 'PMC', 'YCA','CJPD', 'MYM', 'Mantle', 'Charistmatic', 'Liturgical Group', 'CL', 'Carovana', 'Emanuela Mazzola', 'St.Joseph Hospital', 'Choir', 'CWA', 'CMA', 'Parish Council', 'Other'];
  const activityTypes = ['All', 'Parish', 'ADN', 'Deanery', 'Other'];

  useEffect(() => {
    fetchEvents();
  }, [currentDate, selectedGroup, selectedActivityType]);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      
      const params = { month, year };
      if (selectedGroup !== 'All') params.group = selectedGroup;
      if (selectedActivityType !== 'All') params.activityType = selectedActivityType;

      const response = await axios.get('/api/calendar-events', { params });
      setEvents(response.data);
      setFilteredEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const calendarStart = startOfWeek(monthStart);
  const calendarEnd = endOfWeek(monthEnd);
  const calendarDays = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  const getEventsForDay = (day) => {
    return filteredEvents.filter(event => 
      isSameDay(new Date(event.date), day)
    );
  };

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const getActivityTypeColor = (type) => {
    const colors = {
      'Parish': 'bg-blue-500',
      'ADN': 'bg-green-500',
      'Deanery': 'bg-purple-500',
      'Other': 'bg-gray-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const dayEvents = selectedDate ? getEventsForDay(selectedDate) : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold text-primary">Parish Calendar</h1>
            
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('month')}
                className={`px-4 py-2 rounded-md ${viewMode === 'month' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                Month View
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                List View
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Group</label>
              <select
                value={selectedGroup}
                onChange={(e) => setSelectedGroup(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {groups.map(group => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Activity Type</label>
              <select
                value={selectedActivityType}
                onChange={(e) => setSelectedActivityType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {activityTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {viewMode === 'month' ? (
            <>
              <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-2 md:gap-4 order-2 md:order-1">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 md:px-4 md:py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
                    aria-label="Previous month"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <h2 className="text-lg md:text-2xl font-semibold text-gray-800 min-w-[180px] text-center">
                    {format(currentDate, 'MMMM yyyy')}
                  </h2>
                  
                  <button
                    onClick={handleNextMonth}
                    className="p-2 md:px-4 md:py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition"
                    aria-label="Next month"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                <button
                  onClick={handleToday}
                  className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-opacity-90 transition order-1 md:order-2"
                >
                  Today
                </button>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : (
                <>
                  <div className="hidden md:grid grid-cols-7 gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="text-center font-semibold text-gray-700 py-2">
                        {day}
                      </div>
                    ))}
                    
                    {calendarDays.map((day, idx) => {
                      const dayEvents = getEventsForDay(day);
                      const isCurrentMonth = isSameMonth(day, currentDate);
                      const isToday = isSameDay(day, new Date());
                      const isSelected = selectedDate && isSameDay(day, selectedDate);
                      
                      return (
                        <div
                          key={idx}
                          onClick={() => setSelectedDate(day)}
                          className={`min-h-24 p-2 border rounded-lg cursor-pointer transition-all ${
                            !isCurrentMonth ? 'bg-gray-100 text-gray-400' : 'bg-white hover:bg-gray-50'
                          } ${isToday ? 'ring-2 ring-primary' : ''} ${
                            isSelected ? 'bg-blue-50 border-blue-500' : 'border-gray-200'
                          }`}
                        >
                          <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary font-bold' : ''}`}>
                            {format(day, 'd')}
                          </div>
                          <div className="space-y-1">
                            {dayEvents.slice(0, 2).map((event, eventIdx) => (
                              <div
                                key={eventIdx}
                                className={`text-xs p-1 rounded text-white truncate ${getActivityTypeColor(event.activityType)}`}
                                title={event.title}
                              >
                                {format(new Date(event.date), 'p')} {event.title}
                              </div>
                            ))}
                            {dayEvents.length > 2 && (
                              <div className="text-xs text-gray-500 font-medium">
                                +{dayEvents.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="md:hidden space-y-3">
                    {calendarDays.filter(day => isSameMonth(day, currentDate)).map((day, idx) => {
                      const dayEvents = getEventsForDay(day);
                      const isToday = isSameDay(day, new Date());
                      
                      if (dayEvents.length === 0) return null;
                      
                      return (
                        <div
                          key={idx}
                          className={`bg-white border rounded-lg p-4 shadow-sm ${
                            isToday ? 'border-primary border-2' : 'border-gray-200'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="text-sm text-gray-500">
                                {format(day, 'EEEE')}
                              </div>
                              <div className={`text-xl font-bold ${
                                isToday ? 'text-primary' : 'text-gray-800'
                              }`}>
                                {format(day, 'MMMM d, yyyy')}
                              </div>
                            </div>
                            {isToday && (
                              <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                                Today
                              </span>
                            )}
                          </div>
                          
                          <div className="space-y-3">
                            {dayEvents.map((event, eventIdx) => (
                              <div
                                key={eventIdx}
                                className="border-l-4 pl-3 py-2"
                                style={{ borderColor: getActivityTypeColor(event.activityType).replace('bg-', '#') }}
                              >
                                <h4 className="font-semibold text-gray-800 mb-1">
                                  {event.title}
                                </h4>
                                <div className="space-y-1 text-sm text-gray-600">
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span>{event.group}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>{event.venue}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{format(new Date(event.date), 'p')}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className={`px-2 py-0.5 rounded text-white text-xs ${getActivityTypeColor(event.activityType)}`}>
                                      {event.activityType}
                                    </span>
                                  </div>
                                  {event.description && (
                                    <p className="text-gray-700 mt-2 text-sm">
                                      {event.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                    
                    {calendarDays.filter(day => isSameMonth(day, currentDate) && getEventsForDay(day).length > 0).length === 0 && (
                      <div className="text-center py-12 text-gray-500">
                        <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-lg">No events this month</p>
                      </div>
                    )}
                  </div>
                </>
              )}

              {selectedDate && dayEvents.length > 0 && (
                <div className="hidden md:block mt-6 bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Events on {format(selectedDate, 'MMMM d, yyyy')}
                    </h3>
                    <button
                      onClick={() => setSelectedDate(null)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {dayEvents.map((event, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Group:</span>
                                <span>{event.group}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Type:</span>
                                <span className={`px-2 py-1 rounded text-white text-xs ${getActivityTypeColor(event.activityType)}`}>
                                  {event.activityType}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Venue:</span>
                                <span>{event.venue}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-medium">Date & Time:</span>
                                <span>{format(new Date(event.date), 'PPP p')}</span>
                              </div>
                            </div>
                            {event.description && (
                              <p className="mt-3 text-gray-700">{event.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Events for {format(currentDate, 'MMMM yyyy')}
              </h2>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              ) : filteredEvents.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-lg">No events found for this month</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredEvents.map((event, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-white text-sm ${getActivityTypeColor(event.activityType)}`}>
                              {event.activityType}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{format(new Date(event.date), 'PPP p')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span>{event.venue}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                              <span>{event.group}</span>
                            </div>
                          </div>
                          {event.description && (
                            <p className="text-gray-700 mt-2">{event.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activityTypes.filter(type => type !== 'All').map(type => (
              <div key={type} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${getActivityTypeColor(type)}`}></div>
                <span className="text-sm text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
