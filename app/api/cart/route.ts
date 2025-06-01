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

export async function GET() {
  const { db } = await connectToDb();
  const cart = await db.collection("Cart").find({}).toArray();
  const productIds = cart.map((item) => item.productId);
  const cartProducts = await db
    .collection("Products")
    .find({ Id: { $in: productIds } })
    .toArray();
  if (cartProducts) {
    return new Response(JSON.stringify(cartProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
}
  else{
    return new Response(JSON.stringify({message:"Error in Loading data..."}), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
}
