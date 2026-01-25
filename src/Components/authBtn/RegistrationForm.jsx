'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { postUser } from '@/actions/server/auth';
import toast from 'react-hot-toast';

const RegistrationForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        const loadingToast = toast.loading("Checking details...");

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            toast.error('Passwords do not match', { id: loadingToast });
            setLoading(false);
            return;
        }

        try {
            console.log('Sending data to server:', formData);
            const res = await postUser(formData);
            console.log('Server response:', res);

            if (res.success) {
                toast.success(res.message, { id: loadingToast });
                router.push('/api/auth/signin');
            } else {
                setError(res.message);
                toast.error(res.message, { id: loadingToast });
            }
        } catch (err) {
            console.error('Submit error:', err);
            setError('Registration failed. Please try again.');
            toast.error('Registration failed. Please try again.', { id: loadingToast });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <div className="mb-10">
                <h2 className="text-3xl font-black text-gray-900 mb-2">Create Your Account</h2>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-bold rounded-r-xl">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-0">
                <div className="mb-6">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 block mb-2">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white p-5 px-8 rounded-2xl outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300 shadow-sm"
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 block mb-2">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="hablu"
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white p-5 px-8 rounded-2xl outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300 shadow-sm"
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div>
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 block mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="••••"
                            className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white p-5 px-8 rounded-2xl outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300 shadow-sm"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1 block mb-2">Confirm</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            required
                            placeholder="••••••••"
                            className="w-full bg-gray-50 border-2 border-transparent focus:border-orange-500/20 focus:bg-white p-5 px-8 rounded-2xl outline-none transition-all font-bold text-gray-900 placeholder:text-gray-300 shadow-sm"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-600 text-white p-4 rounded-2xl font-black text-lg hover:bg-orange-700 active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl shadow-orange-600/20 disabled:opacity-70 disabled:cursor-not-allowed mb-4"
                >
                    {loading ? (
                        <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Register Now"
                    )}
                </button>
            </form>

            <p className="mt-8 text-center text-gray-500 font-bold text-sm">
                Already a member?{' '}
                <Link href="/api/auth/signin" className="text-orange-600 hover:text-orange-700 underline underline-offset-4 decoration-2 transition-colors">
                    Sign In
                </Link>
            </p>
        </div>
    );
};

export default RegistrationForm;
