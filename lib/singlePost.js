import React from 'react'

export default async function singlePost(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return await result.json()
}
