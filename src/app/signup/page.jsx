"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignUp() {
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const user = Object.fromEntries(formdata.entries());
    console.log(user);
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.imageurl
    });
    
    if (data) {
        redirect("/");
    }
    if (error) {
        toast.warning(error.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto my-30">
      <div className="text-center mb-8 space-y-3">
        <h1 className="font-bold text-5xl">Create Account</h1>
        <p className="text-gray-600">Start your adventure with Wanderlust</p>
      </div>

      <form
        className="flex flex-col gap-6 p-8 shadow-sm border border-gray-100 rounded-2xl bg-white"
        onSubmit={handelSubmit}
      >
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <input 
            required 
            name="name" 
            type="text" 
            placeholder="John Doe" 
            className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-sky-500" 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            required
            name="email"
            type="email"
            placeholder="john@example.com"
            pattern="^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
            title="Please enter a valid email address"
            className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Password</label>
          <input
            required
            minLength={8}
            name="password"
            type="password"
            placeholder="Enter your password"
            pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
            title="Password must be at least 8 characters with 1 uppercase and 1 number"
            className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Must be at least 8 characters with 1 uppercase and 1 number
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">Image URL</label>
          <input 
            name="imageurl" 
            type="text" 
            placeholder="https://example.com/image.jpg" 
            className="w-full rounded-xl border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-sky-500" 
          />
        </div>

        <button 
          type="submit" 
          className="font-bold bg-sky-500 text-white rounded-xl py-4 mt-2 hover:bg-sky-600 transition-colors"
        >
          Sign Up
        </button>

        <div className="flex items-center gap-4 my-2">
          <hr className="flex-1 border-gray-200" />
          <span className="text-sm text-gray-400">or</span>
          <hr className="flex-1 border-gray-200" />
        </div>

        <button
          type="button"
          className="font-bold bg-white border border-gray-200 flex justify-center items-center gap-3 text-gray-700 rounded-xl py-4 hover:bg-gray-50 transition-colors"
        >
          <FaGoogle className="text-xl" />
          Sign Up With Google
        </button>

        <p className="flex justify-center items-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href={"/login"} className="text-sky-600 font-bold ml-1 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
