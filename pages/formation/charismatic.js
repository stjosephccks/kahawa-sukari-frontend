import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Charismatic() {
  const title = "Catholic Charismatic Renewal";
  const text =
    "The Catholic Charismatic Renewal is a movement within the Church that emphasizes the power of the Holy Spirit in our daily lives and worship.";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/yca.jpeg";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Catholic Charismatic Renewal</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Catholic Charismatic Renewal"
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
                      About Charismatic Renewal
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Catholic Charismatic Renewal is a movement within the
                      Church that emphasizes the presence and power of the Holy
                      Spirit in the lives of believers. We seek to experience
                      the gifts of the Spirit while remaining firmly rooted in
                      Catholic tradition and teaching.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our mission is to help Catholics grow in their
                      relationship with Jesus Christ through the power of the
                      Holy Spirit, to foster a deeper prayer life, and to build
                      up the Church through the exercise of spiritual gifts.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>To deepen personal relationship with Jesus Christ</li>
                      <li>To experience the power of the Holy Spirit</li>
                      <li>To foster charismatic worship and prayer</li>
                      <li>To build up the Church through spiritual gifts</li>
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
                        <li>Weekly Prayer Meetings</li>
                        <li>Charismatic Mass</li>
                        <li>Praise and Worship Sessions</li>
                        <li>Healing Services</li>
                        <li>Bible Study and Teaching</li>
                        <li>Life in the Spirit Seminars</li>
                        <li>Retreats and Conferences</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Every Tuesday</strong> - Prayer Meeting at
                          6:00 PM
                        </li>
                        <li>
                          <strong>First Friday of the Month</strong> -
                          Charismatic Mass at 6:00 PM
                        </li>
                        <li>
                          <strong>Third Saturday of the Month</strong> - Healing
                          Service at 2:00 PM
                        </li>
                        <li>
                          <strong>Monthly</strong> - Life in the Spirit Seminar
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
                        Prayer Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Intercessory Prayer</li>
                        <li>Prayer for Healing</li>
                        <li>Deliverance Ministry</li>
                        <li>Prayer Counseling</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Worship Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Praise and Worship Team</li>
                        <li>Charismatic Choir</li>
                        <li>Music Ministry</li>
                        <li>Dance Ministry</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Bible Study</li>
                        <li>Teaching Ministry</li>
                        <li>Discipleship Training</li>
                        <li>Seminar Organization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Spiritual Gifts
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Charismatic Gifts
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Speaking in Tongues</li>
                        <li>Prophecy</li>
                        <li>Healing</li>
                        <li>Discernment of Spirits</li>
                        <li>Word of Knowledge</li>
                        <li>Word of Wisdom</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Service Gifts
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Leadership</li>
                        <li>Teaching</li>
                        <li>Administration</li>
                        <li>Hospitality</li>
                        <li>Service</li>
                        <li>Encouragement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Life in the Spirit Seminar
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      The Life in the Spirit Seminar is a seven-week program
                      designed to help Catholics understand and experience the
                      power of the Holy Spirit in their lives. Through teaching,
                      prayer, and fellowship, participants learn about the gifts
                      of the Spirit and how to use them for the building up of
                      the Church.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-blue-800">
                    <p>
                      <strong>Charismatic Coordinator</strong>
                      <br />
                      <Link
                        href="tel:0723721678"
                        className="hover:text-blue-600"
                      >
                        0723721678
                      </Link>
                    </p>
                    <p>
                      <strong>Prayer Ministry Leader</strong>
                      <br />
                      <Link
                        href="tel:0737032180"
                        className="hover:text-blue-600"
                      >
                        0737032180
                      </Link>
                    </p>
                    <p>
                      <strong>Email</strong>
                      <br />
                      <Link
                        href="mailto:charismatic@stjosephkahawasukari.org"
                        className="hover:text-blue-600"
                      >
                        charismatic@stjosephkahawasukari.org
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Charismatic;
