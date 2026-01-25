"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  FiImage,
  FiDollarSign,
  FiFileText,
  FiEdit3,
  FiPlusCircle,
} from "react-icons/fi";


const AddFoodForm = () => {
  const router = useRouter();
  const [food, setFood] = useState({

    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading("Adding food...");
    try {
      const res = await fetch("/api/food", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(food),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Food added successfully!", { id: loadingToast });
        setFood({ name: "", description: "", price: "", image: "" });
        router.push("/foods");
      } else {

        toast.error(data.error || "Failed to add food", { id: loadingToast });
      }
    } catch (err) {
      console.error(err);
      toast.error("Error adding food", { id: loadingToast });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800 flex items-center justify-center gap-2">
          <FiPlusCircle className="text-blue-600" />
          Add New Food
        </h2>

        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 flex items-center gap-2">
            <FiEdit3 />
            Food Name
          </label>
          <input
            type="text"
            name="name"
            value={food.name}
            onChange={handleChange}
            placeholder="Chicken Burger"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 flex items-center gap-2">
            <FiFileText />
            Description
          </label>
          <textarea
            name="description"
            value={food.description}
            onChange={handleChange}
            rows="3"
            placeholder="Short food description..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 flex items-center gap-2">
            <FiDollarSign />
            Price
          </label>
          <input
            type="number"
            name="price"
            value={food.price}
            onChange={handleChange}
            placeholder="৳ 250"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label className="text-sm font-medium text-gray-600 mb-1 flex items-center gap-2">
            <FiImage />
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={food.image}
            onChange={handleChange}
            placeholder="https://image-link.com/food.jpg"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          <FiPlusCircle />
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoodForm;

