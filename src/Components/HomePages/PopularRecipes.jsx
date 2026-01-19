import React from 'react';
import { FaClock, FaStar } from 'react-icons/fa';

const PopularRecipes = () => {
    const recipes = [
    {
      id: 1,
      title: "Creamy Pasta Carbonara",
      image: "/api/placeholder/300/200",
      rating: 4.8,
      time: "25 min",
      difficulty: "Easy",
    },
    {
      id: 2,
      title: "Grilled Chicken Salad",
      image: "/api/placeholder/300/200",
      rating: 4.6,
      time: "30 min",
      difficulty: "Medium",
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      image: "/api/placeholder/300/200",
      rating: 4.9,
      time: "45 min",
      difficulty: "Easy",
    },
  ];
    return (
        <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Recipes
          </h2>
          <p className="text-gray-600">
            Try these crowd favorites loved by our community
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* image */}
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Recipe Image
                </span>
              </div>

              {/* content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {recipe.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span>{recipe.rating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaClock />
                    <span>{recipe.time}</span>
                  </div>

                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
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