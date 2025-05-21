

import { connectToDb } from '../db';
export async function GET(){
  const {db}=await connectToDb();
  const productList=await db.collection('Products').find({}).toArray();
  return new Response(JSON.stringify(productList),
  {status:200,
    headers:{
        "Content-Type":"application/json"
    }
  })

}