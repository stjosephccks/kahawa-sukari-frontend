import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";

export default function Penance() {
  const title = "The Sacrament of Penance";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/confession-banner.png";
  const text = "The sacrament of God's mercy and forgiveness";

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
                    The Sacrament of Penance (also known as Reconciliation or
                    Confession) is the sacrament through which we receive God's
                    forgiveness for our sins. It is a beautiful encounter with
                    Christ's mercy and love, where we are reconciled with God
                    and the Church.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        How to Make a Good Confession
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            1. Examination of Conscience
                          </h3>
                          <p className="text-gray-600">
                            Prayerfully reflect on your thoughts, words, and
                            actions since your last confession.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            2. Confession
                          </h3>
                          <p className="text-gray-600">
                            Confess your sins to the priest, being honest and
                            complete.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            3. Penance
                          </h3>
                          <p className="text-gray-600">
                            Complete the prayer or action given by the priest.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800">
                            4. Act of Contrition
                          </h3>
                          <p className="text-gray-600">
                            Express sorrow for your sins and resolve to avoid
                            them in the future.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Benefits of the Sacrament
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Reconciliation with God and the Church</li>
                        <li>Peace of conscience and spiritual comfort</li>
                        <li>Strength to resist temptation</li>
                        <li>Growth in holiness and virtue</li>
                        <li>Healing of the wounds of sin</li>
                        <li>Restoration of grace in our souls</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Confession Schedule
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Regular Confession Times
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Sunday: 9:00 AM - 11:30 PM</li>
                            <li>By appointment: Contact the parish office</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Special Opportunities
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Advent and Lent Penance Services</li>
                            <li>Before major feasts and holy days</li>
                          </ul>
                        </div>
                        <div>
                          <a
                            href="/liturgy"
                            className="text-blue-500 hover:text-blue-600"
                          >
                            View Full Confession Schedule
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Examination of Conscience
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        Before going to confession, take time to prayerfully
                        examine your conscience. Consider:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Your relationship with God and prayer life</li>
                        <li>Your relationships with family and others</li>
                        <li>Your words and actions</li>
                        <li>Your responsibilities at work and in society</li>
                        <li>Your care for the poor and vulnerable</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Contact Information
                    </h3>
                    <p className="text-blue-800">
                      For more information about the Sacrament of Penance or to
                      schedule a confession outside regular hours, please
                      contact:
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
