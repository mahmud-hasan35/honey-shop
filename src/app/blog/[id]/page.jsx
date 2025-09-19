import React from 'react'

export default async function BlogPageDetails({params}) {
  const {id} = await params
  return (
    <div>
      <h1>this is id number: {id}</h1>
    </div>
  )
}
