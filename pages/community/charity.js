import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHandHoldingHeart,
  FaUsers,
  FaHospitalUser,
} from "react-icons/fa";

function Charity() {
  const title = "Community Outreach";
  const text =
    "Join us in making a difference through our various support groups and community services";
  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";

  const groups = [
    {
      name: "Ujiachilie ",
      description:
        "Ujiachilie supports people with disabilities in different ways and other aspects of their lives. Its activity begins with screening, making a diagnosis, offering a clear management plan for each person, and then enrolling them for each care category they need. All persons enrolled come from disadvantaged families and don’t have access to therapy clinics and medical care. If disabled people get proper comprehensive therapy, it reduces the burden of disability to a great extent. To ensure better outcomes of our efforts, we run a comprehensive therapy unit at St Joseph Health Centre, catering to the multiple therapy needs of people with disabilities. So far, the population of the project is 50 children with physical and mental disabilities from economically disadvantaged families. We hope to extend it in the next months, with the support of our donors.",
      meetingDay: "Tuesdays",
      meetingTime: "10:00 AM - 12:00 PM",
      location: "Parish Hall",
      image: "https://kahawa-sukari.s3.amazonaws.com/ujiachilie.webp",
      icon: <FaUsers className="text-4xl text-primary" />,
    },
    {
      name: "Meeting Point",
      description:
        "A support group dedicated to providing care and assistance to persons living with HIV. The group offers counseling, medical support, and community integration programs.",
      meetingDay: "Thursdays",
      meetingTime: "2:00 PM - 4:00 PM",
      location: "Parish Conference Room",
      image: "/images/meeting-point.jpg",
      icon: <FaHospitalUser className="text-4xl text-primary" />,
    },
  ];

  const services = [
    {
      name: "Visiting the Sick and Elderly",
      description:
        "Our parish offers regular visits to the sick and elderly members of our community. This service provides companionship, spiritual support, and assistance with daily needs.",
      bookingInfo: "To book a visit, please contact:",
      contact: [
        "Parish Email: stjosephccks@gmail.com",
        "Contact: +254726 145609",
      ],
      image: "/images/visiting-sick.jpg",
      icon: <FaHandHoldingHeart className="text-4xl text-primary" />,
    },
  ];

  const donations = [
    {
      category: "Foodstuffs",
      items: [
        "Maize flour",
        "Rice",
        "Beans",
        "Cooking oil",
        "Sugar",
        "Salt",
        "Tea leaves",
        "Milk powder",
      ],
      dropOff: "Parish Office",
      timing: "Monday to Friday, 8:00 AM - 5:00 PM",
      contact: "Parish Office: +254 700 000 000",
      icon: "🍞",
    },
    {
      category: "Clothing",
      items: [
        "Gently used clothes",
        "Shoes",
        "Blankets",
        "Bed sheets",
        "Towels",
      ],
      dropOff: "Parish Office",
      timing: "Monday to Friday, 8:00 AM - 5:00 PM",
      contact: "Parish Office: +254 700 000 000",
      icon: "👕",
    },
    {
      category: "Other Items",
      items: [
        "Toiletries",
        "Sanitary products",
        "School supplies",
        "Medical supplies",
        "Household items",
      ],
      dropOff: "Parish Office",
      timing: "Monday to Friday, 8:00 AM - 5:00 PM",
      contact: "Parish Office: +254 700 000 000",
      icon: "📦",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="w-full">
          <Hero text={text} title={title} imageUrl={imageurl} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Links Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="#support-groups"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <FaUsers className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Support Groups</h3>
              </a>
              <a
                href="#services"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <FaHandHoldingHeart className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Services</h3>
              </a>
              <a
                href="#donations"
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <FaHandHoldingHeart className="text-4xl text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Donations</h3>
              </a>
            </div>
          </div>

          {/* Support Groups Section */}
          <div id="support-groups" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Support Groups
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {groups.map((group, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={group.image}
                      alt={group.name}
                      fill
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {group.icon}
                      <h3 className="text-xl font-semibold ml-3">
                        {group.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{group.description}</p>
                    <div className="space-y-2">
                      <p className="text-gray-700 flex items-center">
                        <FaClock className="mr-2 text-primary" />
                        <span className="font-medium">Meeting Time:</span>{" "}
                        {group.meetingDay}, {group.meetingTime}
                      </p>
                      <p className="text-gray-700 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-primary" />
                        <span className="font-medium">Location:</span>{" "}
                        {group.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div id="services" className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Parish Services
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h3 className="text-xl font-semibold ml-3">
                        {service.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <p className="text-gray-700 mb-2">{service.bookingInfo}</p>
                    <div className="space-y-2">
                      {service.contact.map((contact, i) => (
                        <p key={i} className="text-gray-700 flex items-center">
                          {contact.includes("Email") ? (
                            <FaEnvelope className="mr-2 text-primary" />
                          ) : (
                            <FaPhone className="mr-2 text-primary" />
                          )}
                          {contact}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Donations Section */}
          <div id="donations">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Donations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {donations.map((donation, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4 text-center">
                    {donation.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary text-center">
                    {donation.category}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Items Needed:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {donation.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Drop-off Location:</h4>
                      <p className="text-gray-600 flex items-center">
                        <FaMapMarkerAlt className="mr-2 text-primary" />
                        {donation.dropOff}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Timing:</h4>
                      <p className="text-gray-600 flex items-center">
                        <FaClock className="mr-2 text-primary" />
                        {donation.timing}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Contact:</h4>
                      <p className="text-gray-600 flex items-center">
                        <FaPhone className="mr-2 text-primary" />
                        {donation.contact}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Charity;
