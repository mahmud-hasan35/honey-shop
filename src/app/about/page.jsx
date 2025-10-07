"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../../../public/pexels-guvo59-34185862.jpg";
import bgImg from "../../../public/pexels-umsiedlungen-1036269bg.jpg";
import Link from "next/link";

export default function AboutPage() {
  const scrollToSection = () => {
    const section = document.getElementById("why-choose-us");
    
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* =================== ABOUT SECTION =================== */}
      <section
        id="about"
        className="relative overflow-hidden py-20 bg-gradient-to-br from-emerald-50 via-yellow-50 "
      >
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-10 bg-[url('/bg-pattern.png')] bg-repeat bg-center"
          style={{
            backgroundImage: `url(${bgImg.src})`,
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container mx-auto px-6 md:px-16 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-700 to-yellow-600 bg-clip-text text-transparent">
              About Our Pure Honey
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              At{" "}
              <span className="font-semibold text-amber-600">Golden Hive</span>, 
              we believe that pure, natural honey is not just a food — it's nature’s 
              sweet gift packed with nourishment and health benefits. 🍯  
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our journey began with a passion for sustainable beekeeping and 
              delivering the purest honey directly from the hive to your table.  
              Every drop is collected responsibly, ensuring both bees and nature 
              remain protected.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToSection}
                className="bg-gradient-to-r from-emerald-700 to-yellow-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition"
              >
                Learn More
              </motion.button>

              <Link href={"/contact"}>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
               
                className="border border-b-emerald-400 text-emerald-700 font-semibold px-8 py-3 rounded-full hover:bg-emerald-100 transition"
              >
                Contact Us
              </motion.button>
              </Link>

            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden shadow-2xl border-8 border-amber-100">
              <Image
                src={img}
                alt="Pure Honey Jar"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Icons */}
        <motion.div
          className="absolute bottom-10 left-10 text-amber-300 text-6xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          🍯
        </motion.div>
        <motion.div
          className="absolute top-16 right-16 text-amber-300 text-5xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          🐝
        </motion.div>
      </section>

      {/* =================== WHY CHOOSE US SECTION =================== */}
      <section
        id="why-choose-us"
        className="py-24 bg-emerald-50 text-center px-6 md:px-16"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-emerald-600 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us 🍯
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We’re committed to providing the finest honey products crafted with love and care.
          Every jar is filled with natural goodness that’s 100% pure, unfiltered, and sourced
          responsibly from sustainable beekeepers.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "100% Natural Honey",
              desc: "Our honey is free from additives, ensuring the purest taste of nature.",
              emoji: "🌿",
            },
            {
              title: "Sustainable Beekeeping",
              desc: "We protect bees and nature with eco-friendly, ethical production methods.",
              emoji: "🐝",
            },
            {
              title: "Trusted Quality",
              desc: "Every batch is lab-tested to ensure safety, quality, and purity.",
              emoji: "✅",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="text-2xl font-semibold text-amber-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
