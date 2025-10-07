"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookingUpdateForm({ product }) {
  const { data: session } = useSession();
  const router = useRouter();

  const initialData = {
    phone: product?.phone || "",
    address: product?.address || "",
    quantity: product?.quantity || 1,
    date: product?.date || "",
  };

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ check if any field has been changed
    const isChanged = JSON.stringify(formData) !== JSON.stringify(initialData);

    if (!isChanged) {
      toast.success("✅ No changes detected. Everything is already up to date!", {
        position: "top-center",
        duration: 1800,
      });
      return;
    }

    const payload = {
      ...formData,
      userEmail: session?.user?.email,
      userName: session?.user?.name,
      productId: product?._id,
      productTitle: product?.productTitle,
      productImage: product?.productImage,
      price: product?.price,
    };

    // 🟢 show loading toast
    const loadingToast = toast.loading("Updating booking...", {
      position: "top-center",
    });

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/my-bookings/${product._id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      toast.dismiss(loadingToast);

      if (!res.ok) {
        toast.error("❌ Failed to update booking!", { position: "top-center" });
        return;
      }

      toast.success("✅ Booking updated successfully!", {
        position: "top-center",
        duration: 1500,
      });

      setTimeout(() => {
        router.push("/my-products");
      }, 1600);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("⚠️ Something went wrong!", { position: "top-center" });
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
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

        {/* Buttons */}
        <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 w-full">
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-600 transition text-center"
          >
            Update Booking
          </button>

          {/* 🔙 Cancel button */}
          <button
            type="button"
            onClick={() => router.back()}
            className="w-full sm:w-auto px-8 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition text-center"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
