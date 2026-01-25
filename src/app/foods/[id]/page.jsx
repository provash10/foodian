import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FaArrowLeft,
  FaStar,
  FaClock,
  FaFire,
  FaShoppingCart,
  FaTruck,
  FaLeaf,
  FaMedal,
  FaShieldAlt,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa";

export const metadata = {
  title: "Food Details | Foodian",
  description: "View details of your favorite food item on Foodian.",
};

// force dynamic rendering
export const dynamic = "force-dynamic";


const getFoodById = async (id) => {
  try {
    if (!id || id.length !== 24) return null;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/food/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("Received non-JSON response for food item:", text.substring(0, 100));
      return null;
    }
  } catch (error) {
    console.error("Error fetching food from API:", error);
    return null;
  }
};


const FoodDetails = async ({ params }) => {

  const resolvedParams = await params;
  const { id } = resolvedParams;

  const food = await getFoodById(id);

  if (!food) notFound();

  // Optimized image source handling
  const getImageSource = (src) => {
    if (!src || typeof src !== "string" || src.trim() === "") return "/placeholder.png";
    if (src.startsWith("http") || src.startsWith("/")) return src;
    // Handle cases where the path might be relative without a leading slash
    return `/${src}`;
  };

  const imageSrc = getImageSource(food.image);
  const altText = food.name || "Food item";

  return (
    <div className="min-h-screen bg-[#fffcf9] py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Navigation Breadcrumb */}
        <nav className="mb-10 flex items-center justify-between">
          <Link
            href="/foods"
            className="group flex items-center gap-3 text-gray-500 hover:text-orange-600 transition-all font-medium"
          >
            <div className="p-2 rounded-full bg-white shadow-sm group-hover:bg-orange-50 transition-colors border border-gray-100">
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span>Back to Menu</span>
          </Link>
          <div className="flex gap-3">
            <button className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-red-500 transition-colors">
              <FaRegHeart />
            </button>
            <button className="p-3 rounded-full bg-white shadow-sm border border-gray-100 text-gray-400 hover:text-blue-500 transition-colors">
              <FaShareAlt />
            </button>
          </div>
        </nav>

        {/* Product Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* IMAGE SECTION - Stays sticky on scroll */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl group ring-8 ring-white">
              <Image
                src={imageSrc}
                alt={altText}
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Overlay Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-3">
                <span className="bg-orange-600 text-white px-5 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 backdrop-blur-md bg-opacity-90">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                  Popular
                </span>
                <span className="bg-white/90 text-orange-600 px-5 py-2 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-xl backdrop-blur-md flex items-center gap-2 border border-orange-100">
                  <FaLeaf className="text-green-500" />
                  Premium Fresh
                </span>
              </div>

              {/* Decorative Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Thumbnails / Small Info */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer opacity-50 hover:opacity-100">
                  <Image src={imageSrc} alt="" width={100} height={100} className="object-cover w-full h-full" unoptimized />
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="w-full lg:w-1/2 flex flex-col py-4">

            <div className="mb-4">
              <span className="text-orange-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">The Best Gastronomy</span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-4">
                {food.name}
              </h1>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-2xl border border-yellow-100">
                <FaStar className="text-yellow-500 shadow-sm" />
                <span className="font-bold text-lg">4.9</span>
                <span className="text-yellow-600/70 text-sm">(120+ Reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                <FaShieldAlt />
                Verified Recipe
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-1 group hover:border-orange-200 transition-colors">
                <FaClock className="text-orange-500 text-xl group-hover:scale-110 transition-transform" />
                <span className="text-xs text-gray-400 font-medium tracking-tight">Cook Time</span>
                <span className="text-sm font-bold text-gray-800">25 min</span>
              </div>
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-1 group hover:border-orange-200 transition-colors">
                <FaFire className="text-orange-500 text-xl group-hover:scale-110 transition-transform" />
                <span className="text-xs text-gray-400 font-medium tracking-tight">Energy</span>
                <span className="text-sm font-bold text-gray-800">450 kcal</span>
              </div>
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-1 group hover:border-orange-200 transition-colors">
                <FaMedal className="text-orange-500 text-xl group-hover:scale-110 transition-transform" />
                <span className="text-xs text-gray-400 font-medium tracking-tight">Quality</span>
                <span className="text-sm font-bold text-gray-800">Grade A</span>
              </div>
              <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center gap-1 group hover:border-orange-200 transition-colors">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <span className="text-xs text-gray-400 font-medium tracking-tight">Status</span>
                <span className="text-sm font-bold text-green-600 uppercase tracking-tighter">In Stock</span>
              </div>
            </div>

            <div className="mb-10 animate-fade-in-up">
              <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-orange-600 rounded-full" />
                Experience the Flavor
              </h4>
              <p className="text-gray-600 text-xl leading-relaxed font-medium">
                {food.description ||
                  "Immerse yourself in a culinary masterpiece where every ingredient is handpicked for perfection. This dish is not just food; it's an experience of luxury and authentic taste."}
              </p>
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100 bg-[#fffcf9]">
              <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-8">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 ml-1">Total Price</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-orange-600/50">$</span>
                    <span className="text-6xl font-black text-orange-600 tracking-tighter tabular-nums">
                      {food.price}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 w-full sm:w-auto">

                  <div className="hidden sm:flex items-center gap-4 bg-white px-6 py-4 rounded-3xl border border-gray-100 shadow-sm font-bold text-gray-900">
                    <button className="text-gray-300 hover:text-orange-600 transition-colors">-</button>
                    <span className="min-w-6 text-center">1</span>
                    <button className="text-gray-300 hover:text-orange-600 transition-colors">+</button>
                  </div>

                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-4 bg-gray-900 hover:bg-orange-600 text-white px-10 py-5 rounded-[2rem] font-black text-xl transition-all shadow-2xl hover:-translate-y-2 active:scale-95 group">
                    <FaShoppingCart className="group-hover:animate-bounce-hover" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-4">
            <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 text-2xl group-hover:bg-orange-600 group-hover:text-white transition-all">
              <FaTruck />
            </div>
            <div>
              <h5 className="font-black text-gray-900 text-xl mb-2">Priority Delivery</h5>
              <p className="text-gray-500 font-medium leading-relaxed">
                Enjoy blazing fast delivery within 5km for all orders over $50.00.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-4">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 text-2xl group-hover:bg-green-600 group-hover:text-white transition-all">
              <FaLeaf />
            </div>
            <div>
              <h5 className="font-black text-gray-900 text-xl mb-2">Pure Organic</h5>
              <p className="text-gray-500 font-medium leading-relaxed">
                We source 100% organic ingredients directly from local premium farms.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-4">
            <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 text-2xl group-hover:bg-yellow-600 group-hover:text-white transition-all">
              <FaMedal />
            </div>
            <div>
              <h5 className="font-black text-gray-900 text-xl mb-2">Chef&apos;s Special</h5>
              <p className="text-gray-500 font-medium leading-relaxed">
                Consistently rated 4.9 stars by our food critics and gourmet fans.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodDetails;
