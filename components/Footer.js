import React, { useEffect, useState } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };
  return (
    <div className="bg-primary h-72 flex items-center justify-center">
      <div className="text-center text-white">
        <div
          className={`flex items-center justify-center cursor-pointer transition-opacity duration-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>&nbsp;Back to Top</span>
        </div>

        <h3 className="my-2">ST.JOSEPH CATHOLIC CHURCH KAHAWA SUKARI</h3>
        <h4 className="mb-2">CHURCH OFFICE HOURS</h4>
        <div className="space-y-1">
          <p className="">
            <span className="font-bold">Tuesday - Friday:</span> 8:00 AM - 5:00 PM
          </p>
          <p className="">
            <span className="font-bold">Saturday:</span> 8:00 AM - 12:00 PM
          </p>
        </div>
        <h4 className="my-2">
          PARISH PHONE:{" "}
          {/* <a className="underline" href="tel: 0726 145609">
            0726 145609
          </a> */}
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a className="underline" href="tel: 0726 145609">
            0726 145609
          </a>
        </h4>
        <h4 className="my-2">
          EMAIL:{" "}
          <a className="underline" href="maito:stjosephccks@gmail.com">
            stjosephccks@gmail.com
          </a>
        </h4>
        <h4 className="my-2"> P O Box 16652, 00620 MOBIL PLAZA</h4>
    
      </div>
    
    </div>
  );
}

export default Footer;
