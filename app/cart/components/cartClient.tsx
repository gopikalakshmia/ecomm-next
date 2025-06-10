'use client';

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { Product } from "../../productList";
import ProductCard from "@/app/products/components/productCard";
// Make sure this import path is correct

export default function CartClient() {
  const { data: session, status } = useSession();
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("userid:"+session?.user?.id);
    if (!session?.user?.id) return;

  setLoading(true);


 fetch(`/api/cart/${session.user.id}`, { cache: "no-store" })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch cart");
      return res.json();
    })
    .then((data) => setCartProducts(data))
    .catch((err) => console.error(err))
    .finally(() => setLoading(false));
}, [session]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen text-blue-600 text-xl">
        Loading user session...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 text-xl">
        Please log in to see your cart.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F4E1] px-4 py-8 md:px-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#BF9264]">
        🛒 Your Cart
      </h1>

      {loading && (
        <p className="text-center text-gray-600 mb-4">Loading cart...</p>
      )}

      {cartProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cartProducts.map((item) => (
            <ProductCard key={item._id} productItem={item} />
          ))}
        </div>
      ) : (
        !loading && (
          <div className="text-center text-gray-500 text-lg mt-12">
            Your cart is empty 🛍️
          </div>
        )
      )}
    </div>
  );
}
