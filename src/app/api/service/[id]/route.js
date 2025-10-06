
import { ObjectId } from "mongodb";

import { NextResponse } from "next/server";
import dbConnect, { collectionNameObj } from "../../../../../lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/authOptions";
import { revalidatePath } from "next/cache";

export const DELETE = async (req, {params}) => {

  const addProductCollection = dbConnect(collectionNameObj.addProductCollection)
  const p = await params;
  const query = {_id: new ObjectId(p.id)}

   // validation //
  const session = await getServerSession(authOptions)
  const currentBooking = await addProductCollection.findOne(query)

  const isOwnerOk = session?.user?.email == currentBooking?.userEmail;
  if(isOwnerOk) {
      // deleting user specific booking
      const deleteResponse = await addProductCollection.deleteOne(query)
      revalidatePath("/my-products")
      return NextResponse.json({success: true,deleteResponse})
  }
  else {
    return NextResponse.json({success: false, message: "forbidden Action"}, {status: 401})
  }
}



export const GET = async (req, {params}) => {

  const p = await params;
  const servicesCollection = await dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });
  return NextResponse.json(data)
}

