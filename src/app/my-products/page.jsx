

import React  from 'react'
import CartTable from '../components/cartTable'
import { headers } from 'next/headers';


        const fetcMyBooking = async () => {
        const res = await fetch("http://localhost:3000/api/service", {
          headers: await headers()
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
