
import FoodCard from '@/Components/cards/FoodCard';
import React from 'react';

import { connect } from '@/app/lib/dbConnect';

// Force dynamic rendering to ensure fresh data in production
export const dynamic = 'force-dynamic';

const getfood = async () => {
    try {
        const foods = await connect("foods").find().toArray();
        // Map the result to ensure _id is a string if needed, or serialize it.
        // Actually, FoodCard just needs decimals/strings.
        return JSON.parse(JSON.stringify(foods));
    } catch (error) {
        console.error("Error fetching foods from DB:", error);
        return [];
    }
};


const Foods = async () => {
    const foods = await getfood();
    console.log(foods);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Total Foods : {foods.length}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    foods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Foods;