import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const InfiniteCarousel = ({ images = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(1); // Default to showing 1 image

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    // Set imagesToShow based on screen size
    const updateImagesToShow = () => {
      if (window.innerWidth >= 1024) {
        setImagesToShow(3); // Show 3 images on large screens
      } else {
        setImagesToShow(1); // Show 1 image on smaller screens
      }
    };

    updateImagesToShow(); // Set initial value
    window.addEventListener("resize", updateImagesToShow);

    const autoplay = setInterval(goToNext, interval);

    return () => {
      clearInterval(autoplay);
      window.removeEventListener("resize", updateImagesToShow);
    };
  }, [interval, goToNext]); // Added goToNext as a dependency

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const visibleImages = () => {
    const start = currentIndex;
    const end = (currentIndex + imagesToShow) % images.length;

    if (start < end) {
      return images.slice(start, end);
    } else {
      return [...images.slice(start), ...images.slice(0, end)];
    }
  };

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div
      id="custom-controls-gallery"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="flex justify-center space-x-4">
          {visibleImages().map((image, index) => (
            <div
              key={index}
              className="relative transition-opacity duration-700 ease-in-out"
              style={{ flex: `0 0 calc(${100 / imagesToShow}%)` }} // Flex based on imagesToShow
            >
              <Image
                height={500}
                width={500}
                src={image}
                className="block max-w-full h-full object-cover rounded-md"
                alt={`Carousel image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Controls */}
      <div className="flex justify-center items-center pt-4 pb-4">
        <button
          type="button"
          className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
          onClick={goToPrevious}
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
          onClick={goToNext}
        >
          <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
            <svg
              className="rtl:rotate-180 w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
