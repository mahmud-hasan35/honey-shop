import React from 'react';
import Hero from './shared/Hero';
// import UserInfo from './shared/UserInfo';
// import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
import ProductsPage from './products/page';

const  page =  () => {

  // const session = await getServerSession(authOptions)
  return (
    <div>
      <Hero/>
    {/* <p className='font-bold text-3xl'>This is user Info section</p>
      <UserInfo/>
      {JSON.stringify(session)} */}
      <ProductsPage/>
    </div>
  );
};

export default page;