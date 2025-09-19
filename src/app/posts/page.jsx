import React from 'react'
import Link from 'next/link'
import getAllPost from '../../../lib/getAllPost'


export default async function AllPosts() {

const posts = await getAllPost()
    
  return (
    <div>
      <h1 className='text-2xl text-red-500 font-bold'>All Post </h1>
      {
        posts.map(post => <ul className='mt-5' key={post.id}>
          <Link href={`/posts/${post.id}`}>
          <li>{post.title}</li>
          </Link>
        </ul>)

      
      }
    </div>
  )
}
