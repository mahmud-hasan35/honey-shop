import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-200 p-4">
      
      {/* Honey Drip / 404 */}
      <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-extrabold text-yellow-600 animate-bounce">
        404
      </h1>

      {/* Message */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-yellow-700 mb-4 text-center">
        Oops! Sweet Honey Lost 🍯
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-yellow-800 mb-8 text-center max-w-md sm:max-w-lg md:max-w-xl px-2">
        Looks like this page got lost in the honeycomb. Don’t worry, we’ll guide you back to the sweetness of our shop!
      </p>

      {/* Return Home Button */}
      <Link href="/">
        <button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform">
          Return to Honey Home
        </button>
      </Link>

      {/* Honey Jar Animation */}
      <div className="relative mt-12 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 animate-bounce">
        <div className="absolute w-12 sm:w-16 md:w-16 h-12 sm:h-16 md:h-16 bg-yellow-400 rounded-full top-0 left-1/2 -translate-x-1/2 shadow-inner"></div>
        <div className="absolute w-8 sm:w-12 md:w-12 h-8 sm:h-12 md:h-12 bg-yellow-300 rounded-full top-8 left-1/2 -translate-x-1/2 shadow-inner"></div>
      </div>
    </div>
  );
}
