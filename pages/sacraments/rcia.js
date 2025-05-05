import ContactCard from "@/components/ContactCard";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Sacraments_Links from "@/components/Sacraments_Links";
import React from "react";

function AdultsBecomingCatholic() {
  const title = "Becoming Catholic (RCIA)";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text = "Rite of Christian Initiation for Adults";
  const chaplain = "Fr. Guliano - Spiritual Director";
  const chapTel = "0737032180";
  const moderator = "Catechist George";
  const modTel = "0729455437";

  return (
    <Layout>
      <Hero text={text} title={title} imageUrl={imageurl} />
      <div className="flex flex-col md:flex-row justify-center md:max-w-screen-lg mx-auto p-4">
        <div className="sticky top-4">
          <Sacraments_Links />
        </div>
        <div className="md:w-full p-4">
          <p className="text-2xl text-text1 special-text">
            <b>The Rite of Christian Initiation for Adults (RCIA)</b> is the
            process through which adults are fully initiated into the Catholic
            Church. This journey of faith is open to those who have never been
            baptized, those baptized in another Christian tradition, or baptized
            Catholics who have not received the sacraments of Eucharist and
            Confirmation.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              CLASS SCHEDULE
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Regular Classes
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="font-medium">Thursday:</span>
                      <span className="ml-2">6:30 PM</span>
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium">Sunday:</span>
                      <span className="ml-2">3:00 PM</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Special Events
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="font-medium">Charity Sunday:</span>
                      <span className="ml-2">Last Sunday of each month</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              WHAT TO EXPECT?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  INITIAL INTERVIEW
                </h4>
                <p className="text-gray-600 mb-4">
                  The first step is a conversation with our RCIA coordinator or
                  priest. This is an opportunity to share your faith journey,
                  ask questions, and learn more about the process of becoming
                  Catholic.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  CLASSES & FORMATION
                </h4>
                <p className="text-gray-600 mb-4">
                  Weekly classes cover Catholic teachings, traditions, and
                  practices. You'll learn about:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Basic Catholic beliefs and doctrines</li>
                  <li>Sacraments and their meaning</li>
                  <li>Prayer and spiritual life</li>
                  <li>Church history and traditions</li>
                  <li>Moral teachings and social justice</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  SPONSOR
                </h4>
                <p className="text-gray-600 mb-4">
                  Each candidate is paired with a sponsor who is a practicing
                  Catholic. The sponsor:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Accompanies you through the RCIA process</li>
                  <li>Attends classes and rites with you</li>
                  <li>Answers questions and provides guidance</li>
                  <li>Must be a fully initiated Catholic in good standing</li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  SACRAMENTS
                </h4>
                <p className="text-gray-600 mb-4">
                  The RCIA process culminates in the reception of the Sacraments
                  of Initiation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Baptism (for those not previously baptized)</li>
                  <li>Confirmation</li>
                  <li>First Eucharist</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  These sacraments are typically received during the Easter
                  Vigil Mass.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              COMMITMENT
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-4">
                The RCIA process requires a commitment to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Regular attendance at weekly classes</li>
                <li>Participation in Sunday Mass</li>
                <li>Active engagement in the learning process</li>
                <li>Completion of assigned readings and reflections</li>
                <li>Participation in special rites and ceremonies</li>
              </ul>
            </div>
          </div>

          <ContactCard
            chaplain={chaplain}
            chapTel={chapTel}
            moderator={moderator}
            modTel={modTel}
          />

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What is RCIA?
            </h3>
            <p className="text-gray-600">
              The RCIA process is the Church&apos;s way of initiating new
              members into the Catholic faith.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdultsBecomingCatholic;
