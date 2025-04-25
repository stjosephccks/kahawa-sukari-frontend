"use client";

import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";

export default function MassSchedule() {
  const title = "Mass Schedule";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text = "Join us in celebrating the Holy Eucharist";

  return (
    <Layout>
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
                Regular Mass Times
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Weekday Masses
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Tuesday - Friday</span>
                      <span className="font-medium">7:30 AM & 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Monday & Saturday</span>
                      <span className="font-medium">7:30 AM</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Sunday Masses
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>7:30 AM</span>
                      <span className="font-medium">English</span>
                    </li>
                    <li className="flex justify-between">
                      <span>9:00 AM</span>
                      <span class Name="font-medium">
                        Swahili
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>9:30 AM -Wendani</span>
                      <span class Name="font-medium">
                        Swahili
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>10:30 AM</span>
                      <span className="font-medium">Swahili</span>
                    </li>
                    <li className="flex justify-between">
                      <span>12:00 PM</span>
                      <span className="font-medium">English</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Other Services
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Confessions
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Tuesday - Friday</span>
                      <span className="font-medium">5:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">7:30 AM - 11:30 AM</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Eucharistic Adoration
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
                    Holy Rosary
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Tuesday - Friday</span>
                      <span className="font-medium">5:30 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">7:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
