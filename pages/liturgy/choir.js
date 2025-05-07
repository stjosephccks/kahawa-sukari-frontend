"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Head from "next/head";

const choirs = [
  {
    name: "PMC Choir",
    practiceDays: ["Sunday at 9:00 AM"],
    massSchedule: "10:30 AM Mass (Swahili)",
    contact: "Chairperson: John Doe (0712 345 678)",
    description:
      "The PMC Choir leads the congregation in worship with their harmonious voices at the 10:30 AM Swahili Mass.",
  },
  {
    name: "St. Romanos Choir",
    practiceDays: [
      "Monday at 7:00 PM",
      "Wednesday at 7:00 PM",
      "Sunday at 10:45 AM",
    ],
    massSchedule: "12:00 PM Mass (English)",
    contact: "Chairperson: Jane Smith (0723 456 789)",
    description:
      "St. Romanos Choir brings traditional hymns to life with their beautiful renditions at the 12:00 PM English Mass.",
  },
  {
    name: "St. Andrew Choir",
    practiceDays: [
      "Sunday at 8:00 AM",
      "Tuesday at 7:00 PM",
      "Friday at 7:00 PM",
    ],
    massSchedule: "9:00 AM Mass (Swahili)",
    contact: "Chairperson: Michael Brown (0734 567 890)",
    description:
      "St. Andrew Choir is known for their contemporary worship music and vibrant performances at the 9:00 AM Swahili Mass.",
  },
  {
    name: "Magnificat Choir",
    practiceDays: [
      "Monday at 6:00 PM",
      "Thursday at 7:00 PM",
      "Saturday at 4:00 PM",
    ],
    massSchedule: "7:30 AM Mass (English)",
    contact: "Chairperson: Sarah Johnson (0745 678 901)",
    description:
      "Magnificat Choir specializes in classical and traditional church music at the 7:30 AM English Mass.",
  },
  {
    name: "St. Gregory Choir",
    practiceDays: [
      "Tuesday at 6:30 PM",
      "Friday at 6:30 PM",
      "Sunday at 2:00 PM",
    ],
    massSchedule: "9:30 AM Wendani Mass (Swahili)",
    contact: "Chairperson: David Wilson (0756 789 012)",
    description:
      "St. Gregory Choir brings a unique blend of traditional and contemporary music to our services at the 9:30 AM Wendani Swahili Mass.",
  },
];

export default function Choir() {
  const title = "Our Choirs";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const text =
    "Join us in worship through music with our vibrant church choirs";

  return (
    <Layout>
      <Head>
        <title>St.Joseph Kahawa Sukari | Choirs</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahwa sukari - Choirs"
          key="title"
        />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {choirs.map((choir) => (
              <div
                key={choir.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src="/images/choir.jpg"
                    alt={`${choir.name} performing`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {choir.name}
                  </h2>
                  <p className="text-gray-600 mb-4">{choir.description}</p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Mass Schedule
                      </h3>
                      <p className="text-gray-600">{choir.massSchedule}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Practice Schedule
                      </h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {choir.practiceDays.map((day, index) => (
                          <li key={index}>{day}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium text-gray-900 mb-2">
                        Contact Information
                      </h3>
                      <p className="text-gray-600">{choir.contact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
