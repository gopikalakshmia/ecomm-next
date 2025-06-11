import HeroSection from "./components/header";
import ProductCard from "./components/productCard";
export const dynamic = 'force-dynamic';
export interface Product {
  Id: string;
  Name: string;
  Description: string;
  ImageLink: string;
  Price: number;
}

export default async function ProductsListPage() {
 const response = await fetch("https://whispperingpagesecomm.vercel.app/api/products", {
    cache: "no-store",
  });
  let productList: Product[] = [];
  if (response.ok) {
    productList = await response.json();
  }

  return (
    <div>
      <HeroSection/>
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#F8F4E1]">
      {productList.map((item) => (
        <ProductCard key={item.Id} productItem={item} />
      ))}
    </div>
    </div>
  );
}
