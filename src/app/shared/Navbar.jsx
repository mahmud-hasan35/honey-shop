"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log(session);
  

  return (
    <nav className="bg-[#0F172A] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-emerald-400"
        >
          Honey Shop
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-yellow-400 transition-colors duration-200">
            Home
          </Link>
          <Link href="/products" className="hover:text-yellow-400 transition-colors duration-200">
            Products
          </Link>
          <Link href="/about" className="hover:text-yellow-400 transition-colors duration-200">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-5 items-center">
          {status === "authenticated" ? (
            <> 
              <span className="text-emerald-400 text-md font-semibold ">
                {session?.user?.name || "User"}
              </span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 rounded-lg bg-emerald-400 text-white hover:bg-emerald-700 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0F172A] transition duration-200"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-yellow-400 text-[#0F172A] font-semibold hover:bg-yellow-300 transition duration-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E293B] px-6 py-4 space-y-4 animate-slideDown">
          <Link href="/" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/products" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link href="/about" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/contact" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          <div className="flex flex-col gap-3 pt-4">
            {status === "authenticated" ? (
              <>
                <span className="text-emerald-400 font-semibold text-center">
                  {session?.user?.name || "User"}
                </span>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0F172A] transition duration-200 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg bg-yellow-400 text-[#0F172A] font-semibold hover:bg-yellow-300 transition duration-200 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
