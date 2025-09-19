import Link from 'next/link'
import React from 'react'
import Button from './Button'
import Image from 'next/image'


const blogs = [
  {
    id: 1,
    title: 'title page 1'
  },
  {
    id: 2,
    title: 'title page 2'
  },
  {
    id: 3,
    title: 'title page 3'
  },
  {
    id: 4,
    title: 'title page 4'
  },
  {
    id: 5,
    title: 'title page 5'
  },
]

export default function BlogPage() {
  return (
    <div>
      {
   
          blogs.map(blog => <div key={blog.id}>
            <h2 className='font-bold'>{blog.title.toUpperCase()}</h2>
            <Link href={`blog/${blog.id}`}>
            <Button/>
            </Link>

          </div> )
        
      }

    </div>
  )
}
