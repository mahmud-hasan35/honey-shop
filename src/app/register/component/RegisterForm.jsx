"use client";
import { useState } from "react";
import RegisterUser from "@/app/actions/auth/RegisterUser";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SocialLogin from "@/app/login/components/SocialLogin";
import { signIn } from "next-auth/react"; // ✅ এটা যোগ করো

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSocialLogin, setIsSocialLogin] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSocialLogin(false);
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirm = formData.get("confirm");

  if (password !== confirm) {
  toast.error("Confirm Passwords do not match!");
  return;
}

try {
  const result = await RegisterUser({ name, email, password, redirect: false });

  if (result?.insertedId) {
    toast.success("✅ User registered successfully!");

    // 🔹 Register successful হলে সাথে সাথে login করানো হচ্ছে
    const loginRes = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!loginRes.error) {
      // ✅ Auto login successful হলে শুধু redirect হবে
      router.push("/");
    } else {
      toast.error("Auto login failed! Please login manually.");
      router.push("/login");
    }

    e.target.reset();
  } else {
    toast.error(result?.message || "Registration failed");
  }
} catch (error) {
  toast.error("Something went wrong!");
}

  };

  return (
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
      <p className="text-sm text-gray-500 mb-6">
        Join Honey Shop — it only takes a minute.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* name */}
        <div>
          <label className="block text-sm font-medium mb-1">Full name</label>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* email */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>

        {/* password + confirm */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="relative">
            <label className="block text-sm font-medium mb-1">Confirm Password</label>
            <input
              name="confirm"
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-white font-medium transition"
        >
          Register
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 mb-2">Or login with</p>
        <SocialLogin setIsSocialLogin={setIsSocialLogin}/>
      </div>

      <p className="text-sm text-gray-500 mt-6 text-center">
        Already have an account?{" "}
        <Link href="/login">
          <span className="text-yellow-500 hover:underline cursor-pointer">
            Login
          </span>
        </Link>
      </p>
    </div>
  );
}
