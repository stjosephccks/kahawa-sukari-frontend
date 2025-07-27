import Announcements from "@/components/Announcements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import MassSchedule from "@/components/Mass_Schedule";
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Head from "next/head";
import AnnouncementDoc from "@/components/AnnouncementDocs";
import LiturgicalResponse from "@/components/LiturgicalProgram";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg",
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
      <Head>
        <title>St.Joseph Kahawa Sukari | Home</title>
        <meta
          property="og:title"
          content="St Joseph Catholic Church Kahawa sukari - Home"
          key="title"
        />
      </Head>
      <Hero imageUrl={images[currentImageIndex]} title={title} text={text} />
      
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Announcements Section */}
        <section id="announcements" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">Parish Notices</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest updates and announcements from our parish community
            </p>
          </div>
          <Announcements maxItems={3} showViewAll={true} />
        </section>

        {/* Liturgical Response Section */}
        <section id="liturgy" className="py-8">
          <div className="container mx-auto px-4">
           
            <LiturgicalResponse />
          </div>
        </section>

        {/* Mass Schedule and Announcements Section */}
        <div className="bg-white rounded-lg shadow-sm" id="mass-times">
          <div className="py-6 px-2 space-y-8">
            <MassSchedule />
            <div className="border-t border-gray-200 pt-8" id="documents">
              <AnnouncementDoc />
            </div>
          </div>
        </div>
      </div>

      <Welcome id="welcome" />
    </Layout>
  );
}
