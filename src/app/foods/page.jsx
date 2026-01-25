import FoodCard from '@/Components/cards/FoodCard';
import React from 'react';
import { connect } from '@/app/lib/dbConnect';

export const dynamic = 'force-dynamic';

const getfood = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/food`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch foods: ${res.status}`);
        }

        const text = await res.text();
        try {
            return JSON.parse(text);
        } catch (e) {
            console.error("Received non-JSON response from API:", text.substring(0, 100));
            return [];
        }
    } catch (error) {
        console.error("Error fetching foods from API:", error);
        return [];
    }
};

const Foods = async () => {
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