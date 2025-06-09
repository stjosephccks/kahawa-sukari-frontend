import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";
import Head from "next/head";
import ContactCard from "@/components/ContactCard";

export default function Anointing() {
  const title = "The Sacrament of the Anointing of the Sick";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text =
    "A special grace for those who are seriously ill or facing surgery";
  const chaplain = "Parish Office";
  const chapTel = "0726 145609";
  // const moderator = "Catechist George";
  // const modTel = "0729 455437";
  return (
    <Layout>
      <Head>
        <title>
          St.Joseph Kahawa Sukari | The Sacrament of the Anointing of the Sick
        </title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - The Sacrament of the Anointing of the Sick"
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



                  <ContactCard
                    chaplain={chaplain}
                    chapTel={chapTel}
                  // moderator={moderator}
                  // modTel={modTel}
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
