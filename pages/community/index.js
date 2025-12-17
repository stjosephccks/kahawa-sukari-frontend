import Eventcard from "@/components/Eventcard";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";

function Event() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const title = "EVENTS";
  const text =
    "As I hope in thee, O Lord, inspire me with that confidence, which brings me to thy holy mountain.";

  useEffect(() => {
    axios.get("/api/events").then((response) => {
      const allEvents = response.data;
      const now = new Date();
      const upcoming = allEvents.filter(event => new Date(event.date) >= now).sort((a, b) => new Date(a.date) - new Date(b.date));
      const past = allEvents.filter(event => new Date(event.date) < now).sort((a, b) => new Date(b.date) - new Date(a.date));
      setUpcomingEvents(upcoming);
      setPastEvents(past);
    });
  }, []);

  return (
    <Layout>
      <SEO title="Parish Events | St. Joseph Catholic Church Kahawa Sukari" 
          description="St.Joseph Catholic Church Kahawa Sukari | Upcoming and Past Events. As I hope in thee, O Lord, inspire me with that confidence, which brings me to thy holy mountain." 
          keywords="St.Joseph Catholic Church Kahawa Sukari, Upcoming Events, Past Events, Mass Times, Church Events"
          url="https://stjosephchurchkahawasukari.org/community"
     />
      <div className="bg-white min-h-screen pt-20">
        {upcomingEvents.length > 0 && (
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Upcoming Events
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join us for inspiring events that bring our community together in faith and fellowship.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <Eventcard key={event._id} event={event} />
              ))}
            </div>
          </div>
        )}

        {upcomingEvents.length === 0 && pastEvents.length === 0 && (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gray-50 rounded-lg p-12 shadow-sm">
                <svg 
                  className="w-24 h-24 mx-auto mb-6 text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  No Events Available
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We currently don't have any scheduled events. Please check back soon for upcoming Events.
                </p>
                <p className="text-md text-gray-500 italic">
                  "For where two or three gather in my name, there am I with them." - Matthew 18:20
                </p>
              </div>
            </div>
          </div>
        )}

        {upcomingEvents.length === 0 && pastEvents.length > 0 && (
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="bg-blue-50 rounded-lg p-8 shadow-sm">
                <svg 
                  className="w-16 h-16 mx-auto mb-4 text-blue-500" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  No Upcoming Events
                </h2>
                <p className="text-gray-600">
                  Stay tuned! New events will be announced soon. Check out our past events below.
                </p>
              </div>
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Past Events
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Relive the moments that shaped our community through our recent events.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {pastEvents.map((event) => (
                <Eventcard key={event._id} event={event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Event;
