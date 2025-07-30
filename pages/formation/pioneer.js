import Hero from "@/components/Hero";
import Formations_Links from "@/components/Formations_Links";
import ContactCard from "@/components/ContactCard";
import SEO from "@/components/SEO";
import Layout from "@/components/Layout";
import React from "react";
function PioneerAssociationGroup() {
  const title = "Pioneer Total Abstinence Association of the Sacred Heart of Jesus"
  const text =
    "For Thy greater glory and consolation, O Sacred Heart of Jesus"
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg"
  const chaplain = "Chaplain - "
  const moderator = "Moderator - "
  return (
    <Layout>
      <SEO title="St.Joseph Kahawa Sukari | Pioneer Association Group"
        description="St.Joseph Kahawa Sukari | Pioneer Association Group"
        keywords="St.Joseph Kahawa Sukari, Pioneer Association Group, Church Pioneer Association Group, Church Events"
        url="https://stjosephchurchkahawasukari.org/formation/pioneer"
      />
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      About Pioneer Association Group
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Pioneer Total Abstinence Association of The
                      Sacred Heart of Jesus (PTAA) is a faith-based Ministry
                      within our parish that promotes total abstinence
                      from alcohol as a loving sacrifice to the Sacred Heart
                      of Jesus. Founded in 1898 by Fr. James Cullen, S.J.,
                      the PTAA has grown into a global movement encouraging
                      people of all ages to embrace sobriety as an expression
                      of faith, love, and solidarity with those affected
                      by alcohol-related harm.
                    </p>
                    <p className="text-lg text-gray-600">
                      This group stands in the gap to pray for alcoholics and drug addicts.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>
                        To honor the Sacred Heart of Jesus through the offering of total abstinence from alcohol.
                      </li>
                      <li>
                        To promote sobriety and Christian values, especially among the youth.
                      </li>
                      <li>
                        To support individuals and families affected by alcohol misuse and addiction.
                      </li>
                      <li>
                        To foster prayerful living and moral responsibility in society
                      </li>
                      <li>
                        To offer spiritual reparation for the excessive use of alcohol
                        and its effects on communities.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Activities & Schedule
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Regular Activities
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Daily Prayer</li>
                        <li>Monthly meetings</li>
                        <li>Support and outreach</li>
                        <li>Participation in the liturgical life</li>

                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Once a month</strong> - on Sunday 10.30 AM at Social Hall.
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Ministries
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Liturgical Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Leading Prayer</li>
                        <li>Lectors and ushers</li>
                        <li>Choir participation</li>
                        <li>Participating in Eucharistic Adoration</li>
                      </ul>
                    </div> */}

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Social Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Support for Families Affected by Addiction</li>
                        <li>Community Engagement</li>
                        <li>Youth Outreach</li>
                      </ul>
                    </div>

                    {/* <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Bible Study</li>
                        <li>Faith Formation</li>
                        <li>Leadership Training</li>
                      </ul>
                    </div> */}
                  </div>
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
export default PioneerAssociationGroup