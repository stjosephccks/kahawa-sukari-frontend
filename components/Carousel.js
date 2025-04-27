import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const InfiniteCarousel = ({ images = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(1);
  const [expandedImage, setExpandedImage] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const modalRef = useRef(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    if (expandedIndex !== null) {
      setExpandedIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  }, [images.length, expandedIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    if (expandedIndex !== null) {
      setExpandedIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  }, [images.length, expandedIndex]);

  useEffect(() => {
    const updateImagesToShow = () => {
      if (window.innerWidth >= 1024) {
        setImagesToShow(3);
      } else {
        setImagesToShow(1);
      }
    };

    updateImagesToShow();
    window.addEventListener("resize", updateImagesToShow);

    return () => {
      window.removeEventListener("resize", updateImagesToShow);
    };
  }, []);

  const visibleImages = () => {
    const start = currentIndex;
    const end = (currentIndex + imagesToShow) % images.length;

    if (start < end) {
      return images.slice(start, end);
    } else {
      return [...images.slice(start), ...images.slice(0, end)];
    }
  };

  const handleImageClick = (image, index) => {
    const actualIndex = (currentIndex + index) % images.length;
    setExpandedImage(image);
    setExpandedIndex(actualIndex);
  };

  const closeExpandedImage = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setExpandedImage(null);
      setExpandedIndex(null);
    }
  };

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <>
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
                className="relative transition-opacity duration-700 ease-in-out cursor-pointer"
                style={{ flex: `0 0 calc(${100 / imagesToShow}%)` }}
                onClick={() => handleImageClick(image, index)}
              >
                <Image
                  height={500}
                  width={500}
                  src={image}
                  className="block max-w-full h-full object-cover rounded-md hover:opacity-90 transition-opacity"
                  alt={`Carousel image ${index + 1}`}
                  loading="eager"
                  priority={index === 0}
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Controls */}
        <div className="flex justify-center items-center pt-4 pb-4">
          <button
            type="button"
            className="flex justify-center items-center me-4 h-full cursor-pointer group bg-gray-100 dark:bg-gray-800 border-none p-2 rounded-full"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <span className="text-gray-900 dark:text-white">
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
            className="flex justify-center items-center h-full cursor-pointer group bg-gray-100 dark:bg-gray-800 border-none p-2 rounded-full"
            onClick={goToNext}
            aria-label="Next image"
          >
            <span className="text-gray-900 dark:text-white">
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

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-2 md:p-4"
          onClick={closeExpandedImage}
        >
          <div
            ref={modalRef}
            className="relative w-full h-full max-w-4xl max-h-[90vh] flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-3"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
                setExpandedIndex(null);
              }}
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={expandedImage}
                  alt="Expanded view"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full max-h-[80vh] rounded-lg"
                  priority
                  loading="eager"
                  quality={100}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InfiniteCarousel;
