import { NextRequest } from "next/server";
import { connectToDb } from "../../db";

type Params = {
  id: string;
};

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { db } = await connectToDb();
  const product = await db.collection("Products").findOne({ Id: params.id });
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
