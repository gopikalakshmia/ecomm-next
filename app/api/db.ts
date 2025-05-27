
import  { MongoClient, ServerApiVersion,Db } from 'mongodb';
const uri = "mongodb+srv://gopikalakshmia:Password@cluster0.5g4u3zt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let cachedClient:MongoClient|null=null;
let cachedDb:Db|null=null;


 export async function connectToDb(){

  if(cachedClient && cachedDb){
    return {client:cachedClient,db:cachedDb}
  }
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


    await client.connect();
    cachedClient=client;
    cachedDb=client.db('EcommNext')
  return {client:client,db:client.db('EcommNext')}
   
}

