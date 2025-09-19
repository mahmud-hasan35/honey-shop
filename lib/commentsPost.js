import React from 'react'

export default async function commentsPost(id) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return await result.json()
}
