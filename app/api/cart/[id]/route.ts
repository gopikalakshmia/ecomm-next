import { NextRequest } from "next/server";
import { connectToDb } from "../../db";

export async function GET(
  req: NextRequest,
   context 
) {
  const { id } = await context.params;

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { db } = await connectToDb();

    const cartItems = await db
      .collection("Cart")
      .find({ userId: id })
      .toArray();

    if (!cartItems.length) {
      return new Response(
        JSON.stringify({ message: "Cart is empty or not found" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const productIds = cartItems.map((item) => item.productId);

    const products = await db
      .collection("Products")
      .find({ Id: { $in: productIds } })
      .toArray();

    const cartWithQty = products.map((product) => {
      const cartItem = cartItems.find(
        (item) => item.productId === product.Id
      );
      return {
        ...product,
        Qty: cartItem?.Qty || 1,
      };
    });

    return new Response(JSON.stringify(cartWithQty), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
