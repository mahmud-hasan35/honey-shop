"use client";
import { motion } from "framer-motion";
import { Droplet, Flower2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-50 p-4">
      {/* Honey Spinner */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="relative w-24 h-24 border-8 border-emerald-400 border-t-emerald-200 rounded-full flex items-center justify-center mb-6"
      >
        <Droplet className="text-emerald-500 w-8 h-8 absolute" />
        <Flower2 className="text-emerald-700 w-10 h-10 opacity-80 animate-pulse" />
      </motion.div>

      {/* Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-emerald-700 text-center"
      >
        Pouring some fresh honey... 🍯
      </motion.p>
    </div>
  );
}
