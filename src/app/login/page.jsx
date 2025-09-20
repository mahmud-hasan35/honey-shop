"use client";



import Image from "next/image";
import LoginForm from "./components/LoginForm";



export default function LoginPage() {



  return (
    <div className="flex min-h-screen">

      {/* Left side image */}
          <div className="md:w-1/2 hidden md:flex bg-yellow-50 p-6 items-center justify-center">
            <div className="w-full max-w-lg">
              <Image
                src="/login.jpg"
                alt="Honey Register"
                width={700}
                height={700}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>

      {/* Right side login form */}

      <LoginForm/>

    </div>
  );
}














// import { signIn } from "next-auth/react"
// import { useState } from "react"

// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const handleLogin = async (e) => {
//     e.preventDefault()
//     const result = await signIn("credentials", {
//       redirect: true,
//       email,
//       password,
//       callbackUrl: "/dashboard", // successful হলে redirect হবে
//     })
//     console.log(result)
//   }

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-6 rounded-lg shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border rounded mb-3"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border rounded mb-3"
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   )
// }
