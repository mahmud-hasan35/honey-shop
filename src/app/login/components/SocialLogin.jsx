"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function SocialLogin({ setIsSocialLogin }) {
  const router = useRouter();
  const { status } = useSession();
  const isSocialLoginRef = useRef(false); // শুধু সোশ্যাল লগিন ট্র্যাক করবে

  const handleSocialLogin = async (providerName) => {
    isSocialLoginRef.current = true; // সোশ্যাল লগিন শুরু হচ্ছে
    setIsSocialLogin && setIsSocialLogin(true);
    toast.loading(`Signing in with ${providerName}...`);
    await signIn(providerName);
  };

  useEffect(() => {
    // ✅ কেবল তখনই টোস্ট দেখাবে, যখন সোশ্যাল লগিন থেকে এসেছে
    if (status === "authenticated" && isSocialLoginRef.current) {
      toast.dismiss();
      toast.success("✅ Successfully logged in via social account!");
      isSocialLoginRef.current = false; // reset
      setTimeout(() => router.push("/"), 500);
    }
  }, [status, router]);

  return (
    <div className="flex justify-center space-x-4 text-xl text-gray-700">
      <button
        onClick={() => handleSocialLogin("facebook")}
        className="cursor-pointer hover:text-blue-600"
      >
        <FaFacebookF />
      </button>
      <button
        onClick={() => handleSocialLogin("github")}
        className="cursor-pointer hover:text-gray-800"
      >
        <FaGithub />
      </button>
      <button
        onClick={() => handleSocialLogin("linkedin")}
        className="cursor-pointer hover:text-blue-500"
      >
        <FaLinkedinIn />
      </button>
      <button
        onClick={() => handleSocialLogin("google")}
        className="cursor-pointer hover:text-red-500"
      >
        <FaGoogle />
      </button>
    </div>
  );
}
