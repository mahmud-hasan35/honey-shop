export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 p-4">
      
      {/* Honey Spinner */}
      <div className="w-24 h-24 border-8 border-yellow-400 border-t-yellow-200 rounded-full animate-spin mb-6"></div>

      {/* Text */}
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-yellow-700">
        Pouring some fresh honey... 🍯
      </p>
    </div>
  );
}
