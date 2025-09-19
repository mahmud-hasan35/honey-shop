import Link from 'next/link'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <nav>
          <Link href={"/about/details"}>About Details</Link>
           || More More About</nav>
      {children}
    </div>
  )
}
