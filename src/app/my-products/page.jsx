

import React  from 'react'
import CartTable from '../components/cartTable'
import { headers } from 'next/headers';


        const fetcMyBooking = async () => {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/service`, {
          headers: new Headers(await headers())
        });
        const d = await res.json();
      
        return d
      }

export default async function MyBookingCart() {
  const data = await fetcMyBooking();

  
  return (
    <div className='py-6'>
      <CartTable data={data}></CartTable>
    </div>
  )
}
