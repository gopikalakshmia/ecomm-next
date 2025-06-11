import { NextRequest } from "next/server";
import { connectToDb } from "../db";

// export async function GET() {
//   const { db } = await connectToDb();
//   const CartFromDb = await db.collection("Cart").find({}).toArray();
//   const products = await db.collection("Products").find({}).toArray();
//   const productIds = CartFromDb.map((item) => item.productId.toString());
//   console.log(CartFromDb);
//   const CartProducts = products.filter((item) => productIds.includes(item.Id.toString()));
//   return new Response(JSON.stringify(CartProducts), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

// export async function GET() {
//   const { db } = await connectToDb();
//   const cart = await db.collection("Cart").find({}).toArray();
//   const productIds = cart.map((item) => item.productId);
//   const cartProducts = await db
//     .collection("Products")
//     .find({ Id: { $in: productIds } })
//     .toArray();

//   const cartProdWithQty = cartProducts.map((item) => ({
//     ...item,
//     Qty: cart.find((cart) => cart.productId == item.Id)?.Qty,
//   }));
//   console.log(cartProdWithQty);
//   if (cartProdWithQty) {
//     return new Response(JSON.stringify(cartProdWithQty), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } else {
//     return new Response(
//       JSON.stringify({ message: "Error in Loading data..." }),
//       {
//         status: 200,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
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


export async function PUT(req: NextRequest) {
  try{
     const body = await req.json();
  const { db } = await connectToDb();
  const result = await db
    .collection("Cart")
    .updateOne({ userId:body.userId,productId: body.productId }, { $inc: { Qty: body.Qty } });
  if (result.modifiedCount===1) {
    return new Response(
      JSON.stringify({ message: "Cart updated" }),
      { status: 200, headers: { "Content-Type": "applicationjson" } }
    );
  }
  else {
      return new Response(
        JSON.stringify({ message: "No matching product found in cart" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );}

  }
 catch(ex){
  console.error(ex);
  return new Response(
      JSON.stringify({ message: "Error updating cart" }),
      { status: 500, headers: { "Content-Type": "applicationjson" } }
    );
 }
}
