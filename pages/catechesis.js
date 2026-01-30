import Layout from "@/components/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import Link from "next/link";
import { format } from "date-fns";

function CatechesisPage() {
  const [bulletins, setBulletins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState("All");

  const DEFAULT_COVER = "https://kahawa-sukari.s3.amazonaws.com/1757084396156.jpeg";

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        const response = await axios.get("/api/bulletins");
        const catechesisBulletins = response.data.filter(
          (bulletin) => bulletin.sections && bulletin.sections.includes("CHATECHISIS")
        );
        const bulletinsWithCover = catechesisBulletins.map(bulletin => {
          if (!bulletin.images || !Array.isArray(bulletin.images) || bulletin.images.length === 0) {
            return { ...bulletin, images: [DEFAULT_COVER] };
          }
          return bulletin;
        });
        const sortedBulletins = bulletinsWithCover.sort((a, b) => 
          new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBulletins(sortedBulletins);
      } catch (error) {
        console.error("Error fetching catechesis bulletins:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBulletins();
  }, []);

  const allTags = ["All", ...new Set(bulletins.flatMap(b => b.tags || []))];
  
  const filteredBulletins = selectedTag === "All" 
    ? bulletins 
    : bulletins.filter(b => b.tags && b.tags.includes(selectedTag));

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").substring(0, 200);
  };

  return (
    <Layout>
      <SEO title="Faith Formation & Catechesis | St. Joseph Catholic Church Kahawa Sukari"
        description="Explore our faith formation programs and catechesis at St. Joseph Catholic Church Kahawa Sukari. Grow in your Catholic faith through our comprehensive religious education."
        keywords="Catholic faith formation, Religious education Nairobi, Catechesis Kenya, Catholic sacramental preparation, Bible study Kahawa Sukari"
        url="https://stjosephchurchkahawasukari.org/catechesis"
      />
      
      <div className="min-h-screen bg-white">
        <div className=" text-gray-800 py-12 md:py-16 mt-12 md:mt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                Catechesis
              </h1>
              <p className="text-base md:text-lg text-gray-600">
                Weekly teachings and reflections from the Church
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6 md:py-8">
          {allTags.length > 1 && (
            <div className="mb-6 pb-4 border-b border-gray-200">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-gray-700 text-sm mr-1">Filter by:</span>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 text-sm transition-colors ${
                      selectedTag === tag
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center min-h-[400px]">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-3"></div>
                <p className="text-gray-600 text-sm">Loading...</p>
              </div>
            </div>
          ) : filteredBulletins.length > 0 ? (
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {filteredBulletins.map((bulletin, index) => (
                    <div key={bulletin._id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="bg-gray-100 px-3 py-2 text-center min-w-[60px]">
                            <div className="text-xs text-gray-500 uppercase">
                              {format(new Date(bulletin.createdAt), "MMM")}
                            </div>
                            <div className="text-2xl font-bold text-gray-800">
                              {format(new Date(bulletin.createdAt), "dd")}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="mb-2">
                            {bulletin.tags && bulletin.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-2">
                                {bulletin.tags.slice(0, 3).map((tag, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs text-gray-600 bg-gray-100 px-2 py-1"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          
                          <Link href={`/welcome/bulletin/${bulletin.slug || bulletin._id}`}>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 hover:text-primary cursor-pointer">
                              {bulletin.title}
                            </h2>
                          </Link>
                          
                          {bulletin.excerpt && (
                            <p className="text-gray-600 mb-3 text-sm italic leading-relaxed">
                              {bulletin.excerpt}
                            </p>
                          )}
                          
                          <p className="text-gray-700 mb-3 leading-relaxed">
                            {bulletin.description || stripHtml(bulletin.content)}
                          </p>
                          
                          <Link 
                            href={`/welcome/bulletin/${bulletin.slug || bulletin._id}`}
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            Read more →
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center py-12">
              <div className="border border-gray-200 p-8">
                <p className="text-gray-600 text-lg mb-4">
                  {selectedTag !== "All" 
                    ? `No content found for "${selectedTag}".`
                    : "No catechesis content available at the moment."
                  }
                </p>
                {selectedTag !== "All" && (
                  <button
                    onClick={() => setSelectedTag("All")}
                    className="text-primary hover:underline text-sm"
                  >
                    View all content
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default CatechesisPage;
