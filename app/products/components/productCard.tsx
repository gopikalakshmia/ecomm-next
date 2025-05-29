'use client'
import Image from "next/image";
import Link from "next/link";
import { Product } from '../page';

export default function ProductCard({ productItem }: { productItem: Product }){

  const handleAddToCart = (productId: string) => {
    console.log(productId);
  };


return(
<div key={productItem.Id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
          <Link
            href={`/products/${productItem.Id}`}
          >
              <div className="text-center cursor-pointer">
            <Image
              src={productItem.ImageLink}
              alt="Product Image"
              width={100}
              height={100}
            />
            <p>{productItem.Description}</p>
            <h1>${productItem.Price}</h1>
            </div>
          </Link>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded m-5 hover:bg-blue-700"
            onClick={() => handleAddToCart(productItem.Id)}
          >
            Add to Cart
          </button>
        </div>
)
}