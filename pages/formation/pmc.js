import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function PontificalMissionHospital() {
  const title = "Parish Missionary Children";
  const text =
    "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these. —Matthew 19:14";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/yca.jpeg";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Parish Missionary Children</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Parish Missionary Children"
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
                      About PMC
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Parish Missionary Children (PMC) is a vibrant group
                      for young Catholics from ages 6 to 12. We provide a
                      nurturing environment where children can grow in their
                      faith, develop their talents, and learn to serve others
                      through various ministries and activities.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our mission is to help children develop a strong
                      foundation in their Catholic faith, discover their
                      God-given talents, and learn the joy of serving others. We
                      focus on making faith formation fun and engaging while
                      preparing children for their future involvement in the
                      Mantle of St. Joseph.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>To provide solid Catholic faith formation</li>
                      <li>
                        To develop children&apos;s talents in music and dance
                      </li>
                      <li>To teach the importance of charity and service</li>
                      <li>To prepare children for future ministries</li>
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
                        <li>Catechism Classes</li>
                        <li>Children&apos;s Choir Practice</li>
                        <li>Liturgical Dance Practice</li>
                        <li>Charity Projects</li>
                        <li>Bible Stories and Activities</li>
                        <li>Arts and Crafts</li>
                        <li>Prayer and Worship</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Every Saturday</strong> - 9:00 AM to 12:00 PM
                        </li>
                        <li>
                          <strong>First Sunday of the Month</strong> -
                          Children&apos;s Mass at 10:00 AM
                        </li>
                        <li>
                          <strong>Third Sunday of the Month</strong> - Charity
                          Activity
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
                        <li>Children's Choir</li>
                        <li>Liturgical Dancers</li>
                        <li>Altar Servers</li>
                        <li>Readers</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Catechism Classes</li>
                        <li>Bible Study</li>
                        <li>Prayer Groups</li>
                        <li>Faith Formation</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Service Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Charity Work</li>
                        <li>Community Service</li>
                        <li>Parish Support</li>
                        <li>Missionary Activities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Special Programs
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Children's Choir
                      </h3>
                      <p className="text-gray-600">
                        Our children's choir provides musical training and
                        performance opportunities during special Masses and
                        events. Children learn hymns, liturgical music, and
                        develop their musical talents.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Liturgical Dance
                      </h3>
                      <p className="text-gray-600">
                        The liturgical dance group helps children express their
                        faith through movement. They perform during special
                        Masses and parish events, bringing joy and beauty to our
                        worship.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Transition to Mantle of St. Joseph
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      As children grow and complete their confirmation, they
                      transition to the Mantle of St. Joseph group. This natural
                      progression allows them to continue their faith journey
                      with more advanced formation and service opportunities.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-2 text-blue-800">
                    <p>
                      <strong>PMC Coordinator</strong>
                      <br />
                      <Link
                        href="tel:0723721678"
                        className="hover:text-blue-600"
                      >
                        0723721678
                      </Link>
                    </p>
                    <p>
                      <strong>Choir Director</strong>
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
                        href="mailto:pmc@stjosephkahawasukari.org"
                        className="hover:text-blue-600"
                      >
                        pmc@stjosephkahawasukari.org
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

export default PontificalMissionHospital;
