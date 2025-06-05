import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import ContactCard from "@/components/ContactCard";

function MantleOfStJoseph() {
  const title = "Mantle of St. Joseph";
  const text =
    "The Mantle of St. Joseph is a special group for young Catholics who have completed their confirmation but haven&apos;t yet entered high school.";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/yca.jpeg";
  const chaplain = "Fr. Matia - Spiritual Director";
  // const chapTel = "0737032180";
  const moderator = "Mantle of St. Joseph Coordinator - Moderator";
  // const modTel = "0723721678";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Mantle of St. Joseph</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Mantle of St. Joseph"
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
                      About Mantle of St. Joseph
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Mantle of St. Joseph is a special group for young
                      Catholics who have completed their confirmation but
                      haven&apos;t yet entered high school. This group serves as
                      a bridge between childhood faith formation and the more
                      mature youth ministry programs.
                    </p>
                    <p className="text-lg text-gray-600">
                      Under the patronage of St. Joseph, we help young people
                      deepen their faith, develop their spiritual gifts, and
                      prepare for active participation in the Church&apos;s
                      mission. We focus on building a strong foundation for
                      their future involvement in MYM and other parish
                      ministries.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>To strengthen the faith received in confirmation</li>
                      <li>To develop a personal relationship with Jesus</li>
                      <li>To learn about the life and virtues of St. Joseph</li>
                      <li>To prepare for future involvement in MYM</li>
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
                        Regular Activities
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Weekly Faith Formation Classes</li>
                        <li>Monthly Youth Mass</li>
                        <li>Service Projects</li>
                        <li>Retreats and Spiritual Activities</li>
                        <li>Social and Team Building Events</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Every Sunday</strong> - After 10:00 AM Mass
                        </li>
                        <li>
                          <strong>First Saturday of the Month</strong> - Service
                          Project
                        </li>
                        <li>
                          <strong>Third Sunday of the Month</strong> - Youth
                          Mass at 10:00 AM
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Ministries
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Liturgical Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Altar Servers</li>
                        <li>Lectors</li>
                        <li>Choir</li>
                        <li>Ushers</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Service Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Community Service</li>
                        <li>Charity Work</li>
                        <li>Parish Support</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Bible Study</li>
                        <li>Faith Formation</li>
                        <li>Leadership Development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Transition to MYM
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      Members of the Mantle of St. Joseph typically transition
                      to MYM (Missionary Youth Movement) when they enter high
                      school. MYM is a more advanced youth group that builds
                      upon the foundation laid in the Mantle of St. Joseph,
                      offering deeper spiritual formation and more opportunities
                      for service and leadership.
                    </p>
                  </div>
                </div>
                <ContactCard
                  chaplain={chaplain}
                  // chapTel={chapTel}
                  moderator={moderator}
                // modTel={modTel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MantleOfStJoseph;
