import Link from "next/link";
import React from "react";
import Image from "next/image";

function Hero({ imageUrl, title, text, link, linkTitle }) {
  return (
    <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] flex items-center justify-center w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Hero Image"
          loading="eager"
          fill
          className="object-cover md:object-cover brightness-[0.7] blur-[0.5px]"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          style={{ objectPosition: "center" }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white w-full max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center justify-center  p-8 md:p-12 rounded-lg">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 w-full md:max-w-4xl lg:max-w-5xl [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              {title}
            </h1>
            <p className="text-xl md:text-3xl font-bold mb-8 w-full md:max-w-3xl lg:max-w-4xl mx-auto [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
              {text}
            </p>
            {link && (
              <Link
                className="inline-block bg-primary/90 hover:bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-md text-base md:text-lg transition-colors duration-300 shadow-lg backdrop-blur-[2px] md:backdrop-blur-sm"
                href={link}
              >
                {linkTitle}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
