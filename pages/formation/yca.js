import InfiniteCarousel from "@/components/Carousel";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Formations_Links from "@/components/Formations_Links";
import ContactCard from "@/components/ContactCard";

function YoungCatholicAdults() {
  const images = [
    "https://kahawa-sukari.s3.amazonaws.com/1728037544945.jpg",
    "https://kahawa-sukari.s3.amazonaws.com/1728037588402.jpg",
    "https://kahawa-sukari.s3.amazonaws.com/1728037649063.jpg",
    "https://kahawa-sukari.s3.amazonaws.com/1728037707265.jpg",
    "https://kahawa-sukari.s3.amazonaws.com/1728037725405.jpg",
    "https://kahawa-sukari.s3.amazonaws.com/yca7.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca8.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca9.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca10.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca13.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca14.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca15.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca16.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca17.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/yca19.jpeg",
  ];
  const title = "St. Joseph Young Catholic Adults";
  const text =
    "Dear young people, do not be satisfied with anything less than Truth and Love; do not be content with anything less than Christ. —Pope Benedict XVI";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/yca.jpeg";
  const chaplain = "Fr. Guliano - Youth Chaplain";
  const chapTel = "0737032180";
  const moderator = "YCA Coordinator - Moderator";
  const modTel = "0723721678";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Young Catholic Adults</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Young Catholic Adults Group - We are Legacy Seekers"
          key="title"
        />
      </Head>
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      About YCA
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Young Catholic Adults (YCA) is the last pastoral structure
                      dedicated to the youth in the Archdiocese, previously
                      known as Young Adults Catholic Association (YACA). These
                      are the youths who are aged from 27-35 years. It also
                      includes those young people who are below 27 years but
                      married or with children.
                    </p>
                    <p className="text-lg text-gray-600">
                      YCA, unlike other youth groups, are rather independent
                      because it is assumed that they are adults and capable of
                      self-management. However, they are under the guidance of
                      the youth chaplain in the Archdiocese, deanery and parish
                      level.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Developing Personal Identity</li>
                      <li>Developing Relationships</li>
                      <li>Developing a Meaning for work</li>
                      <li>Developing a Spiritual Life</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Activities & Schedule
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Activities
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Parish programs</li>
                        <li>Formation Classes</li>
                        <li>Social Activities (Hiking, Team Building, etc.)</li>
                        <li>Welfare (Outreach)</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>1st Sunday of the Month at 1:45pm</strong> -
                          Spiritual Sunday
                        </li>
                        <li>
                          <strong>3rd Sunday of the Month at 1:45 pm</strong> -
                          Free Meeting
                        </li>
                        <li>
                          <strong>
                            Tuesdays preceding the 1st and 3rd Sundays
                          </strong>{" "}
                          - Free Meeting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Charity Work
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      The group has a charitable activity every{" "}
                      <strong>4th Sunday of the month</strong>, where they visit{" "}
                      <strong>Nyumba Ya Wazee - kasarani</strong>
                    </p>
                  </div>
                </div>

                <ContactCard
                  chaplain={chaplain}
                  chapTel={chapTel}
                  moderator={moderator}
                  modTel={modTel}
                />

                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Gallery
                  </h2>
                  <InfiniteCarousel images={images} interval={10000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default YoungCatholicAdults;
