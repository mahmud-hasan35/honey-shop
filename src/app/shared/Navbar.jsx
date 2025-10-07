"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false); 
  const { data: session, status } = useSession();
 
  

  return (
    <nav className="bg-[#0F172A] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide text-emerald-400"
        >
          Honey Shop
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-yellow-400">Home</Link>
          <Link href="/my-products" className="hover:text-yellow-400">My add product</Link>
          <Link href="/about" className="hover:text-yellow-400">About</Link>
          <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex space-x-5 items-center relative">
          {status === "authenticated" ? (
            <>
              {/* Avatar */}
              <div className="relative">
                <Image
                  src={session?.user?.image || "/default-avatar.png"}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                />

                {/* Dropdown */}
                {showMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg">
                    <p className="px-4 py-2 text-sm text-gray-600">
                      {session?.user?.name || "User"}
                    </p>
                    <p className="px-4 py-2 text-sm text-gray-600">
                      {session?.user?.email.split("@")[0] || "User"}
                    </p>
                    <button
                      onClick={() => {
                        signOut();
                        setShowMenu(false);
                      }}
                      className="block w-full text-center bg-emerald-400 px-4 py-2 font-bold text-white cursor-pointer hover:bg-emerald-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-lg border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0F172A]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 rounded-lg bg-yellow-400 text-[#0F172A] font-semibold hover:bg-yellow-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1E293B] px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/my-products" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>My add products</Link>
          <Link href="/about" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="block hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link>

          <div className="flex flex-col gap-3 pt-4">
            {status === "authenticated" ? (
              <>
                <div className="flex items-center gap-3">
                  <Image
                    src={session?.user?.image || "/default-avatar.png"}
                    alt="User Avatar"
                    width={35}
                    height={35}
                    className="rounded-full"
                  />
                  <span className="text-emerald-400 font-semibold">
                    {session?.user?.name || "User"}
                  </span>
                   <span className="px-4 py-2 text-sm text-white">
                      {session?.user?.email.split("@")[0] || "User"}
                    </span>
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-lg border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-[#0F172A] text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 rounded-lg bg-yellow-400 text-[#0F172A] font-semibold hover:bg-yellow-300 text-center"
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
