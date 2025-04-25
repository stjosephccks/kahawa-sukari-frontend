import Link from "next/link";
import React from "react";

function Hero({ imageUrl, title, text, link, linkTitle }) {
  return (
    <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center">
      <img
        className="object-cover w-full h-full bg-blend-darken brightness-50"
        src={imageUrl}
        alt="Hero Image"
      />
      <div className="absolute text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-3xl font-medium mb-8">{text}</p>
        {link && (
          <Link
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg transition-colors duration-300"
            href={link}
          >
            {linkTitle}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Hero;
