"use client"
import Image from "next/image";
export default function Product({productDetails}){
   const handleAddToCart = async (productId: string) => {
    console.log(productId);
    const cart = { userId: "1", productId: productId, Qty: 1 };
    const response = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      console.log("Product is not added to the Cart");
    } else {
      console.log("Product is  added to the Cart");
    }
  };
return(
     <div className="flex flex-col items-center p-6">
          <Image
            src={productDetails.ImageLink}
            alt={productDetails.Name}
            width={200}
            height={200}
            className="rounded"
          />
          <h1 className="text-2xl font-bold mt-4">{productDetails.Name}</h1>
          <p className="text-gray-600 mt-2 text-center">
            {productDetails.Description}
          </p>
          <p className="text-lg font-semibold text-blue-700 mt-2">
            ${productDetails.Price}
          </p>
          <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full mt-4 hover:from-blue-600 hover:to-purple-700 transition-colors"
        onClick={() => handleAddToCart(productDetails.Id)}
      >
        Add to Cart
      </button>
        </div>
)
}