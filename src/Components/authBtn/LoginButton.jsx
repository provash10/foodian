"use client";
import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react"

const LoginButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="flex items-center gap-4">
                <span className="text-white font-bold hidden sm:inline-block">{session.user?.name}</span>
                <button
                    className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition font-medium cursor-pointer'
                    onClick={() => signOut()}
                >
                    Logout
                </button>
            </div>
        )
    }

    return (
        <button
            className='px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition font-medium cursor-pointer'
            onClick={() => signIn(undefined, { callbackUrl: '/foods' })}
        >
            Sign In
        </button>
    )
};

export default LoginButton;