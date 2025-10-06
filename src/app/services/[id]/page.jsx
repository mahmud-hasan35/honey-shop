

import React from "react";

import Image from "next/image";
import Link from "next/link";

export default async function HoneyDetails({ params }) {
  const p = await params;
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/service/${p.id}`);
  const data = await res.json();

  

  

  if (!data) {
    return (
      <div className="text-center py-20 text-red-500 font-bold text-xl">
        Product not found!
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
    {/* Banner Section */}
<div className="relative h-72 flex items-center justify-center text-white">
  {/* Background Image */}
  <Image
    src={data.img}
    alt={data.title}
    fill
    className="object-cover"
    priority
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Title */}
  <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold drop-shadow-lg text-center">
    {data.title}
  </h1>
</div>


      {/* Product Details Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={data.img}
            alt={data.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">{data.title}</h2>
          <p className="text-2xl font-semibold text-orange-600">
            Price: ${data.price}
          </p>
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
          <Link href={`/addCard/${data._id}`}>
          <button className="px-6 py-3 w-fit rounded-lg bg-emerald-500 text-white font-semibold shadow-md hover:bg-emerald-600 transition">
            Add to Cart
          </button>
          </Link>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          Why Choose This Honey?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.facility?.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-amber-600 mb-2">
                {item.name}
              </h4>
              <p className="text-gray-700">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
