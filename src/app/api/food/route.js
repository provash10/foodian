import { food } from "../route";

export async function GET(request) {
    return Response.json({food})
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

    const newFood ={message, id:food.length + 1};
    food.push(newFood);

    return Response.json({
        // status:200,
        // data
        acknowledged: true,
        insertedId: newFood.id,
    })
}