import Image from "next/image";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Sacraments_Links from "@/components/Sacraments_Links";

export default function Matrimony() {
  const title = "The Sacrament of Matrimony";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text = "A sacred covenant established by God";

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
                    The Sacrament of Matrimony is a sacred covenant established
                    by God, in which a man and a woman establish between
                    themselves a partnership of the whole of life. Through this
                    sacrament, they are strengthened and consecrated for the
                    duties and dignity of their state.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Marriage Preparation Requirements
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>At least one party must be a baptized Catholic</li>
                        <li>
                          Contact the parish at least six months before the
                          wedding
                        </li>
                        <li>Complete the marriage preparation program</li>
                        <li>Attend Pre-Cana classes</li>
                        <li>Complete Natural Family Planning instruction</li>
                        <li>Meet with the priest or deacon for interviews</li>
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Required Documents
                      </h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-600">
                        <li>Baptismal certificates (issued within 6 months)</li>
                        <li>First Communion and Confirmation certificates</li>
                        <li>Civil marriage license</li>
                        <li>Letters of freedom to marry</li>
                        <li>Pre-nuptial investigation forms</li>
                        <li>Dispensation documents (if applicable)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Marriage Preparation Program
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Pre-Cana Classes
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Communication skills</li>
                            <li>Conflict resolution</li>
                            <li>Financial planning</li>
                            <li>Family life and parenting</li>
                            <li>Spirituality and prayer</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Additional Requirements
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Natural Family Planning instruction</li>
                            <li>Marriage mentoring with a sponsor couple</li>
                            <li>Individual meetings with priest/deacon</li>
                            <li>Wedding liturgy planning</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Wedding Guidelines
                    </h2>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Ceremony Details
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Weddings typically celebrated on Saturdays</li>
                            <li>
                              Available times: 10:00 AM, 12:00 PM, 2:00 PM
                            </li>
                            <li>Wedding rehearsal: Friday evening</li>
                            <li>Music must be approved by music director</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            Church Guidelines
                          </h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>Floral arrangements must be approved</li>
                            <li>No rice, confetti, or flower petals</li>
                            <li>Photography guidelines provided</li>
                            <li>Dress code for wedding party</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      Contact Information
                    </h3>
                    <p className="text-blue-800">
                      For more information about marriage preparation or to
                      schedule a wedding, please contact:
                      <br />
                      Parish Office: [Phone Number]
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
