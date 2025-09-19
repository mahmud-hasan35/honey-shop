"use client";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Welcome to MyShop!",
    subtitle: "Your trusted destination for premium products.",
    image: "/2448229.jpg", // এখানে নিজের image দাও
  },
  {
    id: 2,
    title: "Best Quality, Best Price",
    subtitle: "Handpicked collections with unbeatable offers.",
    image: "/4910241.jpg",
  },
  {
    id: 3,
    title: "Shop with Confidence",
    subtitle: "Safe, secure, and satisfying shopping experience.",
    image: "/66251.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="mt-4 text-lg md:text-2xl text-gray-200">
              {slide.subtitle}
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-yellow-400" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
