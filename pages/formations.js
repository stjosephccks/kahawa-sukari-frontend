import Image from "next/image";
import { motion } from "framer-motion";

const formations = [
  {
    title: "Adult Faith Formation",
    description:
      "Deepen your understanding of Catholic faith through structured programs designed for adults.",
    image: "/images/formations/adult-formation.jpg",
    programs: [
      "RCIA (Rite of Christian Initiation of Adults)",
      "Bible Study Groups",
      "Spiritual Retreats",
    ],
  },
  {
    title: "Youth Ministry",
    description:
      "Dynamic programs fostering faith development among teenagers and young adults.",
    image: "/images/formations/youth-ministry.jpg",
    programs: [
      "Youth Catechesis",
      "Youth Leadership Program",
      "Teen Bible Study",
    ],
  },
  {
    title: "Children's Religious Education",
    description:
      "Age-appropriate faith formation for children, including sacramental preparation.",
    image: "/images/formations/children-education.jpg",
    programs: [
      "First Communion Preparation",
      "Sunday School",
      "Children's Liturgy",
    ],
  },
  {
    title: "Marriage Preparation",
    description:
      "Comprehensive preparation for couples embarking on the sacred journey of marriage.",
    image: "/images/formations/marriage-prep.jpg",
    programs: ["Pre-Cana Classes", "Couple Mentoring", "Marriage Enrichment"],
  },
];

export default function Formations() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Faith Formation Programs
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Growing together in faith, knowledge, and spirit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={formation.image}
                  alt={formation.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index < 2}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {formation.title}
                </h2>
                <p className="text-gray-600 mb-4">{formation.description}</p>
                <div className="space-y-2">
                  {formation.programs.map((program) => (
                    <div key={program} className="flex items-center">
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
                      <span className="text-gray-700">{program}</span>
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
