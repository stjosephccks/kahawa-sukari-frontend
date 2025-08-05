import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import React from "react";
import ContactCard from "@/components/ContactCard";
import SEO from "@/components/SEO";

function CatholicWomenAssociation() {
  const title = "Catholic Women Association";
  const text =
    "The CWA is a vibrant group of Catholic women dedicated to growing in faith, serving the Church, and supporting each other in their spiritual journey.";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/cwa2.jpeg";
  const chaplain = "Fr. Mimmo - Spiritual Director";
  // const chapTel = "0737032180";
  const moderator = "CWA  - Moderator";
  // const modTel = "0723721678";

  return (
    <Layout>
     <SEO title="Catholic Women Association (CWA) | St. Joseph Catholic Church Kahawa Sukari"
        description="St.Joseph Catholic Church Kahawa Sukari | Catholic Women Association"
        keywords="St.Joseph Catholic Church Kahawa Sukari, Catholic Women Association, Church Catholic Women Association, Church Events"
        url="https://stjosephchurchkahawasukari.org/formation/cwa"
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
                      About CWA
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Catholic Women Association (CWA) is a vibrant
                      community of Catholic women dedicated to spiritual growth,
                      family life, and service to the Church and society. We
                      provide a supportive environment where women can grow in
                      faith and develop their God-given talents.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our mission is to empower Catholic women to be strong
                      witnesses of faith in their families, workplaces, and
                      communities through prayer, fellowship, and service.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>To deepen women&apos;s faith and spiritual life</li>
                      <li>To promote Catholic family values</li>
                      <li>To develop leadership and service skills</li>
                      <li>To support the Church and community</li>
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
                        <li>Monthly Women's Fellowship</li>
                        <li>Bible Study and Prayer Groups</li>
                        <li>Skill Development Workshops</li>
                        <li>Family Life Seminars</li>
                        <li>Community Service Projects</li>
                        <li>Retreats and Spiritual Formation</li>
                        <li>Social and Cultural Events</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Every Second Sunday</strong> - Monthly Meeting
                          at 2:00 PM
                        </li>
                        <li>
                          <strong>Every Fourth Saturday</strong> - Women's
                          Fellowship at 10:00 AM
                        </li>
                        <li>
                          <strong>Every Tuesday</strong> - Bible Study at 6:00
                          PM
                        </li>
                        <li>
                          <strong>Monthly</strong> - Community Service Project
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
                        Spiritual Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Bible Study</li>
                        <li>Prayer Groups</li>
                        <li>Retreat Organization</li>
                        <li>Spiritual Direction</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Family Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Marriage Enrichment</li>
                        <li>Motherhood Programs</li>
                        <li>Family Counseling</li>
                        <li>Parenting Workshops</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Service Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Community Service</li>
                        <li>Youth Mentorship</li>
                        <li>Parish Support</li>
                        <li>Charity Work</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Special Programs
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Women's Retreat
                      </h3>
                      <p className="text-gray-600">
                        Our annual women's retreat provides an opportunity for
                        spiritual renewal, fellowship, and personal growth.
                        Through prayer, reflection, and sharing, women
                        strengthen their relationship with God and each other.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Skill Development
                      </h3>
                      <p className="text-gray-600">
                        The skill development program equips women with
                        practical skills for personal and professional growth,
                        including entrepreneurship, leadership, and community
                        development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Announcement
                  </h2>
                  <div className="flex justify-center">
                    <div className="bg-blue-50 p-6 rounded-lg max-w-2xl w-full text-center">
                      <p className="text-blue-800 text-lg">
                        The Catholic Women Association (CWA) is a vibrant
                        community of Catholic women dedicated to spiritual
                        growth, family life, and service to the Church and
                        society. We provide a supportive environment where women
                        can grow in faith and develop their God-given talents.
                      </p>
                    </div>
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

export default CatholicWomenAssociation;
