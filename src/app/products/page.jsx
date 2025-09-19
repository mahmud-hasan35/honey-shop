import React from 'react'
// import { products } from '../../../lib/products'
import ServicesSection from '../components/servicesSection';

export default function ProductsPage() {
  return (


    <div>
       <ServicesSection/>
    </div>




    // <section className="px-6 py-10">
    //   <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>

    //   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //     {products.map((item) => (
    //       <div
    //         key={item.id}
    //         className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
    //       >
    //         <img
    //           src={item.image}
    //           alt={item.name}
    //           className="w-full h-48 object-cover rounded-md"
    //         />
    //         <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
    //         <p className="text-gray-600 text-sm mt-2">{item.description}</p>
    //         <p className="text-green-600 font-bold mt-2">৳ {item.price}</p>
    //         <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
    //           Buy Now
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}