import React from 'react';
import Hero from './shared/Hero';
// import UserInfo from './shared/UserInfo';
// import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
import ProductsPage from './products/page';
import ContactPage from './contact/page';
import AboutPage from './about/page';

const  page =  () => {

  // const session = await getServerSession(authOptions)
  return (
    <div className='bg-emerald-50'>
      <Hero/>
    {/* <p className='font-bold text-3xl'>This is user Info section</p>
      <UserInfo/>
      {JSON.stringify(session)} */}
      <ProductsPage/>

      <AboutPage/>

      <ContactPage/>

    </div>
  );
};

export default page;