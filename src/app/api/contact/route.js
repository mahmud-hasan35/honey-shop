// 📁 /src/app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // তোমার Gmail
        pass: process.env.EMAIL_PASS, // App password (না দিলে কাজ করবে না)
      },
    });

    await transporter.sendMail({
      from: email,
      to: "mahmudhasanh35@gmail.com", // যে ইমেইলে পাবে
      subject: `New Message from ${name}`,
      text: message,
      html: `
        <h2>New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
