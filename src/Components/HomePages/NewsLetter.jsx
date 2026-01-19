import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const NewsLetter = () => {
    return (
        <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
 
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Updated with New Recipes
        </h2>
        <p className="text-gray-600 mb-8">
          Get weekly recipe recommendations and cooking tips delivered to your inbox
        </p>

        {/* Newsletter Input */}
        <div className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <FaEnvelope className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Subscribe
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            No spam, unsubscribe at any time
          </p>
        </div>
      </div>
    </section>
    );
};

export default NewsLetter;

