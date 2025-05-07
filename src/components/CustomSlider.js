import React, { useState, useRef, useEffect } from "react";
import ProductCard from "./ProductCard";

const CustomSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1); // Default to 1 slide per view
  const sliderRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false); // Flag to debounce actions

  // Clone slides for loop functionality
  const slides = [
    ...products.slice(-slidesPerView), // Clone last slidesPerView slides at the beginning
    ...products,
    ...products.slice(0, slidesPerView), // Clone first slidesPerView slides at the end
  ];

  const updateSlidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      setSlidesPerView(3); // Show 3 cards on desktop screens
    } else if (screenWidth >= 768) {
      setSlidesPerView(2); // Show 2 cards on table screens
    } else {
      setSlidesPerView(1); // Show 1 card on mobile screens
    }
  };

  useEffect(() => {
    updateSlidesPerView(); // Set initial slidesPerView based on screen width
    window.addEventListener("resize", updateSlidesPerView); // Update on window resize
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Handle next and previous slide actions
  const handleNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true); // Prevent further actions during transition
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true); // Prevent further actions during transition
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Handle transition end to jump to the correct slide to avoid flickering
  const handleTransitionEnd = () => {
    const slider = sliderRef.current;

    if (currentIndex === 0) {
      // Jump to the last "real" slide group
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${
        products.length * (100 / slidesPerView)
      }%)`;
      setCurrentIndex(products.length);
    } else if (currentIndex === products.length + 1) {
      // Jump to the first "real" slide group
      slider.style.transition = "none";
      slider.style.transform = `translateX(-${100 / slidesPerView}%)`;
      setCurrentIndex(1);
    }
    setIsTransitioning(false); // Allow further actions after transition
  };

  useEffect(() => {
    const slider = sliderRef.current;

    // Animate to the current slide
    slider.style.transition = "transform 0.3s ease-in-out";
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slidesPerView)
    }%)`;
  }, [currentIndex, slidesPerView]);

  return (
    <div className="relative w-full max-w-[1260px] overflow-hidden mx-auto">
      {/* Slider Track */}
      <div
        ref={sliderRef}
        className="flex w-full"
        onTransitionEnd={handleTransitionEnd} // Handle transition end to jump to the correct slide
      >
        {slides.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex px-2.5 justify-center"
            style={{
              flexBasis: `${100 / slidesPerView}%`, // Each slide takes a fraction of the container depending on slidesPerView
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8 justify-center items-center ">
        {/* Prev Button */}
        <button
          onClick={handlePrevSlide}
          className="bg-gray-800 text-white px-4 py-2 rounded z-10"
        >
          Prev
        </button>

        {/* Next Button */}
        <button
          onClick={handleNextSlide}
          className=" bg-gray-800 text-white px-4 py-2 rounded z-10"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
