import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        if (!id || id.length !== 24) {
            return Response.json({ status: 400, message: "send correct_id" }, { status: 400 });
        }

        const foodCollection = connect("foods");
        const query = { _id: new ObjectId(id) };
        const result = await foodCollection.findOne(query);

        return Response.json(result);
    } catch (err) {
        console.error("API Error (GET ID):", err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = await params;
        if (!id || id.length !== 24) {
            return Response.json({ status: 400, message: "send correct_id" }, { status: 400 });
        }

        const foodCollection = connect("foods");
        const query = { _id: new ObjectId(id) };
        const result = await foodCollection.deleteOne(query);

        return Response.json(result);
    } catch (err) {
        console.error("API Error (DELETE):", err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function PATCH(request, { params }) {
    try {
        const { id } = await params;
        const { message } = await request.json();

        if (!id || id.length !== 24) {
            return Response.json({ status: 400, message: "send correct_id" }, { status: 400 });
        }

        if (!message || typeof message !== "string") {
            return Response.json({ status: 400, message: "Please Send a message" }, { status: 400 });
        }

        const foodCollection = connect("foods");
        const query = { _id: new ObjectId(id) };
        const newData = {
            $set: {
                message,
                updatedAt: new Date()
            }
        };

        const result = await foodCollection.updateOne(query, newData);
        return Response.json(result);
    } catch (err) {
        console.error("API Error (PATCH):", err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}
