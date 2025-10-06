import React from "react";
import dbConnect, { collectionNameObj } from "../../../lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; 

export default async function ServicesSection() {
  const serviceCollection = await dbConnect(collectionNameObj.servicesCollection);
  const data = await serviceCollection.find({}).toArray();
 

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className=" text-3xl lg:text-5xl pt-10 text-emerald-600 font-bold text-center mb-10">
        Our Product
      </h1>

      <div className="grid grid-cols-12 gap-6">
        {data.map((item) => {
          const imgSrc =
            typeof item.img === "string" && item.img.startsWith("http")
              ? item.img
              : "/default.png";

          return (
            <div
              key={item._id.toString()}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <div className=" rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl hover:-translate-y-1 duration-300">
                <figure className="relative w-full h-52">
                  <Image
                  
                    className="object-cover"
                    src={imgSrc}
                    alt={item.name || "service"}
                    
                    fill
                    
                  />
                </figure>

                <div className="p-5 flex flex-col justify-between h-full">
                  <div>
                    <h2 className="font-semibold text-xl text-gray-800 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-lg font-bold text-emerald-500">
                      Price: Tk: {item.price}
                    </p>
                  </div>

                  <div className="mt-4">
                    <Link
                      href={`/services/${item._id}`}
                      className="text-emerald-500 flex items-center gap-2 group font-medium"
                    >
                      <span>See More</span>
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
