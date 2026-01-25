import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

// get all foods
export async function GET() {
  try {
    const foodCollection = connect("foods");
    const foods = await foodCollection.find().toArray();
    return Response.json(foods);
  } catch (err) {
    console.error("API Error (GET):", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}

// Post new food
export async function POST(request) {
  try {
    const foodCollection = connect("foods");
    const data = await request.json();
    const { name, description, price, image } = data;

    // Validate data
    if (!name || !description || !price) {
      return Response.json({ error: "Name, description and price required" }, { status: 400 });
    }

    const newFood = {
      name,
      description,
      price: parseFloat(price),
      image: image || "/placeholder.png",
      createdAt: new Date(),
    };

    const result = await foodCollection.insertOne(newFood);
    revalidatePath("/food");

    return Response.json({ success: true, insertedId: result.insertedId }, { status: 201 });
  } catch (err) {
    console.error("API Error (POST):", err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
