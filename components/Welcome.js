import Image from "next/image";
import Link from "next/link";
import React from "react";

function Welcome() {
  return (
    <div id="welcome">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300 px-4" />
      <div className="flex flex-col md:flex-row justify-center items-center md:max-w-screen-lg mx-auto p-4">
        <div className="md:w-1/2 p-4">
          <img
            src={"https://kahawa-sukari.s3.amazonaws.com/st.Joseph.jpg"}
            className="max-w-full h-auto md:h-72 rounded-md"
          />
          <div className="">
            <h4>....., FSCB</h4>
            <h4>phone</h4>
            <h4 className="italic">mail</h4>
          </div>
        </div>
        <div className="md:w-1/2 p-4">
          <p className="text-6xl mb-2">Welcome</p>
          <p>
            St. Joseph Catholic Church is located along Baringo Road, Kahawa
            Sukari. The parish is under the pastoral care of the{" "}
            <Link
              href={"https://sancarlo.org/en/who-we-are/"}
              target="_blank"
              className="text-cyan-600"
            >
              Priestly fraternity of St. Charles Borromeo.
            </Link>{" "}
            Since 1998, St. Joseph Catholic Church has been a living testimony
            of faith.
          </p>
          <br />
          <p>
            We invite you to learn more about our parish resources and to become
            actively involved in the life of our community. It is our sincere
            hope that we, as a united body of believers in the Risen Lord,
            continue to point one another to Him, and by our witness, continue
            to invite the world around us to know the One who gives us life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
