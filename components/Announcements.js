import axios from "axios";

import React, { useEffect, useState } from "react";

export default function Announcements() {
  const [groupedAnnouncements, setGroupedAnnouncements] = useState([]);
  useEffect(() => {
    axios.get("/api/announcements").then((response) => {
      const grouped = response.data.reduce((acc, announcement) => {
        const sunday = announcement.sunday.sunday;
        if (!acc[sunday]) {
          acc[sunday] = [];
        }
        acc[sunday].push(announcement);
        return acc;
      }, {});
      setGroupedAnnouncements(grouped);
    });
  }, [groupedAnnouncements]);

  return (
    <div id="announcements" className="mt-24 ml-3 md:text-center">
      <div className="mt-6">
        {Object.keys(groupedAnnouncements).map((sunday) => (
          <div key={sunday} className="text-2xl">
            <h2 className="text-xl font-semibold mb-4">
              Announcement for {sunday}
            </h2>
            <ul className="list-disc text-left md:ml-44">
              {groupedAnnouncements[sunday].map((announcement) => (
                <li key={announcement._id} className="mb-4">
                  <h3 className="text-xl font-semibold">
                    {announcement.title}
                  </h3>
                  <p className="">{announcement.description}</p>

                  {announcement.massScheduleAssignments &&
                    announcement.massScheduleAssignments.length > 0 && (
                      <div className="mt-2">
                        <ul className="list-inside list-disc special-text ">
                          {announcement.massScheduleAssignments.map(
                            (assignment, index) => (
                              <li key={index} className="whitespace-nowrap">
                                {assignment.name}: {assignment.time}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
