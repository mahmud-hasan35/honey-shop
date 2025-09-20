"use server";

import dbConnect, { collectionNameObj } from "../../../../lib/dbConnect";
import bcrypt from "bcrypt";

export default async function RegisterUser(payload) {
  const userCollection = dbConnect(collectionNameObj.userCellection);

  // validation
  const { email, password } = payload;
  if (!email || !password) {
    return { success: false, message: "Email and password required" };
  }

  // check if user exists
  const user = await userCollection.findOne({ email });

  // insert new user
  if(!user) {

    const hashedPassword = await bcrypt.hash(password,10)
     payload.password = hashedPassword
      const result = await userCollection.insertOne(payload);
      const { acknowledged,insertedId } = result;
      return { acknowledged,insertedId: insertedId.toString(), };
  }

  return {success: false}

}
