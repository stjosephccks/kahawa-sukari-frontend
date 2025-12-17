import axios from "axios";
import { useState, useEffect } from "react";
import { FaBell, FaCalendarAlt, FaClock, FaChurch } from "react-icons/fa";

export default function Announcements({ maxItems = 3 }) {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get("/api/announcements");
        // Sort by date, newest first
        const sorted = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
        setAnnouncements(sorted);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-12">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // if (announcements.length === 0) {
  //   return (
  //     <div className="text-center p-8 bg-gray-50 rounded-lg">
  //       <FaBell className="mx-auto text-3xl text-gray-300 mb-3" />
  //       <h3 className="text-gray-700">No announcements available</h3>
  //       <p className="text-gray-500 text-sm mt-1">Please check back later</p>
  //     </div>
  //   );
  // }

  const displayedAnnouncements = showAll 
    ? announcements 
    : announcements.slice(0, maxItems);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
     

      <div className="divide-y divide-gray-100">
      
        {displayedAnnouncements.map((announcement) => (
          
          <div key={announcement._id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="bg-primary text-white p-4 rounded-t-lg">
        <div className="flex items-center">
          <FaBell className="mr-3 text-xl" />
          <h2 className="text-xl font-semibold">Parish Notices</h2>
        </div>
      </div>
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900">
                    {announcement.title}
                  </h3>
                </div>
                <p className="mt-1 text-gray-700">
                  {announcement.description}
                </p>

                {announcement.massScheduleAssignments?.length > 0 && (
                  <div className="mt-3 bg-gray-50 p-3 rounded">
                    <h4 className="text-sm font-medium text-gray-800 flex items-center mb-2">
                      <FaCalendarAlt className="mr-2 text-primary" />
                       Schedule
                    </h4>
                    <ul className="space-y-2">
                      {announcement.massScheduleAssignments.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-medium">{item.name}</span>
                            {item.time && (
                              <span className="inline-flex items-center text-xs text-gray-600">
                                <FaClock className="mr-1" />
                                {item.time}
                              </span>
                            )}
                            {item.location && (
                              <span className="inline-flex items-center text-xs text-gray-600">
                                <FaChurch className="mr-1" />
                                {item.location}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {announcements.length > maxItems && (
        <div className="p-4 text-center border-t border-gray-100">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-primary hover:text-primary-dark font-medium"
          >
            {showAll ? 'Show Less' : `View All (${announcements.length})`}
          </button>
        </div>
      )}
    </div>
  );
}
 