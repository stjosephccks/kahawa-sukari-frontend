"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function AlterServers() {
  const title = "Altar Servers";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text = "Serving at the Altar of the Lord";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Altar Servers</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Altar Servers"
          key="title"
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About Altar Serving
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    What is an Altar Server?
                  </h3>
                  <p className="text-gray-600">
                    Altar servers assist the priest during Mass and other
                    liturgical celebrations. They help prepare the altar, carry
                    the cross and candles, and assist with various tasks during
                    the service.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Requirements
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Must have received First Holy Communion</li>
                    {/* <li>Must be willing to commit to regular service</li>
                    <li>Must attend training sessions</li>
                    <li>Must maintain good academic standing</li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Schedule & Classes
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Class Schedule
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Alter  Servers CLass</span>
                      <span className="font-medium">
                        Every Saturday 3:00 PM
                      </span>
                    </li>

                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Service Schedule
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Weekday Masses</span>
                      <span className="font-medium">As Assigned</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday Masses</span>
                      <span className="font-medium">Rotating Schedule</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Special Occasions</span>
                      <span className="font-medium">As Needed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">
                    For more information about becoming an altar server, please
                    contact:
                    <br />
                    <span className="font-medium">
                      <strong>
                        {" "}
                        Altar Servers Coordinator: Catechist John
                      </strong>
                      <br />
                      {/* <Link href="tel:0759307297">0759307297</Link> */}
                    </span>
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
