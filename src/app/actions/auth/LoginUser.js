import dbConnect, { collectionNameObj } from "../../../../lib/dbConnect";

import bcrypt  from "bcrypt"
export default async function LoginUser(payload) {
    const {email,password} = payload;

  const userCollection = dbConnect(collectionNameObj.userCellection);
  const user = await userCollection.findOne({email})


  if(!user) {
    return null

  }
  const isPasswordOk = bcrypt.compare(user.password, password)
  if (!isPasswordOk) return null
  return user
}
