import { food } from "../../route";

export async function GET(request, {params}) {
   const {id} = await params;

   const singleFood = food.find(fd=> fd.id==id) || {};

//    return Response.json({id})
   return Response.json({singleFood})
}