// import { connect } from "@/app/lib/dbConnect";
// // import { food } from "../route";
// const foodCollection = connect("foods");  //for all

// export async function GET(request) {

//     // const foodCollection = connect("foods");
//     const result = await foodCollection.find().toArray();

//     // return Response.json({food})
//     return Response.json(result);
// }

// export async function POST(request) {

//     // const data= await request.json();
//     const {message}= await request.json();
//     if(!message || typeof message !=="string"){
//         return Response.json({
//             status:400,
//             message: "Please Send a message"
//         })
//     }

//     // const newFood ={message, id:food.length + 1};
//     const newFood ={message, date: new Date().toISOString()};
//     // food.push(newFood); no need

//     const result = await foodCollection.insertOne(newFood);

//     return Response.json(result)
//     // return Response.json({
//     //     // status:200,
//     //     // data
//     //     acknowledged: true,
//     //     insertedId: newFood.id,
//     // })
// }


// ==========
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
