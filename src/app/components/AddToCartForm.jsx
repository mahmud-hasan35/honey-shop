"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function BookingUpdateForm({ product }) {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    phone: product?.phone || "",
    address: product?.address || "",
    quantity: product?.quantity || 1,
    date: product?.date || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const toastId = toast.loading("⏳ Updating booking...");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/my-bookings/${product._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            userEmail: session?.user?.email,
            userName: session?.user?.name,
            productId: product?._id,
            productTitle: product?.productTitle,
            productImage: product?.productImage,
            price: product?.price,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to update booking");

      toast.success("✅ Booking updated successfully!", { id: toastId });

      setTimeout(() => {
        router.push("/my-products");
      }, 1500);
    } catch (error) {
      console.error("🚨 Update Error:", error);
      toast.error("❌ Something went wrong!", { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2500,
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "15px",
            padding: "10px 20px",
          },
          success: {
            style: { background: "#10b981" }, // emerald
          },
          error: {
            style: { background: "#ef4444" }, // red
          },
        }}
      />

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={session?.user?.name || ""}
              readOnly
              className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Product
            </label>
            <input
              type="text"
              value={product?.productTitle || ""}
              readOnly
              className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Delivery / Order Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Phone
            </label>
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
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              value={session?.user?.email || ""}
              readOnly
              className="w-full border bg-gray-100 border-gray-300 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Price
            </label>
            <input
              type="number"
              value={product?.price || 0}
              readOnly
              className="w-full border border-gray-200 bg-gray-100 rounded-lg px-4 py-2 text-gray-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Quantity
            </label>
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

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Address
            </label>
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

        <div className="col-span-1 md:col-span-2 flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-8 py-3 text-white font-semibold rounded-lg shadow-md transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-emerald-500 hover:bg-emerald-600"
            }`}
          >
            {isSubmitting ? "Updating..." : "Update Booking"}
          </button>
        </div>
      </form>
    </div>
  );
}
