"use client"

import React from "react";
import { Pencil, ShoppingBag } from "lucide-react";
import Image from "next/image";
import DeleteCardButton from "./DeleteCardButton";

export default function CartTable({ data }) {
  const hasData = data && data.length > 0;

  if (!hasData) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <div className="bg-emerald-50 p-8 rounded-2xl shadow-sm border border-emerald-100 max-w-md">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={60} className="text-emerald-400" />
          </div>
          <h2 className="text-xl font-semibold text-gray-700">
            Your booking cart is empty
          </h2>
          <p className="text-gray-500 mt-2">
            You haven't added any items yet. Start exploring and add your first product!
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-5 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg transition-all"
          >
            Back to add product
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-emerald-100">
          <tr>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
              Image
            </th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
              Product
            </th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
              Quantity
            </th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
              Price
            </th>
            <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
              Total
            </th>
            <th className="px-4 py-3 text-center text-gray-700 font-semibold border-b">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item._id}
              className="border-b hover:bg-emerald-50 transition"
            >
              <td className="px-4 py-3">
                <Image
                  src={item?.productImage}
                  alt={item?.productTitle || "Product image"}
                  width={50}
                  height={50}
                  className="rounded-md border"
                />
              </td>
              <td className="px-4 py-3 text-gray-700 font-medium">
                {item.productTitle}
              </td>
              <td className="px-4 py-3 text-gray-600">{item.quantity}</td>
              <td className="px-4 py-3 text-gray-600">Tk: {item.price}</td>
              <td className="px-4 py-3 font-semibold text-emerald-600">
                Tk: {item.quantity * item.price}
              </td>
              <td className="px-4 py-3 text-center space-x-2 space-y-2">
                <button className="inline-flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm transition">
                  <Pencil size={16} /> Edit
                </button>
                <DeleteCardButton id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
