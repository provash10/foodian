import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa';
import Image from 'next/image';

const PopularRecipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Creamy Pasta Carbonara",
      image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=1000&auto=format&fit=crop",
      rating: 4.8,
      time: "25 min",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Grilled Chicken Salad",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
      rating: 4.6,
      time: "30 min",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000&auto=format&fit=crop",
      rating: 4.9,
      time: "45 min",
      difficulty: "Easy",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-orange-200 decoration-4 underline-offset-8">Top Rated</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Popular Recipes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-medium">
            Try these crowd favorites loved by our community.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white rounded-3xl shadow-xl shadow-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              {/* image container */}
              <div className="relative h-64 overflow-hidden">
                {/* <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                /> */}

                <Image width={120} height={30} src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"></Image>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <FaStar className="text-orange-400 text-sm" />
                  <span className="font-bold text-gray-800 text-sm">{recipe.rating}</span>
                </div>
              </div>

              {/* content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {recipe.title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-500 font-semibold bg-gray-50 px-3 py-1.5 rounded-lg text-sm">
                    <FaClock className="text-orange-500" />
                    <span>{recipe.time}</span>
                  </div>

                  <span className="bg-orange-50 text-orange-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;