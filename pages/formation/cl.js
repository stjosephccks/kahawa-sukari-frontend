import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import React from "react";
import Formations_Links from "@/components/Formations_Links";
import ContactCard from "@/components/ContactCard";
import SEO from "@/components/SEO";

function CommunionAndLiberation() {
  const title = "Communion and Liberation";
  const text =
    "The Christian event, as it comes to us through the Church's proclamation, responds to the deepest needs of the human heart, announced and anticipated in every religion. —Luigi Giussani";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const chaplain = "Chaplain";
  // const chapTel = "0737032180";
  const moderator = "CL Coordinator - Moderator";
  // const modTel = "0723721678";

  return (
    <Layout>
     <SEO title="St.Joseph Kahawa Sukari | Communion and Liberation"
        description="St.Joseph Kahawa Sukari | Communion and Liberation"
        keywords="St.Joseph Kahawa Sukari, Communion and Liberation, Church Communion and Liberation, Church Events"
        url="https://stjosephchurchkahawasukari.org/formation/cl"
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
                      About Communion and Liberation
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      Communion and Liberation (CL) is an ecclesial movement
                      whose purpose is the education to Christian maturity of
                      its adherents and collaboration in the mission of the
                      Church in all the spheres of contemporary life. It began
                      in Italy in 1954 when Fr. Luigi Giussani established a
                      Christian presence in Berchet high school in Milan.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our mission is to help people discover that faith is not a
                      set of rules or moral precepts, but a relationship with
                      Christ that transforms our lives and makes us truly free.
                      We seek to live this relationship in all aspects of our
                      daily lives.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>To educate people to Christian maturity</li>
                      <li>To live the faith in daily life</li>
                      <li>To collaborate in the mission of the Church</li>
                      <li>To foster communion among believers</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Ministries
                  </h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>School of Community</li>
                        <li>Bible Study</li>
                        <li>Faith Formation</li>
                        <li>Spiritual Direction</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Cultural Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Cultural Events</li>
                        <li>Art Exhibitions</li>
                        <li>Music Performances</li>
                        <li>Literary Discussions</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Service Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Charity Work</li>
                        <li>Community Service</li>
                        <li>Youth Outreach</li>
                        <li>Missionary Activities</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    School of Community
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      The School of Community is the primary instrument of
                      formation in CL. It is a weekly meeting where members read
                      and discuss texts that help them understand and live their
                      faith more deeply. Through this shared reading and
                      discussion, we grow in our understanding of Christ's
                      presence in our lives and in the world.
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

export default CommunionAndLiberation;
