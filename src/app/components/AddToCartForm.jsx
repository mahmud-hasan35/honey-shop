"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";

export default function AddToCartForm({ product }) {


  const { data: session } = useSession();

  const [formData, setFormData] = useState({

    phone: "",
    address: "",
    quantity: 1,
    date: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
      productId: product?._id,
      productTitle: product?.title,
      productImage: product?.img || product?.img,
      price: product?.price,
    };

    console.log("📦 Payload before sending:", payload);
    
   

    try {
      const res = await fetch("http://localhost:3000/api/service", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log("✅ Posted Data", data);
      
      

      if (data.success) {
        alert("✅ Product successfully added to cart!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          quantity: 1,
          date: "",
        });
      } else {
        alert("❌ Failed to add product to cart.");
      }
    } catch (error) {
      console.error("🚨 Form Submit Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={session?.user?.name || ""}
              readOnly
              className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          {/* Product */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Product</label>
            <input
              type="text"
              value={product?.title || ""}
              readOnly
              className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Delivery / Order Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={session?.user?.email || ""}
              readOnly
              className="w-full border bg-gray-100 border-gray-300 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Price</label>
            <input
              type="number"
              value={product?.price || 0}
              readOnly
              className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition"
          >
            Confirm Add to Cart
          </button>
        </div>
      </form>
    </div>
  );
}
