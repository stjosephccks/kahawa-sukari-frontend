import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";

export default function Eucharist() {
  const title = "The Sacrament of the Eucharist";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/Eucharist.jpg";
  const text = "The source and summit of the Christian life";

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-4">
                <Sacraments_Links />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-600 mb-6">
                    The Eucharist is the source and summit of the Christian
                    life. In this sacrament, we receive the Body and Blood of
                    Christ, who is truly present under the appearances of bread
                    and wine. Through the Eucharist, we are united with Christ
                    and with one another in the Church.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        First Holy Communion
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Children typically receive their First Holy Communion
                        after completing two year preparation program. The
                        program includes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Weekly religious education classes</li>
                        <li>Parent meetings and workshops</li>
                        <li>Retreat experience</li>
                        <li>Practice sessions</li>
                        <li>Regular Mass attendance</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Requirements for First Communion
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Must be baptized Catholic</li>
                        <li>
                          Must have attended two years of catechism classes
                        </li>
                        <li>Must attend all preparation classes</li>
                        <li>Must regularly attend Sunday Mass</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Mass Schedule
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Regular Mass Times
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Weekend Masses
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Saturday: 7:30 AM</li>
                            <li>
                              Sunday: 7:30 AM, 9:00 AM, 10:30 AM, 12:00 NOON
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Weekday Masses
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Weekdays: 7:30 AM</li>
                            <li>Feast Days: 7:30 AM, 12:00 PM, 7:00 PM</li>
                          </ul>
                        </div>
                        <div>
                          <a
                            href="/liturgy"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            View Full Mass Schedule
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Contact Information
                    </h3>
                    <p className="text-blue-800">
                      For more information about First Communion preparation or
                      <br />
                      <br />
                      Phone:{" "}
                      <a href="tel:+254726145609" className="text-blue-800">
                        0726 145609
                      </a>
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:stjosephccks@gmail.com"
                        className="text-blue-800"
                      >
                        stjosephccks@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
