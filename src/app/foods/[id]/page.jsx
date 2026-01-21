// import React from "react";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// export const metadata = {
//   title: "Food Details",
// };

// const getFoodById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/food/${id}`, {
//       cache: "no-store",
//     });
//     if (!res.ok) return null;
//     return res.json();
//   } catch (err) {
//     console.error("Fetch food failed:", err);
//     return null;
//   }
// };

// const FoodDetails = async ({ params }) => {
//   const { id } = await params;
//   const food = await getFoodById(id);

//   if (!food) {
//     notFound();
//   }

//   return (

//  <div className="max-w-6xl mx-auto p-6">
//   <div className="flex flex-col md:flex-row justify-between items-start gap-8">
//     {/* Image left side */}
//     <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//       <Image
//         src="/placeholder.png"
//         width={300}
//         height={200}
//         alt="Chicken Tikka Masala"
//         className="w-full max-w-[300px] h-auto object-cover rounded-lg"
//         priority
//       />
//     </div>

//     {/* Info right side */}
//     <div className="w-full md:w-1/2 flex flex-col justify-start">
//       <h1 className="text-3xl font-bold mb-4">Chicken Tikka Masala</h1>
//       <p className="text-gray-600 mb-4">
//         Classic Italian pasta with creamy sauce, pancetta, and parmesan.
//       </p>
//       <p className="text-2xl font-semibold mb-6">$12.99</p>
//       <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition w-fit">
//         Add to Cart
//       </button>
//     </div>
//   </div>
// </div>


//   );
// };

// export default FoodDetails;

import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Food Details",
};

const getFoodById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/food/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  const food = await getFoodById(id);

  if (!food) notFound();

  //  safe image src
  const imageSrc =
    typeof food.image === "string" && food.image.trim() !== ""
      ? food.image
      : "/placeholder.png";

  //  safe alt text
  const altText =
    typeof food.name === "string" && food.name.trim() !== ""
      ? food.name
      : "Food image";
          console.log("single food", food);
      // const {_id, name, description,price, image} = food;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* IMAGE */}
        <div className="relative h-[320px] md:h-full">
          {/* <Image
  src={imageSrc}
  width={500}
  height={400}
  alt={altText}
  className="object-cover"
  priority
/> */}
{/* <Image
                        src={imageSrc || "https://i.ibb.co.com/Gfshn31s/1-Chicken-Tikka-Masala.jpg" }
                        alt="Category Banner"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        loading="lazy"
                        // priority={item.id <= 2}
                      /> */}

          <img src={imageSrc || "https://i.ibb.co.com/Gfshn31s/1-Chicken-Tikka-Masala.jpg"} alt="" />
        </div>

        {/* CONTENT */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {food.name || "Unnamed Food"}
            </h1>

            <p className="text-gray-600 mb-6">
              {food.description || "No description available."}
            </p>

            <p className="text-3xl font-bold text-orange-600">
              $
              {typeof food.price === "number"
                ? food.price.toFixed(2)
                : "0.00"}
            </p>
          </div>

          <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl text-lg font-semibold transition">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
};

export default FoodDetails;
