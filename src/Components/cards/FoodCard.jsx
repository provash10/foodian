import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      {/* Food Image */}
      <Image
        width={300}
        height={200}
        src={food.image || '/placeholder.png'}
        alt={food.name}
        className="w-full h-48 object-cover"
      />

      {/* Food Details */}
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
          <p className="text-gray-600 mb-2 line-clamp-3">{food.description}</p>
          <p className="text-gray-800 font-bold">Price: ${food.price}</p>
        </div>

        {/* View Details Button */}
        {/* <Link
          href={`/foods/${food._id}`} 
          className="mt-4 block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link> */}
        <Link href={`/foods/${food._id.toString()}`} 
      className="mt-4 block text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
  View Details
</Link>

      </div>
    </div>
  );
};

export default FoodCard;

