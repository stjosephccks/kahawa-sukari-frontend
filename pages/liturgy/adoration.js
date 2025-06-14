"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Head from "next/head";

export default function EucharisticAdoration() {
  const title = "Eucharistic Adoration";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const text = "Come and spend time with Jesus in the Blessed Sacrament";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Eucharistic Adoration </title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Eucharistic Adoration"
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
                Adoration Schedule
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Regular Adoration
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Saturday</span>
                      <span className="font-medium">7:00 AM</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Special Adoration
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Second Wesnesday of the Month</span>
                      <span className="font-medium">6:30 pm</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Lent and Advent</span>
                      <span className="font-medium">Extended Hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                About Eucharistic Adoration
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    What is Eucharistic Adoration?
                  </h3>
                  <p className="text-gray-600">
                    Eucharistic Adoration is a form of prayer where we worship
                    Jesus Christ present in the Blessed Sacrament. It is a time
                    of quiet prayer and reflection in the presence of our Lord.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    How to Participate
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Sign up for an hour of adoration</li>
                    <li>Spend time in prayer and meditation</li>
                    <li>Read Scripture or spiritual books</li>
                    <li>Pray the Rosary or Divine Mercy Chaplet</li>
                    <li>Simply be present with Jesus</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">
                    For more information about Eucharistic Adoration or to sign
                    up for an hour, please contact:
                    <br />
                    <span className="font-medium">
                      Parish Office: 0712 345 678
                    </span>
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
