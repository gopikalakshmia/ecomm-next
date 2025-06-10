"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../page";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function ProductCard({ productItem }: { productItem: Product }) {
  const [cartQty, setCartQty] = useState(productItem.Qty ? productItem.Qty : 0);
  const { data: session } = useSession();
  const handleAddToCart = async (productId: string) => {
    const cart = { userId: session?.user.id, productId: productId, Qty: 1 };
    const response = await fetch("http://localhost:3000/api/cart", {
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

  const handleQty = async (productId: string, Qty: number) => {
    const cart = { userId: session?.user.id, productId: productId, Qty: Qty };
    const response = await fetch("http://localhost:3000/api/cart", {
      method: "PUT",
      body: JSON.stringify(cart),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Cart is updated");
      setCartQty((prevValue) => prevValue + Qty);
    } else {
      console.log("Cart is not updated");
    }
  };

  return (
    <div
      key={productItem.Id}
      className="bg-[#F8F4E1] shadow-sm rounded-xl p-1 flex flex-col items-center transition duration-300 hover:shadow-sm hover:scale-105"
    >
      <div className="flex flex-column">
        <div>
          <Link
            href={`/products/${productItem.Id}`}
            className="text-center cursor-pointer"
          >
            <Image
              src={productItem.ImageLink}
              alt="Product Image"
              width={100}
              height={100}
              className="rounded m-3"
            />
          </Link>
        </div>
        <div>
          <p className="mt-2 text-[#74512D] font-extrabold">
            {productItem.Name}
          </p>
          <h1 className="text-lg text-[#74512D] font-bold">
            ${productItem.Price}
          </h1>
          {productItem.Qty ? (
            <div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 m-2 py-2 rounded-full mt-4 hover:from-blue-600 hover:to-purple-700 transition-colors"
                onClick={() => handleQty(productItem.Id, 1)}
              >
                +
              </button>
              {cartQty}
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 m-2 rounded-full mt-4 hover:from-blue-600 hover:to-purple-700 transition-colors"
                onClick={() => handleQty(productItem.Id, -1)}
              >
                -
              </button>
            </div>
          ) : (
            <button
               className="text-[#BF9264] border border-[#BF9264] px-4 py-2 rounded-full mt-4 transition duration-300 hover:bg-[#BF9264] hover:text-white cursor-pointer"
              onClick={() => handleAddToCart(productItem.Id)}
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
