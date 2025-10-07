import { NextResponse } from "next/server";
import dbConnect, { collectionNameObj } from "../../../../lib/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/authOptions";

export  const GET = async (req) => {
    const session = await getServerSession(authOptions)
    if(session) {
        const email = session?.user?.email
        const addProductCollection = dbConnect(collectionNameObj.addProductCollection)
        console.log("📚 Connected to collection:", collectionNameObj.addProductCollection);
        const result = await addProductCollection.find({userEmail: email}).toArray()
        
        return NextResponse.json(result)
    }

    return NextResponse.json({})
}

export const POST = async (req) => {
  try {
    const body = await req.json();
    const addProductCollection = dbConnect(collectionNameObj.addProductCollection);

    const result = await addProductCollection.insertOne(body);

    if (result.acknowledged) {
      return NextResponse.json({
        success: true,
        message: "Product added to cart successfully!",
        insertedId: result.insertedId,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to insert product into database.",
      });
    }
  } catch (error) {
    console.error("🚨 POST Error:", error);
    return NextResponse.json({
      success: false,
      message: "Server error while adding product.",
    });
  }
};
