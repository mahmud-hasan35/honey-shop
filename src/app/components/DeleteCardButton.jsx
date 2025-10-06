"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function DeleteCardButton({ id }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/service/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.ok && data.success) {
        toast.success("Item deleted successfully!");
        router.refresh();
      } else {
        toast.error(data.message || "Delete failed");
      }
    } catch (err) {
      console.error("❌ Delete error:", err);
      toast.error("Something went wrong!");
    }
  };

  // ✅ Confirmation toast দেখানোর ফাংশন
  const confirmDelete = (id) => {
    toast(
      (t) => (
        <div className="flex flex-col gap-2">
          <p className="text-sm">Are you sure you want to delete this item?</p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                toast.dismiss(t.id); // toast বন্ধ
                handleDelete(id); // delete চালাও
              }}
              className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md"
            >
              Yes, Delete
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { duration: 5000 }
    );
  };

  return (
    <button
      onClick={() => confirmDelete(id)}
      className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm transition"
    >
      <Trash2 size={16} /> Delete
    </button>
  );
}
