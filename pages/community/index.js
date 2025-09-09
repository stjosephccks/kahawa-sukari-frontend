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
