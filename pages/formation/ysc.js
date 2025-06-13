import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import ContactCard from "@/components/ContactCard";

function YouthServiceCommittee() {
  const title = "Youth Service Committee";
  const text =
    "The Youth Service Committee (YSC) is a vibrant group of young Catholics aged 18-26 years dedicated to serving our parish community.";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/ysc-min.png";
  const chaplain = "Fr. Mattia - Youth Chaplain";
  const moderator = "Moderator - Michael Joseph";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Youth Service Committee</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Youth Service Committee"
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
                      About YSC
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Youth Service Committee (YSC) is a vibrant group of
                      young Catholics aged 18-26 years. We are dedicated to
                      serving our parish community through various ministries
                      and activities while growing in our faith and fellowship.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our mission is to empower young people to live as
                      disciples of Jesus Christ in our world today, to draw
                      young people to responsible participation in the life,
                      mission, and work of the Catholic faith community, and to
                      foster the total personal and spiritual growth of each
                      young person.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>
                        To foster spiritual growth through prayer and sacraments
                      </li>
                      <li>To develop leadership skills among young people</li>
                      <li>
                        To promote Christian values and social responsibility
                      </li>
                      <li>
                        To create opportunities for fellowship and community
                        building
                      </li>
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
                        <li>Spiritual Thursdays</li>
                        <li>Monthly Counselling Sessions</li>
                        <li>Formation Classes(Third Sunday of the month)</li>

                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Every Sunday</strong> - After 12:00 NOON Mass
                        </li>
                        <li>
                          <strong>Every Thursday</strong> - Bible Study at 6:00
                          PM
                        </li>
                        <li>
                          <strong>First Saturday of the Month</strong> - Youth
                          Mass at 5:00 PM
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
                        <li>Liturgical Dancers</li>
                        <li>Lectors</li>
                        <li>Choir</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Social Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Community Service</li>
                        <li>Charity Work</li>
                        <li>Youth Outreach</li>
                      </ul>
                    </div>

                    {/* <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Bible Study</li>
                        <li>Faith Formation</li>
                        <li>Leadership Training</li>
                      </ul>
                    </div> */}
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

export default YouthServiceCommittee;
