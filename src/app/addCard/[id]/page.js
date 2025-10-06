import AddToCartForm from "@/app/components/AddToCartForm";
import React from "react";

export default async function AddCardPage({ params }) {
  const p = await params;


  const res = await fetch(`http://localhost:3000/api/service/${p.id}`, {
    cache: "no-store",
  });
  const data = await res.json();


  if (!data) {
    return (
      <div className="text-center text-red-500 font-bold py-20">
        Product not found!
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-emerald-600">
        Add to Cart: {data.title}
      </h1>

      {/* Form Component */}
      <AddToCartForm product={data} />
    </div>
  );
}
