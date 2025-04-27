import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import axios from "axios";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaCalendarAlt, FaClock } from "react-icons/fa";

function EventDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const imageurl =
    "https://kahawa-sukari.s3.amazonaws.com/stJosephkahawasukari+(1).jpg";
  const title = "Event:";

  function formatDateForDisplay(date) {
    return date ? format(new Date(date), "MMMM d, yyyy - h:mm a") : "";
  }

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    axios
      .get("/api/events?id=" + id)
      .then((response) => {
        setEvent(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load event details");
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((err) => {
        console.error("Failed to load events:", err);
      });
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
          >
            Go Back
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Hero imageUrl={imageurl} title={title} text={event.title} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-primary hover:text-primary-dark mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back to Events
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Event Content */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {event.images && event.images[0] && (
                <div className="relative h-64 sm:h-96 w-full">
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
              )}

              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h1>

                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{formatDateForDisplay(event.date)}</span>
                </div>

                <div className="prose max-w-none">
                  <p className="text-gray-700 text-lg mb-6">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar with Other Events */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Upcoming Events
              </h2>
              <div className="space-y-4">
                {events.map((e) => (
                  <Link
                    key={e._id}
                    href={`/community/event/${e._id}`}
                    className="block p-4 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-primary hover:text-primary-dark">
                      {e.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <FaCalendarAlt className="mr-2" />
                      <span>{formatDateForDisplay(e.date)}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EventDetails;
