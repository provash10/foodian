
import FoodCard from '@/Components/cards/FoodCard';
import React from 'react';

const getfood = async()=>{
    const res= await fetch("http://localhost:3000/api/food",{
        cache: "force-cache",
        next:{revalidate: 60}
    });
    return await res.json();
};


const Foods = async() => {
    const foods = await getfood();
    console.log(foods);

    return (
        <div>
            <h2 className='text-2xl font-bold'>Total Foods : {foods.length}</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    foods.map((food)=> <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default Foods;