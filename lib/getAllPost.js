import { cache } from "react"


export default async function getAllPost() {
    const result =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
      cache: 'no-store',
    }) 
  return await result.json()
}
