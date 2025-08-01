
import { notFound } from "next/navigation";
import Product from "./components/product";

// type ProductPageProps = {
//   params: {
//     id: string;
//   };
// };


export default async function ProductPage({ params }) {
  const { id } = await params;
  const response = await fetch(
    `https://whispperingpagesecomm.vercel.app/api/products/${id}`
  );
  if (!response.ok) {
    return notFound();
  }
  const selectedProduct = await response.json();
  if (!selectedProduct) {
    return notFound(); // this works only in a server component
  }

  return (
   <Product productDetails={selectedProduct}/>
  );
}
