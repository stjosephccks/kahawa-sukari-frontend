import BulletinCard from "@/components/Bulletincard";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";

function CatechesisPage() {
  const [bulletins, setBulletins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/1749292585307.jpg";
  const title = "CATECHESIS";
  const text =
    "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you."; // Matthew 28:19-20 or similar

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        const response = await axios.get("/api/bulletins");
        const catechesisBulletins = response.data.filter(
          (bulletin) => bulletin.sections && bulletin.sections.includes("CHATECHISIS")
        );
        setBulletins(catechesisBulletins);
      } catch (error) {
        console.error("Error fetching catechesis bulletins:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBulletins();
  }, []); // Removed bulletins from dependency array to prevent re-fetching on setBulletins

  return (
    <Layout>
      <SEO title="St.Joseph Kahawa Sukari | Catechesis" 
          description="St.Joseph Kahawa Sukari | Catechesis" 
          keywords="St.Joseph Kahawa Sukari, Catechesis, Mass Times, Church Events"
          url="https://stjosephchurchkahawasukari.org/catechesis"
     />
      <Hero imageUrl={imageurl} title={title} text={text} />
      <div>
        <h1 className="text-primary mt-24 ml-3 md:text-center">Catechesis</h1>
        <div className="container mx-auto my-8">
          {isLoading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : bulletins.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-2">
              {bulletins.map((bulletin) => (
                <BulletinCard key={bulletin._id} bulletin={bulletin} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No catechesis bulletins found at the moment.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CatechesisPage;
