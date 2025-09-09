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
    "https://kahawa-sukari.s3.amazonaws.com/Homepage3.jpeg";
  const title = "Event:";

  function formatDateForDisplay(date) {
    return date ? format(new Date(date), "MMMM d, yyyy - h:mm a") : "";
  }

  const isPastEvent = event ? new Date(event.date) < new Date() : false;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16">
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
              {isPastEvent && event.images && event.images.length > 0 ? (
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Event Photos</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {event.images.map((image, index) => (
                      <div key={index} className="relative h-64 w-full rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${event.title} photo ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {event.images && event.images[0] && (
                    <div className="relative h-64 sm:h-96 w-full">
                      <Image
                        src={event.images[0]}
                        alt={event.title}
                        layout="fill"
                        objectFit={isPastEvent ? "contain" : "cover"}
                        className="rounded-t-lg"
                      />
                    </div>
                  )}

                  {/* Additional Images Gallery for Past Events */}
                  {isPastEvent && event.images && event.images.length > 1 && (
                    <div className="p-4 bg-gray-50">
                      <h3 className="text-lg font-semibold mb-4">Event Gallery</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {event.images.slice(1).map((image, index) => (
                          <div key={index} className="relative h-32 w-full rounded-lg overflow-hidden">
                            <Image
                              src={image}
                              alt={`${event.title} image ${index + 2}`}
                              layout="fill"
                              objectFit="cover"
                              className="hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-3xl font-extrabold text-gray-900">
                    {event.title}
                  </h1>
                  {isPastEvent && (
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Past Event
                    </span>
                  )}
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{formatDateForDisplay(event.date)}</span>
                </div>

                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700 text-lg">
                    {event.description}
                  </p>
                </div>

                {/* Additional Event Information */}
                {event.moderator && (
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary">Organised By</h3>
                    <p className="text-gray-700">{event.moderator}</p>
                  </div>
                )}

                {event.keynoteSpeaker && (
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary">Keynote Speaker</h3>
                    <p className="text-gray-700">{event.keynoteSpeaker}</p>
                  </div>
                )}

                {event.paymentInfo && (
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-primary">Payment Information</h3>
                    <p className="text-gray-700">{event.paymentInfo}</p>
                  </div>
                )}
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
