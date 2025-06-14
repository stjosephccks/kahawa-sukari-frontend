import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Formations_Links from "@/components/Formations_Links";
import ContactCard from "@/components/ContactCard";

function cjpd() {
  const title = "Catholic Justice and Peace Department (CJPD)";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const text = "Promoting justice, peace, and human dignity in our community";
  const chaplain = "Fr. Mimmo - Spiritual Director";
  // const chapTel = "0737032180";
  const moderator = "CJPD Coordinator - Moderator";
  // const modTel = "0723721678";

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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About CJPD
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  The Catholic Justice and Peace Department (CJPD) is dedicated
                  to promoting social justice, peace, and human dignity in our
                  community. Rooted in Catholic Social Teaching, we work to
                  address social issues, advocate for the marginalized, and
                  foster a culture of peace and solidarity.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Our Mission
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Promote social justice and human rights</li>
                      <li>Advocate for the poor and marginalized</li>
                      <li>Foster peace and reconciliation</li>
                      <li>Educate on Catholic Social Teaching</li>
                      <li>
                        Encourage community participation in social issues
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Key Activities
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Social justice awareness campaigns</li>
                      <li>Peace-building initiatives</li>
                      <li>Human rights advocacy</li>
                      <li>Community development projects</li>
                      <li>Interfaith dialogue and cooperation</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Core Principles
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>
                        Human Dignity: Every person is created in the image of
                        God
                      </li>
                      <li>Common Good: Working for the benefit of all</li>
                      <li>Solidarity: Standing with those in need</li>
                      <li>Subsidiarity: Empowering local communities</li>
                      <li>
                        Option for the Poor: Prioritizing the needs of the most
                        vulnerable
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Meeting Schedule
                  </h3>
                  <p className="text-gray-600">
                    CJPD meetings are held every Sunday after the 10:00 AM Mass
                    in the parish hall. We welcome all parishioners who are
                    interested in promoting justice and peace in our community.
                  </p>
                </div>

                <ContactCard
                  chaplain={chaplain}
                  // chapTel={chapTel}
                  moderator={moderator}
                // modTel={modTel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default cjpd;
