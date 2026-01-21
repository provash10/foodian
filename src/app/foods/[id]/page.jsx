import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Food Details",
};

// Force dynamic rendering to prevent build-time fetch errors
export const dynamic = 'force-dynamic';

const getFoodById = async (id) => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/food/${id}`, {
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
          <Image
            src={imageSrc}
            alt={altText}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            unoptimized
          />
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
