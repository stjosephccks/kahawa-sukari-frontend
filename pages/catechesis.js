import BulletinCard from "@/components/Bulletincard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function CatechesisPage() {
  const [bulletins, setBulletins] = useState([]);

  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/catechism.jpg"; // Replace with a relevant image for Catechesis
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
      }
    };

    fetchBulletins();
  }, []); // Removed bulletins from dependency array to prevent re-fetching on setBulletins

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Catechesis</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahawa Sukari - Catechesis"
          key="title"
        />
      </Head>
      <Hero imageUrl={imageurl} title={title} text={text} />
      <div>
        <h1 className="text-primary mt-24 ml-3 md:text-center">Catechesis Bulletins</h1>
        <div className="container mx-auto my-8">
          {bulletins.length > 0 ? (
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
      {/* Footer is usually part of Layout, if not, uncomment below */}
      {/* <Footer /> */}
    </Layout>
  );
}

export default CatechesisPage;
