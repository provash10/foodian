import React from 'react';
import { FaStar } from 'react-icons/fa';

export const Testimonials = () => {
    const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Cook",
      content:
        "Dish Hub has transformed my cooking! The recipes are easy to follow and always turn out delicious.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Food Blogger",
      content:
        "Amazing community of food lovers. I've discovered so many new recipes and made great friends here.",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Busy Mom",
      content:
        "Perfect for quick weeknight dinners. The step-by-step instructions make cooking stress-free.",
      rating: 5,
    },
  ];
    return (
        <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-600">
            Join thousands of happy cooks sharing their success stories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              {/* rating */}
              <div className="flex mb-4 justify-center sm:justify-start">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar
                    key={i}
                    className="text-yellow-400 mr-1"
                  />
                ))}
              </div>

              {/* content */}
              <p className="text-gray-700 mb-4 italic text-sm leading-relaxed">
                {testimonial.content}
              </p>

              {/* user info */}
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    );
};

