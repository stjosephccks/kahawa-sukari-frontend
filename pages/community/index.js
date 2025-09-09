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
      <Hero imageUrl={imageurl} text={text} title={title} />
      <div>
        {upcomingEvents.length > 0 && (
          <div>
            <h1 className="text-primary mt-24 ml-3 md:text-center">
              Upcoming Events
            </h1>
            <div className="container mx-auto my-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-2">
                {upcomingEvents.map((event) => (
                  <Eventcard key={event._id} event={event} />
                ))}
              </div>
            </div>
          </div>
        )}

        {pastEvents.length > 0 && (
          <div>
            <h1 className="text-primary mt-8 ml-3 md:text-center">
              Past Events
            </h1>
            <div className="container mx-auto my-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-2">
                {pastEvents.map((event) => (
                  <Eventcard key={event._id} event={event} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Event;
