import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import Formations_Links from "@/components/Formations_Links";
import SEO from "@/components/SEO";
import React from "react";
import ContactCard from "@/components/ContactCard";
import InfiniteCarousel from "@/components/Carousel";

function MantleOfStJoseph() {
  const images = [
    "https://kahawa-sukari.s3.amazonaws.com/mantle2.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle3.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle4.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle5.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle7.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle8.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle10.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle11.jpeg",
    "https://kahawa-sukari.s3.amazonaws.com/mantle12.jpeg",
  ]
  const title = "Mantle of St. Joseph";
  const text =
    "God is giving you a gift. If you see it, share it. If you can't see it, pray for it.";
  const imageurl = "https://kahawa-sukari.s3.amazonaws.com/mantle13.jpeg";
  const chaplain = "Mantle Chaplain - Fr. Mattia";
  // const chapTel = "0737032180";
  const moderator = "Coordinator - Ednah Njeri ";
  // const modTel = "0723721678";

  return (
    <Layout>
   <SEO title="St.Joseph Kahawa Sukari | Mantle of St. Joseph"
        description="St.Joseph Kahawa Sukari | Mantle of St. Joseph"
        keywords="St.Joseph Kahawa Sukari, Mantle of St. Joseph, Church Mantle of St. Joseph, Church Events"
        url="https://stjosephchurchkahawasukari.org/formation/mantle"
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
                      About Mantle of St. Joseph
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      The Mantle of St. Joseph (Mantle) is a post-Confirmation
                      group in our parish made up of Junior Secondary School students,
                      mostly aged 12-15. The group serves as a bridge between childhood
                      faith formation and youth ministry. Under the patronage of St. Joseph,
                      the group provides a space for members to grow spiritually and socially.
                      We also aim to deepen their faith, help them develop their spiritual gifts
                      and prepare them for active participation in the Church's mission.
                    </p>
                    <p className="text-lg text-gray-600">
                      Our Motto is: God is giving you a gift.
                      If you see it, share it. If you can't see it, pray for it.
                    </p>
                  </div>
      
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Our Objectives
                    </h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Deepen Faith - Strengthen understanding of Catholic teachings and love for the Eucharist. </li>
                      <li>Foster Spiritual Growth - Encourage personal prayer, devotion to Mother Mary and the saints
                        plus regular participation in Mass and sacraments.</li>
                      <li>Build Community - Create a supportive environment for friendships rooted in faith</li>
                      <li>Develop Leadership - Nurture confidence and respponsibility through group roles and activities.</li>
                      <li>Encourage Service - Instill a spirit of generosity through parish and community outreach.</li>
                      <li>Prepare for Youth Ministry - Future involvement in MYM</li>
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
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-gray-600">
                          <li>Weekly Meetings</li>
                          <li>Spiritual Formation</li>
                          <li>Life skills formation</li>
                          <li>Lenten and Advent Retreats</li>
                          <li>Charity works</li>
                        </ul>
                        <ul className="space-y-2 text-gray-600">
                          <li>Movies</li>
                          <li>Pilgrimages</li>
                          <li>Trips</li>
                          <li>Games Tournaments</li>
                          <li>Camp</li>
                          <li>Exhibitions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Meeting Schedule
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>
                          <strong>Every Sunday</strong> - From 2.30pm - 5.00pm
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
                        <li>10.30 AM Mass animation during mid-term breaks
                          and the last Sunday before a new term begins.</li>

                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Service Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Community Service</li>
                        <li>Charity Work</li>
                        <li>Parish Support</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Formation Ministry
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>Bible Study</li>
                        <li>Faith Formation</li>
                        <li>Leadership Development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Transition to MYM
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      Members of the Mantle of St. Joseph typically transition
                      to MYM (Missionary Youth Movement) when they enter high
                      school. MYM is a more advanced youth group that builds
                      upon the foundation laid in the Mantle of St. Joseph,
                      offering deeper spiritual formation and more opportunities
                      for service and leadership.
                    </p>
                  </div>
                </div>
                <ContactCard
                  chaplain={chaplain}
                  // chapTel={chapTel}
                  moderator={moderator}
                // modTel={modTel}
                />
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    Gallery
                  </h2>
                  <InfiniteCarousel images={images} interval={10000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MantleOfStJoseph;
