import BulletinCard from "@/components/Bulletincard";
import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";

function CatechesisPage() {
  const [bulletins, setBulletins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Default cover image for bulletins without images
  const DEFAULT_COVER = "https://kahawa-sukari.s3.amazonaws.com/1757084396156.jpeg";

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        const response = await axios.get("/api/bulletins");
        const catechesisBulletins = response.data.filter(
          (bulletin) => bulletin.sections && bulletin.sections.includes("CHATECHISIS")
        );
        // Add default cover if missing
        const bulletinsWithCover = catechesisBulletins.map(bulletin => {
          if (!bulletin.images || !Array.isArray(bulletin.images) || bulletin.images.length === 0) {
            return { ...bulletin, images: [DEFAULT_COVER] };
          }
          return bulletin;
        });
        setBulletins(bulletinsWithCover);
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
      <SEO title="Faith Formation & Catechesis | St. Joseph Catholic Church Kahawa Sukari"
        description="Explore our faith formation programs and catechesis at St. Joseph Catholic Church Kahawa Sukari. Grow in your Catholic faith through our comprehensive religious education."
        keywords="Catholic faith formation, Religious education Nairobi, Catechesis Kenya, Catholic sacramental preparation, Bible study Kahawa Sukari"
        url="https://stjosephchurchkahawasukari.org/catechesis"
      />
      <div className="md:mt-32 mt-24">
        <h1 className="text-primary mb-6 text-3xl font-bold text-center">Catechesis Bulletins</h1>
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
