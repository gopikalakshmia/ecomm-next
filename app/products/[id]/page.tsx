
import Image from "next/image";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const response = await fetch(
    `http://localhost:3000/api/products/${params.id}`
  );
  if (!response.ok) {
    return notFound();
  }
  const selectedProduct = await response.json();
  if (!selectedProduct) {
    return notFound(); // this works only in a server component
  }

  return (
    <div className="flex flex-col items-center p-6">
      <Image
        src={selectedProduct.ImageLink}
        alt={selectedProduct.Name}
        width={200}
        height={200}
        className="rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{selectedProduct.Name}</h1>
      <p className="text-gray-600 mt-2 text-center">
        {selectedProduct.Description}
      </p>
      <p className="text-lg font-semibold text-blue-700 mt-2">
        ${selectedProduct.Price}
      </p>
    </div>
  );
}
