import Announcements from "@/components/Announcements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import MassSchedule from "@/components/Mass_Schedule";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg",
    "https://kahawa-sukari.s3.amazonaws.com/st.Joseph.jpg",
    // Add more church images here
  ];

  const title = "LIVING IN LOVE";
  const text =
    "We are born to love, we live to love, and we will die to love still more.";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const quickLinks = [
    {
      title: "Mass Times",
      description: "View our weekly mass schedule",
      link: "#liturgy",
      icon: "⛪",
    },
    {
      title: "Events",
      description: "Upcoming church events",
      link: "/community",
      icon: "📅",
    },
    {
      title: "Bulletin",
      description: "Latest church bulletin",
      link: "/welcome/bulletin",
      icon: "📰",
    },
    {
      title: "Announcements",
      description: "Latest church announcements",
      link: "#announcements",
      icon: "📢",
    },
  ];

  return (
    <Layout>
      <Hero imageUrl={images[currentImageIndex]} title={title} text={text} />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {link.title}
              </h3>
              <p className="text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>

        {/* Mass Schedule and Announcements Section */}
        <div className="bg-white rounded-lg shadow-sm" id="liturgy">
          <div className="py-6 px-2 space-y-8">
            <MassSchedule />
            <div className="border-t border-gray-200 pt-8" id="announcements">
              <Announcements />
            </div>
          </div>
        </div>
      </div>

      <Welcome id="welcome" />
    </Layout>
  );
}
