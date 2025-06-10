import { NextRequest } from "next/server";
import { connectToDb } from "../db";

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { email, hashpassword } = body;

  if (!email || !hashpassword) {
    return new Response(JSON.stringify({ message: "Missing email or hashed password" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { db } = await connectToDb();
  const result = await db
    .collection("users")
    .updateOne({ email: email }, { $set: { password: hashpassword } });

  if (result.modifiedCount === 1) {
    return new Response(JSON.stringify({ message: "Password updated" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Password not updated" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
