import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Formations_Links from "@/components/Formations_Links";
import ContactCard from "@/components/ContactCard";
import BulletinCard from "@/components/Bulletincard";
import axios from "axios";
import SEO from "@/components/SEO";

function Couples() {
  const [bulletins, setBulletins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBulletins = async () => {
      try {
        const response = await axios.get("/api/bulletins");
        const youngCouplesBulletin = response.data.filter( (bulletin) => bulletin.sections && bulletin.sections.includes("MATRIMONY"))
        setBulletins(youngCouplesBulletin);
      } catch (error) {
        console.error("Error fetching bulletins:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBulletins();
  }, []);

  const title = "Couples Growing Together in Christ";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/cgtc.jpeg";
  const text = "Building strong Catholic marriages and families";
  const chaplain = "Fr. Guliano - Spiritual Director";
  // const chapTel = "0737032180";
  const moderator = "CGTC Moderator - Erastus Karani";
  // const modTel = "+254 713 173886";

  return (
    <Layout>
     <SEO title="Couples Growing Together in Christ | St. Joseph Catholic Church Kahawa Sukari"
        description="St.Joseph Catholic Church Kahawa Sukari | Couples Growing Together in Christ"
        keywords="St.Joseph Catholic Church Kahawa Sukari, Couples Growing Together in Christ, Church Couples Growing Together in Christ, Church Events"
        url="https://stjosephchurchkahawasukari.org/formation/couples"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-4">
                <Formations_Links />
              </div>
            </div>

            <div className="lg:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About Our Couples Group
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  The Couples Growing Together in Christ (CGTC) is a vibrant
                  community of married couples who come together to grow in
                  faith, strengthen their marriages, and build lasting
                  friendships. Through shared experiences, prayer, and learning,
                  we support each other in living out our Catholic faith in our
                  marriages and families.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      What We Do
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Monthly couple gatherings and discussions</li>
                      <li>Marriage enrichment programs</li>
                      <li>Faith formation sessions</li>
                      <li>Social events and outings</li>
                      <li>Prayer and worship together</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Topics We Cover
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Communication in marriage</li>
                      <li>Prayer life as a couple</li>
                      <li>Natural Family Planning</li>
                      <li>Parenting preparation</li>
                      <li>Financial stewardship</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Our Mission
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      We aim to create a supportive environment where young
                      couples can:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                      <li>Deepen their relationship with God and each other</li>
                      <li>Learn from experienced married couples</li>
                      <li>Build a strong foundation for their family life</li>
                      <li>
                        Form lasting friendships with other Catholic couples
                      </li>
                      <li>Grow in understanding of Catholic marriage</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Meeting Schedule
                  </h3>
                  <p className="text-gray-600">
                    We meet after two momnths on the 3rd Sunday at 2:00 pm in
                    the Fathers' Gazebo. Special events and retreats are
                    organized throughout the year. All couples are welcome to
                    join our community.
                  </p>
                </div>
                <ContactCard
                  chaplain={chaplain}
                  // chapTel={chapTel}
                  moderator={moderator}
                // modTel={modTel}
                />

                {/* Bulletin Section */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    CGTC Bulletins
                  </h2>
                  {isLoading ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                    </div>
                  ) : bulletins.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {bulletins.map((bulletin) => (
                        <BulletinCard key={bulletin._id} bulletin={bulletin} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-lg">
                      <p className="text-gray-600">No bulletins available at the moment.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Couples;
