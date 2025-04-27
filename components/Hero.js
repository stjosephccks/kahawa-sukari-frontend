import Link from "next/link";
import React from "react";
import Image from "next/image";

function Hero({ imageUrl, title, text, link, linkTitle }) {
  return (
    <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Hero Image"
          fill
          className="object-cover md:object-fill brightness-50"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-6 md:mb-8 max-w-2xl mx-auto">
            {text}
          </p>
          {link && (
            <div className="flex justify-center">
              <Link
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg transition-colors duration-300"
                href={link}
              >
                {linkTitle}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
