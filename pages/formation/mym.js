import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import SEO from "@/components/SEO";
import React from "react";
import ContactCard from "@/components/ContactCard";

function MissionaryYouthMovement() {
  const title = "Missionary Youth Movement";
  const text =
    "The Missionary Youth Movement (MYM) is a vibrant group of high school students who are passionate about their faith and service to the Church.";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/mym1.jpeg";
  const chaplain = "Youth Chaplain - Fr. Mattia";
  // const chapTel = "0798 169977";
  const moderator = "MYM Coordinator - Diana Angela";
  // const modTel = "0723721678";

  return (
    <Layout>
     <SEO title="Missionary Youth Movement (MYM) | St. Joseph Catholic Church Kahawa Sukari"
        description="St.Joseph Catholic Church Kahawa Sukari | Missionary Youth Movement"
        keywords="St.Joseph Catholic Church Kahawa Sukari, Missionary Youth Movement, Church Missionary Youth Movement, Church Events"
        url="https://stjosephchurchkahawasukari.org/formation/mym"
      />
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl}/>
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
                      About MYM
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Missionary Youth Movement (MYM) is a vibrant group of
                      high school students who are passionate about their faith
                      and service to the Church. We are the foundation of youth
                      ministry in our parish, preparing young people for future
                      involvement in YSC and other parish ministries.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our mission is to form young Catholics who are committed
                      to Christ, knowledgeable about their faith, and ready to
                      serve their community. We focus on spiritual growth,
                      leadership development, and missionary outreach.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>To deepen our relationship with Jesus Christ</li>
                      <li>To learn and live our Catholic faith</li>
                      <li>To develop leadership and service skills</li>
                      <li>To prepare for future ministry in YSC and beyond</li>
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
                        <li>Formation Classes</li>
                        <li>Exchange Programs with other parishes</li>
                        <li>Camps at the end of the year</li>
                        <li>Hiking</li>
                        <li>Sports day/ Deanary games</li>
                        <li>Charity Activities</li>
                        <li>Deanary/ADN Masses</li>
                        <li>Retreats</li>
                        <li>Team building/ Social Programs</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>April Holiday</strong> - 2:00 PM to 4:00 PM
                          <strong>August Holiday</strong> - 2:00 PM to 4:00 PM
                          <strong>November-December Hopliday</strong> - 2:00 PM to 4:00 PM
                        </li>
                        <li>
                          <strong>Every  Sunday </strong> - 2:30PM - 5:00PM
                        </li>
                        <li>
                          <strong>Wednesday</strong> - 3:00 PM - 5:00PM

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
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Liturgical Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>10:30 AM Mass Animation on the last sunday of Holiday Month</li>

                      </ul>
                    </div>

                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Transition to YSC
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      MYM members typically transition to YSC (Youth Service
                      Committee) after completing high school. YSC is a separate
                      ministry for young adults aged 18-26 years, focusing on
                      different aspects of service and leadership. It&apos;s
                      important to note that while MYM members can serve as
                      altar servers, YSC members do not serve in this capacity.
                    </p>
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

export default MissionaryYouthMovement;
