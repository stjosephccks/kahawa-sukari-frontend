import BulletinCard from "@/components/Bulletincard";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";

function Bulletin() {
  const [bulletins, setBulletins] = useState([]);
  const [page, setPage] = useState(1);

  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const title = "BULLETIN";
  const text =
    "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth";

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        const response = await axios.get("/api/bulletins");
        setBulletins(response.data);
      } catch (error) {
        console.error("Error fetching bulletins:", error);
      }
    };

    fetchBulletins();
  }, []); 

  return (
    <Layout>
      <SEO title="St.Joseph Kahawa Sukari | News Bulletins" 
          description="St.Joseph Kahawa Sukari | News Bulletins" 
          keywords="St.Joseph Kahawa Sukari, News Bulletins, Mass Times, Church Events"
          url="https://stjosephchurchkahawasukari.org/welcome/bulletin"
     />
      <Hero imageUrl={imageurl} title={title} text={text} />
      <div>
        <h1 className="text-primary mt-24 ml-3 md:text-center">Bulletins</h1>
        <div className="container mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-2">
            {bulletins.map((bulletin) => (
              <BulletinCard key={bulletin._id} bulletin={bulletin} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Bulletin;
