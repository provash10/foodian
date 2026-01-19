import React from 'react';
import {
  FaUtensils,
  FaUsers,
  FaStar,
  FaGlobe,
} from "react-icons/fa";

const Stats = () => {
    const stats = [
    {
      icon: <FaUtensils />,
      number: "10000",
      label: "Recipes",
      description: "Curated collection",
    },
    {
      icon: <FaUsers />,
      number: "50000",
      label: "Users",
      description: "Active community",
    },
    {
      icon: <FaStar />,
      number: "4.8",
      label: "Average Rating",
      description: "User satisfaction",
    },
    {
      icon: <FaGlobe />,
      number: "25",
      label: "Countries",
      description: "Global reach",
    },
  ];

    return (
        <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Foodian Statistics
          </h2>
          <p className="text-blue-100">
            Join our growing community of food enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-500/20 rounded-xl p-6 hover:bg-blue-500/30 transition"
            >
              <div className="flex justify-center text-4xl mb-4">
                {stat.icon}
              </div>

              <div className="text-4xl font-bold mb-2">
                {stat.number}
              </div>

              <div className="text-xl font-semibold mb-1">
                {stat.label}
              </div>

              <div className="text-blue-100 text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    );
};

export default Stats;

