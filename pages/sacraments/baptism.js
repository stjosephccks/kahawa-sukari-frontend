import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";
import SEO from "@/components/SEO";
import ContactCard from "@/components/ContactCard";

export default function Baptism() {
  const title = "The Sacrament of Baptism";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/baptism.jpg";
  const text =
    "The gateway to life in the Spirit and the door to other sacraments";
  const chaplain = "Parish Office";
  const chapTel = "0726 145609";
  // const moderator = "Catechist George";
  // const modTel = "0729 455437";
  return (
    <Layout>
      <SEO title="St.Joseph Kahawa Sukari | The Sacrament of Baptism"
        description="St.Joseph Kahawa Sukari | The Sacrament of Baptism"
        keywords="St.Joseph Kahawa Sukari, The Sacrament of Baptism, Church The Sacrament of Baptism, Church Events"
        url="https://stjosephchurchkahawasukari.org/sacraments/baptism"
      />
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
                    Baptism is the first sacrament of initiation, the gateway to
                    life in the Spirit, and the door that gives access to the
                    other sacraments. Through Baptism, we are freed from sin and
                    reborn as children of God; we become members of Christ, are
                    incorporated into the Church and made sharers in her
                    mission.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Requirements for Baptism
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Parents must be registered parishioners</li>
                        <li>At least one parent must be Catholic</li>
                        <li>Parents must attend a Baptism preparation class</li>
                        <li>
                          Godparents must be practicing Catholics who have
                          received the sacraments of Baptism, Confirmation, and
                          Eucharist
                        </li>
                        <li>Godparents must be at least 16 years old</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Baptism Preparation
                      </h2>
                      <p className="text-gray-600 mb-4">
                        Our parish offers Baptism preparation classes on the
                        first Saturday of each month. These classes help parents
                        understand the significance of the sacrament and their
                        role in raising their child in the Catholic faith.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Understanding the sacrament&apos;s meaning</li>
                        <li>Role of parents and godparents</li>
                        <li>Ritual and symbols explained</li>
                        <li>Practical preparation guidance</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Baptism Schedule
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        Baptisms are typically celebrated during Mass on Sundays
                        or at a special ceremony on Saturdays. Please contact
                        the parish office at least two months in advance to
                        schedule a Baptism.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Regular Baptism Times
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            {/* <li>
                              First Sunday of the month: During 11:00 AM Mass
                            </li> */}
                            <li>First Saturday of the month: 10:00 AM</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Special Arrangements
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Private Baptisms: By special arrangement</li>
                            <li>Emergency Baptisms: Available 24/7</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Required Documents
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Child&apos;s birth certificate</li>
                        <li>
                          Parents&apos; marriage certificate (if applicable)
                        </li>
                        <li>Godparents&apos; Confirmation certificates</li>
                        <li>Completed Baptism registration form</li>
                      </ul>
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
