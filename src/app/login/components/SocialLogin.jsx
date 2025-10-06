"use client"

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGoogle } from "react-icons/fa";

export default function SocialLogin() {
  const router = useRouter();
  const session = useSession()
  const handleSocialLogin = async (providerName) => {
    console.log("Social Login", providerName);
    signIn(providerName)
  };

  useEffect(() => {
  if(session?.status == "authenticated") {
    router.push('/')
    toast.success("Succsessfully log in ")

  }
  }, [session.status])

  return (
    <div className="flex justify-center space-x-4 text-xl text-gray-700">
      <p
        onClick={() => handleSocialLogin("facebook")}
        className="cursor-pointer hover:text-blue-600"
      >
        <FaFacebookF />
      </p>
      <p
        onClick={() => handleSocialLogin("github")}
        className="cursor-pointer hover:text-gray-800"
      >
        <FaGithub />
      </p>
      <p
        onClick={() => handleSocialLogin("linkedin")}
        className="cursor-pointer hover:text-blue-500"
      >
        <FaLinkedinIn />
      </p>
      <p
        onClick={() => handleSocialLogin("google")}
        className="cursor-pointer hover:text-red-500"
      >
        <FaGoogle />
      </p>
    </div>
  );
}
