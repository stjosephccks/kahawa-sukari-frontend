import Image from "next/image";
import { motion } from "framer-motion";

const communities = [
  {
    title: "Prayer Groups",
    description:
      "Join our vibrant prayer communities that meet regularly for spiritual growth and fellowship.",
    image: "/images/communities/prayer-group.jpg",
    activities: ["Charismatic Prayer", "Divine Mercy", "Rosary Group"],
  },
  {
    title: "Choirs & Music Ministry",
    description:
      "Serve the Lord through music and enhance our liturgical celebrations.",
    image: "/images/communities/choir.jpg",
    activities: ["Adult Choir", "Youth Choir", "Children's Choir"],
  },
  {
    title: "Social Justice & Outreach",
    description:
      "Put faith into action through various community service initiatives.",
    image: "/images/communities/outreach.jpg",
    activities: [
      "Food Pantry",
      "Homeless Ministry",
      "Social Justice Committee",
    ],
  },
  {
    title: "Women's Ministry",
    description:
      "A supportive community of women growing together in faith and fellowship.",
    image: "/images/communities/women-ministry.jpg",
    activities: ["Bible Study", "Prayer Circles", "Service Projects"],
  },
  {
    title: "Men's Fellowship",
    description:
      "Brotherhood in Christ through spiritual growth and mutual support.",
    image: "/images/communities/mens-fellowship.jpg",
    activities: ["Morning Prayer", "Service Projects", "Fellowship Events"],
  },
  {
    title: "Family Life Ministry",
    description:
      "Supporting and strengthening Catholic families in our parish.",
    image: "/images/communities/family-ministry.jpg",
    activities: ["Family Events", "Parenting Support", "Marriage Enrichment"],
  },
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Parish Communities
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Join our vibrant community groups and grow in faith together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <motion.div
              key={community.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={community.image}
                  alt={community.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index < 3}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {community.title}
                </h2>
                <p className="text-gray-600 mb-4">{community.description}</p>
                <div className="space-y-2">
                  {community.activities.map((activity) => (
                    <div key={activity} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
