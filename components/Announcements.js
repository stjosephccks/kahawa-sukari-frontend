import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Announcements() {
  const [groupedAnnouncements, setGroupedAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

      // Sort Sundays in descending order (newest first)
      const sortedSundays = Object.keys(grouped).sort(
        (a, b) => new Date(b) - new Date(a)
      );
      const sortedGrouped = {};

      // Add all Sundays in sorted order
      sortedSundays.forEach((sunday) => {
        sortedGrouped[sunday] = grouped[sunday];
      });

      setGroupedAnnouncements(sortedGrouped);
      setIsLoading(false);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="py-8 px-1 sm:px-2 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4">
          Announcements
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg px-1 sm:px-2">
          Stay updated with the latest news and events from our parish
          community.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto space-y-6 sm:space-y-8"
      >
        {Object.keys(groupedAnnouncements).map((sunday) => (
          <motion.div
            key={sunday}
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="bg-primary p-3 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Announcements for {sunday}
              </h2>
            </div>
            <div className="p-3 sm:p-6">
              <ul className="space-y-4 sm:space-y-6">
                {groupedAnnouncements[sunday].map((announcement) => (
                  <motion.li
                    key={announcement._id}
                    variants={itemVariants}
                    className="border-l-4 border-primary pl-3 sm:pl-6 py-2 sm:py-3 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg sm:text-xl font-semibold text-primary mb-1 sm:mb-2">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg leading-relaxed">
                      {announcement.description}
                    </p>

                    {announcement.massScheduleAssignments &&
                      announcement.massScheduleAssignments.length > 0 && (
                        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                          {/* <h4 className="font-medium text-primary mb-2 sm:mb-3 text-base sm:text-lg">
                            Mass Schedule Assignments
                          </h4> */}
                          <ul className="space-y-2">
                            {announcement.massScheduleAssignments.map(
                              (assignment, index) => (
                                <li
                                  key={index}
                                  className="flex flex-col sm:flex-row sm:items-center sm:space-x-2"
                                >
                                  <span className="text-primary hidden sm:inline">
                                    •
                                  </span>
                                  <span className="font-medium text-base sm:text-lg">
                                    {assignment.name}
                                  </span>
                                  <span className="text-gray-500 text-sm sm:text-base">
                                    {assignment.time}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
