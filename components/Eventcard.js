import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Eventcard({ event }) {
  function formatDateForDisplay(date) {
    return date ? format(new Date(date), "MMMM d, yyyy - h:mm a") : "";
  }

  // Truncate description if it's too long
  const truncateDescription = (text, maxLength = 100) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <div className="group relative w-full h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
      <Link
        href={`/community/event/${event._id}`}
        className="block h-full"
        aria-label={`View details for ${event.title}`}
      >
        <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
          <Image
            src={event.images?.[0] || "/placeholder-event.jpg"}
            alt={event.title || "Event image"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="bg-white p-6 rounded-b-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
            {event.title}
          </h3>

          <div className="space-y-2 text-gray-600">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formatDateForDisplay(event.date)}</span>
            </div>

            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{event.venue}</span>
            </div>
          </div>

          {event.description && (
            <p className="mt-4 text-gray-600 text-sm">
              {truncateDescription(event.description)}
            </p>
          )}

          <div className="mt-4 flex items-center text-primary group-hover:text-primary-dark transition-colors duration-300">
            <span className="text-sm font-medium">View Details</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Eventcard;
