import { connect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";

const foodCollection = connect("foods");

// GET all foods
export async function GET() {
  try {
    const foods = await foodCollection.find().toArray();
    return new Response(JSON.stringify(foods), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

// POST new food
export async function POST(request) {
  try {
    const data = await request.json();
    const { name, description, price, image } = data;

    // Validate data
    if (!name || !description || !price) {
      return new Response(JSON.stringify({ error: "Name, description and price required" }), { status: 400 });
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

    return new Response(JSON.stringify({ success: true, insertedId: result.insertedId }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
