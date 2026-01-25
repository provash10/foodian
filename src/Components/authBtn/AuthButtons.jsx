"use client";
import Link from 'next/link';
import React from 'react';
import LoginButton from './LoginButton';
import { useSession, signOut } from "next-auth/react";

const AuthButtons = () => {
    const { status, data: session } = useSession();

    if (status === "authenticated") {
        return (
            <div className="flex items-center gap-4">
                <span className="text-white font-bold hidden sm:inline-block">{session?.user?.name}</span>
                <button
                    className='btn bg-red-600 hover:bg-red-700 text-white'
                    onClick={() => signOut({ callbackUrl: '/' })}
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <LoginButton />
            <Link href="/register" className="btn">
                Register
            </Link>
        </div>
    );
};

export default AuthButtons;
