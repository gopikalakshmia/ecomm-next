import { NextRequest } from "next/server";
import { connectToDb } from "../../db";

type userParams = {
  id: string;
};

export async function GET(req: NextRequest, { params }: { params: userParams }) {
  const { db } = await connectToDb();
  const userId = params.id;

  // Fetch all cart items for the user
  const cartItems = await db.collection("Cart").find({ userId }).toArray();

  if (!cartItems || cartItems.length === 0) {
    return new Response(JSON.stringify({ message: "Cart not found or empty" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const productIds = cartItems.map((item) => item.productId);

  const products = await db
    .collection("Products")
    .find({ Id: { $in: productIds } })
    .toArray();

  // Combine product info with quantity from cart
  const cartProdWithQty = products.map((product) => {
    const cartItem = cartItems.find((item) => item.productId === product.Id);
    return {
      ...product,
      Qty: cartItem?.Qty || 1,
    };
  });

  return new Response(JSON.stringify(cartProdWithQty), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
