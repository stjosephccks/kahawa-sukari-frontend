import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import Head from "next/head";
import ContactCard from "@/components/ContactCard";
import React from "react";

function CatholicMenAssociation() {
  const title = "Catholic Men Association";
  const text =
    "The Catholic Men Association (CMA) is a group of men dedicated to growing in faith, serving the Church, and supporting each other in their spiritual journey.";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/yca.jpeg";
  const chaplain = "Fr. Matia - Spiritual Director";
  // const chapTel = "0798 169977";
  const moderator = "CMA Coordinator - Moderator";
  // const modTel = "0723721678";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Catholic Men Association</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Catholic Men Association"
          key="title"
        />
      </Head>
      <div className="min-h-screen bYouthg-gray-50">
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
                      About CMA
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Catholic Men Association (CMA) is a vibrant group of
                      Catholic men dedicated to growing in faith, strengthening
                      family life, and serving the Church and community. We
                      provide a supportive environment where men can develop
                      their spiritual lives and leadership skills.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our mission is to help Catholic men become better
                      husbands, fathers, and leaders in their families,
                      workplaces, and communities through prayer, fellowship,
                      and service.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>To strengthen men&apos;s faith and spiritual life</li>
                      <li>To promote strong Catholic family values</li>
                      <li>To develop leadership skills</li>
                      <li>To serve the Church and community</li>
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
                        <li>Monthly Men&apos;s Breakfast</li>
                        <li>Bible Study and Prayer Groups</li>
                        <li>Leadership Training</li>
                        <li>Family Life Seminars</li>
                        <li>Community Service Projects</li>
                        <li>Retreats and Spiritual Formation</li>
                        <li>Sports and Recreation</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Every First Sunday</strong> - Monthly Meeting
                          at 2:00 PM
                        </li>
                        <li>
                          <strong>Every Third Saturday</strong> - Men&apos;s
                          Breakfast at 8:00 AM
                        </li>
                        <li>
                          <strong>Every Wednesday</strong> - Bible Study at 6:00
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
                        <li>Fatherhood Programs</li>
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
                        Men&apos;s Retreat
                      </h3>
                      <p className="text-gray-600">
                        Our annual men&apos;s retreat provides an opportunity
                        for spiritual renewal, fellowship, and personal growth.
                        Through prayer, reflection, and sharing, men strengthen
                        their relationship with God and each other.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Leadership Development
                      </h3>
                      <p className="text-gray-600">
                        The leadership development program equips men with the
                        skills and knowledge needed to be effective leaders in
                        their families, workplaces, and the Church community.
                      </p>
                    </div>
                  </div>
                </div>

                <ContactCard
                  chaplain={chaplain}
                  chapTel={chapTel}
                  moderator={moderator}
                  modTel={modTel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CatholicMenAssociation;
