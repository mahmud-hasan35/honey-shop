// "use client"
// import { useSession, signOut } from "next-auth/react"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// export default function Dashboard() {
//   const { data: session, status } = useSession()
//   const router = useRouter()

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/login")
//     }
//   }, [status, router])

//   if (status === "loading") return <p>Loading...</p>
//   if (!session) return null

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl">Welcome, {session.user.name} 👋</h1>
//       <button
//         onClick={() => signOut({ callbackUrl: "/login" })}
//         className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </div>
//   )
// }
