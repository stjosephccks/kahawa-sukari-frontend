import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Formations_Links from "@/components/Formations_Links";

function couples() {
  const title = "Young Couples Growing Together";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text = "Building strong Catholic marriages and families";

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
                  About Our Couples Group
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our Young Couples Group is a vibrant community of recently
                  married couples who come together to grow in faith, strengthen
                  their marriages, and build lasting friendships. Through shared
                  experiences, prayer, and learning, we support each other in
                  living out our Catholic faith in our marriages and families.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      What We Do
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Monthly couple gatherings and discussions</li>
                      <li>Marriage enrichment programs</li>
                      <li>Faith formation sessions</li>
                      <li>Social events and outings</li>
                      <li>Prayer and worship together</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Topics We Cover
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Communication in marriage</li>
                      <li>Prayer life as a couple</li>
                      <li>Natural Family Planning</li>
                      <li>Parenting preparation</li>
                      <li>Financial stewardship</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Our Mission
                  </h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600">
                      We aim to create a supportive environment where young
                      couples can:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                      <li>Deepen their relationship with God and each other</li>
                      <li>Learn from experienced married couples</li>
                      <li>Build a strong foundation for their family life</li>
                      <li>
                        Form lasting friendships with other Catholic couples
                      </li>
                      <li>Grow in understanding of Catholic marriage</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Meeting Schedule
                  </h3>
                  <p className="text-gray-600">
                    We meet every second Sunday of the month after the 10:00 AM
                    Mass in the parish hall. Special events and retreats are
                    organized throughout the year. All recently married couples
                    are welcome to join our community.
                  </p>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    Join Our Community
                  </h3>
                  <p className="text-blue-800">
                    Whether you're newly married or have been married for a few
                    years, we welcome you to join our community of couples
                    growing together in faith. For more information, please
                    contact:
                    <br />
                    Couples Group Coordinator: [Name]
                    <br />
                    Phone: [Phone Number]
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

export default couples;
