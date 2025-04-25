import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Formations_Links from "@/components/Formations_Links";
import React from "react";

function Formations() {
  const title = "Formations";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text = "Growing together in faith and service";

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
                <Formations_Links />
              </div>
            </div>

            <div className="lg:w-3/4 bg-white rounded-lg shadow-lg overflow-hidden p-8">
              <div className="prose max-w-none">
                <p className="text-lg text-gray-600 mb-6">
                  Our parish offers various formation programs to help you grow
                  in your faith and serve the community. Each formation group
                  has its unique focus and activities, but all share the common
                  goal of deepening our relationship with God and serving
                  others.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Youth Formations
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          PMC
                        </h3>
                        <p className="text-gray-600">
                          Parish Missionary Children - Formation for young
                          children
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          Mantle of St. Joseph
                        </h3>
                        <p className="text-gray-600">
                          Youth formation and leadership program
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          MYM
                        </h3>
                        <p className="text-gray-600">
                          Missionary Youth Movement
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          YSC
                        </h3>
                        <p className="text-gray-600">Youth Service Committee</p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          YCA
                        </h3>
                        <p className="text-gray-600">Young Catholic Adults</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Adult Formations
                    </h2>
                    <ul className="space-y-4">
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          Charismatic
                        </h3>
                        <p className="text-gray-600">
                          Catholic Charismatic Renewal
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          CL
                        </h3>
                        <p className="text-gray-600">
                          Communion and Liberation
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          CWA
                        </h3>
                        <p className="text-gray-600">
                          Catholic Women Association
                        </p>
                      </li>
                      <li>
                        <h3 className="text-xl font-semibold text-gray-800">
                          CMA
                        </h3>
                        <p className="text-gray-600">
                          Catholic Men Association
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Common Activities
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Weekly faith formation sessions</li>
                      <li>Community service projects</li>
                      <li>Retreats and spiritual activities</li>
                      <li>Liturgical celebrations</li>
                      <li>Social and team-building events</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-blue-800">
                    For more information about any of our formation groups,
                    please contact:
                    <br />
                    Parish Office: [Phone Number]
                    <br />
                    Email: [Email Address]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Formations;
