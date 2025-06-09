import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";
import Head from "next/head";
import ContactCard from "@/components/ContactCard";

export default function Confirmation() {
  const title = "The Sacrament of Confirmation";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/confirmation.jpg";
  const text = "Sealed with the mark of the Holy Spirit";
  const chaplain = "Parish Office";
  const chapTel = "0726 145609";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | The Sacrament of Confirmation</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - The Sacrament of Confirmation"
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
                    Confirmation completes the grace of Baptism by a special
                    outpouring of the gifts of the Holy Spirit, which seal or
                    &quot;confirm&quot; the baptized in union with Christ and
                    equip them for active participation in the worship and
                    apostolic life of the Church.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Confirmation Preparation
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Our parish offers a comprehensive one-year preparation
                        program for Confirmation. The program includes:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Weekly catechetical sessions</li>
                        <li>Retreat experiences</li>
                        <li>Service projects</li>
                        <li>Regular participation in Mass</li>
                        <li>Spiritual formation and prayer</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Requirements for Confirmation
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Must be baptized Catholic</li>
                        <li>Must be in at least 8th grade or older</li>
                        <li>Must have received First Holy Communion</li>
                        <li>
                          Must be registered in the parish&apos;s Confirmation
                          program
                        </li>
                        <li>Must attend all required classes and retreats</li>
                        <li>Must complete service hours</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Sponsor Requirements
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        Each candidate must choose a sponsor who:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Is at least 16 years old</li>
                        <li>Is a confirmed Catholic in good standing</li>
                        <li>
                          Regularly participates in the sacramental life of the
                          Church
                        </li>
                        <li>Is not the candidate&apos;s parent</li>
                        <li>
                          Is willing to support the candidate in their faith
                          journey
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Confirmation Schedule
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Preparation Timeline
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Registration: December - January</li>
                            <li>Classes: January - November</li>
                            <li>Confirmation: November</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Important Dates
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Rehearsal: Week before Confirmation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ContactCard
                    chaplain={chaplain}
                    chapTel={chapTel}

                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
