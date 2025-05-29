import { NextRequest } from "next/server";
import { connectToDb } from "../db";
export async function GET() {
  const { db } = await connectToDb();
  const productList = await db.collection("Products").find({}).toArray();
  return new Response(JSON.stringify(productList), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function POST(req: NextRequest) {
  try {
    const cart = await req.json();
    const { db } = await connectToDb();
    const existingCart = await db
      .collection("Cart")
      .findOne({ userId: cart.userId, productId: cart.productId });
    if (existingCart) {//if the product alread exist,add the qty by 1
      const result = await db
        .collection("Cart")
        .updateOne(
          { userId: cart.userId, productId: cart.productId },
          { $inc: { Qty: cart.Qty } }
        );
      return new Response(
        JSON.stringify({
          message: "The product has been inserted",
          insertId: result.modifiedCount,
        }),
        { status: 201 }
      );
    }
    if (!existingCart) {//if the product is not added,insert the new product
      const result = await db.collection("Cart").insertOne(cart);
      return new Response(
        JSON.stringify({
          message: "The product has been inserted",
          insertId: result.insertedId,
        }),
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("Insert error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to insert product" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
