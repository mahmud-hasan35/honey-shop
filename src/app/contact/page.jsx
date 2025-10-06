"use client";

import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-5xl font-extrabold text-emerald-700 mb-10 text-center"
      >
        Get In <span className="text-emerald-500">Touch</span> With Us
      </motion.h1>

      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side info */}
        <div className="bg-emerald-600 text-white p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-center md:text-left">Let's Connect</h2>
            <p className="text-emerald-100 mb-6 text-center md:text-left">
              Have questions or ideas? Drop us a message — we’d love to hear from you!
            </p>
          </div>
          <div className="space-y-4 text-sm sm:text-base">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin size={18} />
              <p>Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone size={18} />
              <p>+880 1780-544-535</p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Mail size={18} />
              <p>mahmudhasanh35@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start items-center gap-5 mt-8">
            <a href="#" className="hover:text-emerald-200 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-emerald-200 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-emerald-200 transition"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Right side form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-6 sm:p-10"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 text-center md:text-left">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input name="name" required type="text" placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500" />
            <input name="email" required type="email" placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500" />
            <textarea name="message" required rows="5" placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 resize-none"></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg flex justify-center items-center gap-2 transition"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
