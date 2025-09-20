"use client";

import {
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import Link from "next/link";
import toast from "react-hot-toast";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // validation আগে করা উচিত
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Authentication Failed ❌");
      } else {
        toast.success("User login successful ✅");
        router.push('/')
        
      }
    } catch (error) {
      toast.error("Something went wrong!");
      
    }
  };

  return (
    <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-2 text-center">Login</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white font-medium transition"
          >
            Login
          </button>
        </form>

        {/* Social login section */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Or sign in with</p>
          <div className="flex justify-center space-x-4 text-xl text-gray-700">
            <p className="cursor-pointer hover:text-blue-600">
              <FaFacebookF />
            </p>
            <p className="cursor-pointer hover:text-gray-800">
              <FaGithub />
            </p>
            <p className="cursor-pointer hover:text-blue-500">
              <FaLinkedinIn />
            </p>
            <p className="cursor-pointer hover:text-red-500">
              <FaGoogle />
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Don’t have an account?{" "}
          <Link href="/register">
            <span className="text-yellow-500 hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
