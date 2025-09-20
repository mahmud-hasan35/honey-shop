"use client"; // Must be a client component

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-4">
        Something went wrong! 😓
      </h2>
      <p className="text-yellow-800 mb-6 text-center max-w-md">
        Oops! We hit a little honey spill 🍯. Try again or go back home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-2 bg-white text-yellow-600 font-semibold rounded-full shadow-lg hover:bg-yellow-100 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
