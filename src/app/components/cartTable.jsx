"use client";

import React from "react";
import { Pencil, ShoppingBag } from "lucide-react";
import Image from "next/image";
import DeleteCardButton from "./DeleteCardButton";
import Link from "next/link";

export default function CartTable({ data }) {
  const hasData = data && data.length > 0;

  const formatNumber = (num) => {
    if (!num) return "0";
    return num.toLocaleString("en-BD");
  };

  if (!hasData) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 max-w-md">
          <div className="flex justify-center mb-4">
            <ShoppingBag size={60} className="text-emerald-500" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">
            Your Cart is Empty
          </h2>
          <p className="text-gray-500 mt-2">
            Looks like you haven’t added anything yet. Start shopping now!
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-5 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-green-600 mb-8 text-center">
        🛒 Your Shopping Cart
      </h2>

      {/* 🖥️ Desktop Table View */}
      <div className="hidden md:block overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
        <table className="min-w-full border-collapse">
          <thead className="bg-gradient-to-r from-emerald-500 to-green-600 text-white">
            <tr>
              {[
                "Image",
                "Product",
                "Date",
                "Quantity",
                "Price",
                "Total",
                "Phone",
                "Address",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-5 py-3 text-left text-sm font-semibold uppercase tracking-wide border-b border-emerald-400"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => (
              <tr
                key={item._id}
                className={`transition-all ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-emerald-50`}
              >
                <td className="px-5 py-4">
                  <Image
                    src={item?.productImage}
                    alt={item?.productTitle || "Product"}
                    width={60}
                    height={60}
                    className="rounded-lg border border-gray-200 shadow-sm object-cover"
                  />
                </td>
                <td className="px-5 py-4 text-gray-800 font-medium">
                  {item.productTitle}
                </td>
                <td className="px-5 py-4 text-gray-600">{item.date}</td>
                <td className="px-5 py-4 text-gray-600">
                  {formatNumber(item.quantity)}
                </td>
                <td className="px-5 py-4 text-gray-600">
                  ৳ {formatNumber(item.price)}
                </td>
                <td className="px-5 py-4 font-semibold text-emerald-600">
                  ৳ {formatNumber(item.quantity * item.price)}
                </td>
                <td className="px-5 py-4 text-gray-700">{item.phone}</td>
                <td className="px-5 py-4 text-gray-700 max-w-[180px] truncate">
                  {item.address}
                </td>
                <td className="px-5 py-4 text-center flex gap-2">
                  <Link href={`my-bookings/${item._id}`}>
                    <button className="inline-flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition">
                      <Pencil size={15} /> Edit
                    </button>
                  </Link>
                  <DeleteCardButton id={item._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 Mobile Card View */}
      <div className="grid md:hidden gap-4">
        {data.map((item) => (
          <div
            key={item._id}
            className="p-4 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-md transition"
          >
            <div className="flex gap-4 items-center mb-3">
              <Image
                src={item?.productImage}
                alt={item?.productTitle}
                width={70}
                height={70}
                className="rounded-lg border object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  {item.productTitle}
                </h3>
                <p className="text-gray-500 text-sm">{item.date}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700">
              <p>
                <span className="font-medium">Quantity:</span>{" "}
                {formatNumber(item.quantity)}
              </p>
              <p>
                <span className="font-medium">Price:</span> ৳{" "}
                {formatNumber(item.price)}
              </p>
              <p>
                <span className="font-medium">Total:</span>{" "}
                <span className="text-emerald-600 font-semibold">
                  ৳ {formatNumber(item.quantity * item.price)}
                </span>
              </p>
              <p>
                <span className="font-medium">Phone:</span> {item.phone}
              </p>
              <p className="col-span-2">
                <span className="font-medium">Address:</span> {item.address}
              </p>
            </div>

            <div className="flex justify-end gap-2 mt-3">
              <Link href={`my-bookings/${item._id}`}>
                <button className="inline-flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm transition">
                  <Pencil size={15} /> Edit
                </button>
              </Link>
              <DeleteCardButton id={item._id} />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Summary */}
      <div className="flex justify-end mt-8 border-t border-gray-100 pt-4">
        <div className="text-right">
          <p className="text-gray-600 text-sm">
            Total Items: <span className="font-medium">{data.length}</span>
          </p>
          <p className="text-2xl font-semibold text-emerald-600">
            Grand Total: ৳{" "}
            {formatNumber(
              data.reduce((acc, item) => acc + item.quantity * item.price, 0)
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
