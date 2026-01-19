import { food } from "../route";

export async function GET(request) {
    return Response.json({food})
}

export async function POST(request) {
    return Response.json({
        status:200,
    })
}