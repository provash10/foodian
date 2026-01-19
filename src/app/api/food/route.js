import { connect } from "@/app/lib/dbConnect";
// import { food } from "../route";
const foodCollection = connect("foods");  //for all

export async function GET(request) {

    // const foodCollection = connect("foods");
    const result = await foodCollection.find().toArray();

    // return Response.json({food})
    return Response.json(result);
}

export async function POST(request) {

    // const data= await request.json();
    const {message}= await request.json();
    if(!message || typeof message !=="string"){
        return Response.json({
            status:400,
            message: "Please Send a message"
        })
    }

    // const newFood ={message, id:food.length + 1};
    const newFood ={message, date: new Date().toISOString()};
    // food.push(newFood); no need

    const result = await foodCollection.insertOne(newFood);

    return Response.json(result)
    // return Response.json({
    //     // status:200,
    //     // data
    //     acknowledged: true,
    //     insertedId: newFood.id,
    // })
}