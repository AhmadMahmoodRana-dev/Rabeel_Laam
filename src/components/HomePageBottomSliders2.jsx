import React, { useEffect, useState} from "react";
import SliderCard from "./SliderCard";
import { IoIosArrowBack } from "react-icons/io";
import carousel1 from "../assets/category (4).png";
import carousel2 from "../assets/category (12).png";
import carousel3 from "../assets/category (11).png";
import carousel4 from "../assets/category (14).png";
import carousel5 from "../assets/category (8).png";
import carousel6 from "../assets/category (9).png";
import carousel7 from "../assets/category (10).png";


const HomePageBottomSliders2 = () => {
  const products = [
    { id: 1, name: "Rawalpindi",image:carousel1 },
    { id: 2, name: "Faisalabad",image:carousel2 },
    { id: 3, name: "Gujranwala",image:carousel3 },
    { id: 4, name: "Lahore",image:carousel4 },
    { id: 5, name: "Multan",image:carousel5 },
    { id: 6, name: "Hyderabad",image:carousel6 },
    { id: 7, name: "Karachi",image:carousel7 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [perSlide, setPerSlide] = useState(1);

  // Set perSlide depending on screen size
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerSlide(5); // large screens
      else if (w >= 768) setPerSlide(3); // medium screens
      else setPerSlide(1); // small screens
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) =>
        i + 1 + perSlide <= products.length ? i + 1 : 0
      );
    }, 3000);
    return () => clearInterval(id);
  }, [perSlide, products.length]);

  const prev = () => {
    setCurrentIndex((i) =>
      i > 0 ? i - 1 : Math.max(products.length - perSlide, 0)
    );
  };

  const next = () => {
    setCurrentIndex((i) =>
      i + perSlide < products.length ? i + 1 : 0
    );
  };

  const shiftPercent = (100 / products.length) * currentIndex;

  return (
    <div className="relative overflow-hidden  py-4 px-8">
      <div className="overflow-hidden w-full">
        <div
          className="flex ml-10 transition-transform duration-500 ease-in-out"
          style={{
            width: `${(products.length * 100) / perSlide}%`,
            transform: `translateX(-${shiftPercent}%)`,
          }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 flex justify-center"
              style={{ width: `${100 / products.length}%` }}
            >
              <div className="w-full max-w-xs">
                <SliderCard name={p.name} image={p.image} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        disabled={products.length <= perSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 opacity-80 hover:opacity-100 disabled:opacity-50"
      >
        <IoIosArrowBack className="w-8 h-8" />
      </button>
      <button
        onClick={next}
        disabled={products.length <= perSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 rotate-180 text-gray-400 opacity-80 hover:opacity-100 disabled:opacity-50"
      >
        <IoIosArrowBack className="w-8 h-8" />
      </button>
    </div>
  );
};

export default HomePageBottomSliders2;
  