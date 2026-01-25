'use server';

import { connect } from "@/app/lib/dbConnect";
import bcrypt from 'bcryptjs';

// export const postUser = async (formData) => {
//     try {
//         const userCollection = connect("users");

//         // Check if user already exists
//         const existingUser = await userCollection.findOne({ email: formData.email });
//         if (existingUser) {
//             return { success: false, message: "User already exists" };
//         }

//         // Remove confirmPassword before saving
//         const { confirmPassword, ...userData } = formData;

//         const result = await userCollection.insertOne(userData);
//         return { success: true, message: "User registered successfully", id: result.insertedId };
//     } catch (error) {
//         console.error("Error in postUser:", error);
//         return { success: false, message: "Internal server error" };
//     }
// };

export const postUser = async (payload) => {
    console.log(payload);

    //check user exit
    //check user exit
    const isExist = await connect("users").findOne({ email: payload.email });
    if (isExist) {
        return { success: false, message: "User already exists" };
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    //create new user
    const newUser = {
        ...payload,
        createdAt: new Date().toISOString(),
        role: "user",
        password: hashedPassword,
    };
    // console.log(newUser);

    // send user to db 
    // send user to db 
    const result = await connect("users").insertOne(newUser);
    if (result.acknowledged) {
        return {
            success: true,
            message: `user created with ${result.insertedId.toString()}`,
        }
    }

}