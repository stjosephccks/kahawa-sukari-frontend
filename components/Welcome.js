import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Welcome() {
  return (
    <div id="welcome" className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Welcome to St. Joseph Catholic Church
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A vibrant community of faith in Kahawa Sukari
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={"https://kahawa-sukari.s3.amazonaws.com/st.Joseph.jpg"}
                alt="St. Joseph Catholic Church"
                className="w-full h-auto md:h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="text-white">
                  <h4 className="text-xl font-semibold">
                    St. Joseph Catholic Church
                  </h4>
                  <p className="text-sm opacity-90">Kahawa Sukari, Nairobi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                St. Joseph Catholic Church is located along Baringo Road, Kahawa
                Sukari. The parish is under the pastoral care of the{" "}
                <Link
                  href={"https://sancarlo.org/en/who-we-are/"}
                  target="_blank"
                  className="text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  Priestly fraternity of St. Charles Borromeo
                </Link>
                . Since 1998, St. Joseph Catholic Church has been a living
                testimony of faith.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We invite you to learn more about our parish resources and to
                become actively involved in the life of our community. It is our
                sincere hope that we, as a united body of believers in the Risen
                Lord, continue to point one another to Him, and by our witness,
                continue to invite the world around us to know the One who gives
                us life.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/welcome"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Learn More
              </Link>
              <Link
                href="/welcome/bulletin"
                className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                View Bulletin
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
