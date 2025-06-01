"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../page";

export default function ProductCard({ productItem }: { productItem: Product }) {
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

  return (
    <div
      key={productItem.Id}
      className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center transition duration-300 hover:shadow-2xl hover:scale-105"
    >
      <Link
        href={`/products/${productItem.Id}`}
        className="text-center cursor-pointer"
      >
        <div>
          <Image
            src={productItem.ImageLink}
            alt="Product Image"
            width={150}
            height={150}
            className="rounded"
          />
          <p className="mt-2 text-gray-700 font-medium">
            {productItem.Description}
          </p>
          <h1 className="text-lg text-blue-600 font-bold">
            ${productItem.Price}
          </h1>
        </div>
      </Link>
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full mt-4 hover:from-blue-600 hover:to-purple-700 transition-colors"
        onClick={() => handleAddToCart(productItem.Id)}
      >
        Add to Cart
      </button>
    </div>
  );
}
