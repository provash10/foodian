// import { food } from "../../route";  no need

import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

const foodCollection = connect("foods");

export async function GET(request, {params}) {
   const {id} = await params;

   if(id.length!=24){
    return Response.json({
        status:400,
        message:"send correct_id"
    })
   }

   const query={_id:new ObjectId(id)}
   const result=await foodCollection.findOne(query);

//    const singleFood = food.find(fd=> fd.id==id) || {}; no need

//    return Response.json({id})
//    return Response.json({singleFood})
   return Response.json(result);
}

export async function DELETE(request, {params}) {
   const {id} = await params;

   if(id.length!=24){
    return Response.json({
        status:400,
        message:"send correct_id"
    })
   }

   const query={_id:new ObjectId(id)}
   const result=await foodCollection.deleteOne(query);

   return Response.json(result);
}