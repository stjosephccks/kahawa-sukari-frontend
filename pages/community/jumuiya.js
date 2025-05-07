import Layout from "@/components/Layout";
import React from "react";
import Hero from "@/components/Hero";
import Head from "next/head";

function Jumuiya() {
  const jumuiyas = [
    {
      name: "Mt. Ann Jumuiya",
      location: "Murang'a Road",
      moderator: "John Mwangi",
      contact: "+254 712 345 678",
      meetingDays: "Monday and Saturday, 4:00 PM",
      description:
        "A vibrant community focused on youth engagement and spiritual growth through prayer and service.",
      activities: [
        "Weekly Bible Study",
        "Community Service",
        "Youth Programs",
        "Prayer Meetings",
      ],
    },
    {
      name: "Mt. Bakhita Jumuiya",
      location: "Isiolo Road",
      moderator: "Sarah Wanjiku",
      contact: "+254 723 456 789",
      meetingDays: "Wednesday and Sunday, 3:00 PM",
      description:
        "Dedicated to family values and community support, fostering strong Catholic family traditions.",
      activities: [
        "Family Rosary",
        "Marriage Enrichment",
        "Children's Catechism",
        "Charity Work",
      ],
    },
    {
      name: "Mt. Mary Jumuiya",
      location: "Baringo Road",
      moderator: "Peter Kamau",
      contact: "+254 734 567 890",
      meetingDays: "Thursday and Sunday, 5:00 PM",
      description:
        "A prayerful community emphasizing Marian devotion and Eucharistic adoration.",
      activities: [
        "Marian Devotions",
        "Eucharistic Adoration",
        "Charismatic Prayer",
        "Bible Sharing",
      ],
    },
    {
      name: "Mt. Charles Lwanga Jumuiya",
      location: "Garisa Road",
      moderator: "Grace Njeri",
      contact: "+254 745 678 901",
      meetingDays: "Tuesday and Saturday, 6:00 PM",
      description:
        "Inspired by the Ugandan martyrs, this community focuses on faith formation and evangelization.",
      activities: [
        "Faith Formation",
        "Evangelization",
        "Social Justice",
        "Youth Leadership",
      ],
    },
  ];

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Jumuiyas</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Jumuiyas"
          key="title"
        />
      </Head>
      <Hero
        imageUrl="https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg"
        title="Our Jumuiyas - Small Christian Communities"
        text="Join our vibrant small Christian communities where faith comes alive through prayer, service, and fellowship."
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Discover Your Spiritual Home
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Jumuiyas are more than just meeting groups - they are families
            of faith where members support each other in their spiritual journey
            and serve the community together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jumuiyas.map((jumuiya, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-4 text-primary">
                {jumuiya.name}
              </h2>
              <p className="text-gray-600 mb-4">{jumuiya.description}</p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span>{" "}
                  {jumuiya.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Moderator:</span>{" "}
                  {jumuiya.moderator}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> {jumuiya.contact}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Meeting Days:</span>{" "}
                  {jumuiya.meetingDays}
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-gray-800 mb-2">Activities:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {jumuiya.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Jumuiya;
