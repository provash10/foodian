import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar, FaFire, FaClock, FaArrowRight } from "react-icons/fa";

const FoodCard = ({ food }) => {
  if (!food) return null;

  const imageSrc = food?.image?.startsWith("http") || food?.image?.startsWith("/")
    ? food.image
    : (food?.image ? `/${food.image}` : "/placeholder.png");

  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          fill
          src={imageSrc}
          alt={food.name || "Food item"}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-xl shadow-sm flex items-center gap-1 border border-white/20">
          <FaStar className="text-yellow-500 text-xs" />
          <span className="text-xs font-bold text-gray-800">4.8</span>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-orange-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider">
            Popular
          </span>
        </div>
      </div>

      {/* content*/}
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-black text-gray-900 line-clamp-1 group-hover:text-orange-600 transition-colors">
            {food.name}
          </h3>
          <span className="text-orange-600 font-black text-lg">
            ${food.price}
          </span>
        </div>

        <p className="text-gray-500 mb-6 line-clamp-2 text-sm font-medium leading-relaxed">
          {food.description || "Indulge in our carefully prepared dish, made with the finest ingredients."}
        </p>

        <div className="flex items-center gap-4 mb-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
            <FaClock className="text-orange-500" />
            <span>25m</span>
          </div>
          <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md">
            <FaFire className="text-orange-500" />
            <span>450 kcal</span>
          </div>
        </div>

        <div className="mt-auto">
          <Link
            href={`/foods/${food._id?.toString() || ""}`}
            className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-4 rounded-2xl hover:bg-orange-600 transition-all font-black text-sm group/btn"
          >
            view Details
            <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
