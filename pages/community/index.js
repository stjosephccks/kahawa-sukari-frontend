import Eventcard from "@/components/Eventcard";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";

function Event() {
  const [events, setEvents] = useState([]);

  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const title = "EVENTS";
  const text =
    "As I hope in thee, O Lord, inspire me with that confidence, which brings me to thy holy mountain.";

  useEffect(() => {
    axios.get("/api/events").then((response) => {
      setEvents(response.data);
      console.log(events);
    });
  }, []);
  return (
    <Layout>
      <SEO title="Upcoming Parish Events | St. Joseph Catholic Church Kahawa Sukari" 
          description="St.Joseph Catholic Church Kahawa Sukari | Upcoming Events As I hope in thee, O Lord, inspire me with that confidence, which brings me to thy holy mountain." 
          keywords="St.Joseph Catholic Church Kahawa Sukari, Upcoming Events, Mass Times, Church Events"
          url="https://stjosephchurchkahawasukari.org/community"
     />
      <Hero imageUrl={imageurl} text={text} title={title} />
      <div>
        <h1 className="text-primary mt-24 ml-3 md:text-center">
          Upcoming Events
        </h1>
        <div className="container mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 mx-2">
            {events.map((event) => (
              <Eventcard key={event._id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Event;
