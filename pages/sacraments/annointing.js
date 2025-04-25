import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";

export default function Anointing() {
  const title = "The Sacrament of the Anointing of the Sick";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text =
    "A special grace for those who are seriously ill or facing surgery";

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
                    The Sacrament of the Anointing of the Sick is a special
                    grace for those who are seriously ill, facing surgery, or in
                    danger of death. Through this sacrament, the Church commends
                    those who are ill to the suffering and glorified Lord, that
                    He may raise them up and save them.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Who May Receive This Sacrament?
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Those who are seriously ill</li>
                        <li>Those preparing for major surgery</li>
                        <li>The elderly who are in a weakened condition</li>
                        <li>Those in danger of death</li>
                        <li>Those suffering from chronic illness</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Effects of the Sacrament
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Unites the sick person to the passion of Christ</li>
                        <li>Strengthens the person to endure suffering</li>
                        <li>
                          Brings forgiveness of sins if the person was not able
                          to receive the sacrament of Penance
                        </li>
                        <li>
                          Restores health if it is conducive to the salvation of
                          the soul
                        </li>
                        <li>Prepares for passing over to eternal life</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      How to Request the Sacrament
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Regular Requests
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>
                              Contact the parish office during regular hours
                            </li>
                            <li>
                              For hospital visits, inform the hospital chaplain
                            </li>
                            <li>
                              For homebound parishioners, contact the parish
                              office
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Emergency Requests
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>For emergencies, call the emergency number</li>
                            <li>Available 24/7 for urgent cases</li>
                            <li>
                              Immediate response for those in danger of death
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Communal Celebration
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        Our parish celebrates the Anointing of the Sick
                        communally several times a year:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>During special Masses for the sick</li>
                        <li>During the Lenten season</li>
                        <li>During the World Day of the Sick (February 11)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Contact Information
                    </h3>
                    <p className="text-blue-800">
                      For more information or to request the Anointing of the
                      Sick, please contact:
                      <br />
                      Parish Office: [Phone Number]
                      <br />
                      Emergency Number: [Emergency Number]
                      <br />
                      Email: [Email Address]
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
