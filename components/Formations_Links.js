import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Formations_Links() {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const formations = [
    { name: "PMC", path: "pmc" },
    { name: "Mantle of St. Joseph", path: "mantle" },
    { name: "MYM", path: "mym" },
    { name: "YSC", path: "ysc" },
    { name: "YCA", path: "yca" },
    { name: "Charismatic", path: "charismatic" },
    { name: "CL", path: "cl" },
    { name: "CWA", path: "cwa" },
    { name: "CMA", path: "cma" },
    { name: "CJPD", path: "cjpd" },
    { name: "Young Couples", path: "couples" },
  ];

  return (
    <div className="w-full">
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-primary text-white rounded-lg"
        >
          <span className="text-lg font-semibold">Formations</span>
          <svg
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Formations</h2>
        <ul className="space-y-2">
          {formations.map((formation) => (
            <li key={formation.path}>
              <Link
                className={`block p-2 rounded-lg transition-colors ${
                  pathname.includes(formation.path)
                    ? "bg-secondary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                href={`/formation/${formation.path}`}
              >
                {formation.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <ul className="mt-2 space-y-1">
              {formations.map((formation) => (
                <li key={formation.path}>
                  <Link
                    className={`block p-3 rounded-lg transition-colors ${
                      pathname.includes(formation.path)
                        ? "bg-secondary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    href={`/formation/${formation.path}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {formation.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Formations_Links;
