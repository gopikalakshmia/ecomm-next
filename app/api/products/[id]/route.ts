import { NextRequest } from "next/server";
import { connectToDb } from "../../db";


export async function GET(req: NextRequest, context) {
  const { params } = await context;
  const {id}=await params;
  const { db } = await connectToDb();
  const product = await db.collection("Products").findOne({ Id: id });
  if (!product) {
    return new Response(JSON.stringify({ message: "Product not found" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
