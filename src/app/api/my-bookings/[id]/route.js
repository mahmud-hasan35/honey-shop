import React from "react";
import dbConnect, { collectionNameObj } from "../../../../../lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/authOptions";

export const GET = async (req, { params }) => {
  const p = await params;

  const addProductCollection = dbConnect(
    collectionNameObj.addProductCollection
  );
  const query = { _id: new ObjectId(p.id) };

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;

  const singleBooking = await addProductCollection.findOne(query);

  const isOwnerOk = email === singleBooking?.userEmail;
  if (isOwnerOk) {
    return NextResponse.json(singleBooking);
  } else {
    return NextResponse.json(
      { message: "Forbidden GET acion" },
      {
        status: 403,
      }
    );
  }
};

export const PATCH = async (req, { params }) => {
  const p = await params;
  const addProductCollection = dbConnect(
    collectionNameObj.addProductCollection
  );
  const query = { _id: new ObjectId(p.id) };

  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  const currentBookingData = await addProductCollection.findOne(query);
  const isOwnerOk = email === currentBookingData?.userEmail;

  if (isOwnerOk) {
    const body = await req.json();

    const filter = {
      $set: { ...body },
    };

    const option = {
      upsert: true,
    };

    const updateResponse = await addProductCollection.updateOne(
      query,
      filter,
      option
    );
    revalidatePath("/my-bookings");

    return NextResponse.json(updateResponse);
  } else {
    return NextResponse.json(
      { message: "Forbidden Update acion" },
      {
        status: 403,
      }
    );
  }
};
