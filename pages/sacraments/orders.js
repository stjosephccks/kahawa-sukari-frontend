import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";
import Head from "next/head";
import ContactCard from "@/components/ContactCard";

export default function Orders() {
  const title = "The Sacrament of Holy Orders";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const text =
    "The means through which Christ&apos;s mission continues in the Church";

  const chaplain = "Parish  Office";
  const chapTel = " 0726 145609";
  const moderator = "";
  const modTel = "";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | The Sacrament of Holy Orders</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - The Sacrament of Holy Orders"
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
                    The Sacrament of Holy Orders is the means through which
                    Christ&apos;s mission continues in the Church. It includes
                    three degrees: episcopate (bishops), presbyterate (priests),
                    and diaconate (deacons). Through this sacrament, men are
                    ordained to serve the Church in these distinct roles.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        The Three Degrees of Holy Orders
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            Bishops
                          </h3>
                          <p className="text-gray-600">
                            Successors of the Apostles, they receive the
                            fullness of the sacrament and are responsible for
                            governing local churches.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            Priests
                          </h3>
                          <p className="text-gray-600">
                            Co-workers of the bishops, they serve as spiritual
                            fathers to the faithful and celebrate the
                            sacraments.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            Deacons
                          </h3>
                          <p className="text-gray-600">
                            Ordained to serve the Church through works of
                            charity, preaching, and assisting at the altar.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Requirements for Holy Orders
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Must be a baptized Catholic male</li>
                        <li>Must be of good moral character</li>
                        <li>Must have appropriate education and formation</li>
                        <li>
                          Must be accepted by a bishop or religious superior
                        </li>
                        <li>
                          Must be willing to live a life of celibacy (for
                          priests)
                        </li>
                        <li>Must be in good physical and mental health</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Discernment and Formation
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            For Priesthood
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Initial discernment with vocation director</li>
                            <li>Seminary formation (4-6 years)</li>
                            <li>Philosophical and theological studies</li>
                            <li>Pastoral training and internships</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            For Diaconate
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Discernment with diaconate director</li>
                            <li>Formation program (3-4 years)</li>
                            <li>Theological and pastoral studies</li>
                            <li>Ministry practicum</li>
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
