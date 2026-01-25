import FoodCard from '@/Components/cards/FoodCard';
import React from 'react';
import { connect } from '@/app/lib/dbConnect';

export const dynamic = 'force-dynamic';

const getfood = async () => {
    try {
        const foodCollection = connect("foods");
        const foods = await foodCollection.find().toArray();

        // Serialize _id to string to avoid serialization warnings/errors in Next.js
        return foods.map(food => ({
            ...food,
            _id: food._id.toString()
        }));
    } catch (error) {
        console.error("Error fetching foods from DB:", error);
        return [];
    }
};

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

const Foods = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffcf9] text-center px-4">
                <h2 className="text-4xl font-black text-gray-900 mb-6">Access Restricted</h2>
                <p className="text-gray-500 mb-8 text-lg max-w-md mx-auto">Please login to view our exclusive culinary gallery and discover our premium menu.</p>
                <Link href="/api/auth/signin?callbackUrl=/foods" className="bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl hover:-translate-y-1">
                    Login to Continue
                </Link>
            </div>
        )
    }

    const foods = await getfood();

    return (
        <div className="min-h-screen bg-[#fffcf9] py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <span className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Culinary Gallery</span>
                    <h2 className='text-5xl md:text-6xl font-black text-gray-900 mb-6'>Discover Our Menu</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg">
                        Explore a curated selection of gourmet dishes, prepared by world-class chefs using the freshest organic ingredients.
                    </p>
                    <div className="mt-8 flex items-center justify-center gap-2">
                        <span className="h-[2px] w-12 bg-orange-600 rounded-full"></span>
                        <span className="text-gray-400 font-bold text-sm uppercase tracking-widest">{foods.length} Delicacies Available</span>
                        <span className="h-[2px] w-12 bg-orange-600 rounded-full"></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        foods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Foods;