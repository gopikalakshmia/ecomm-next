
import { productList } from "@/app/productList"
import Image from "next/image";
import { notFound } from "next/navigation";
interface productParms{
params:{id:string};
}
export default function ProductPage({params}:productParms){
    const selectedProduct=productList.find(item=>item.Id===params.id);
    if(!selectedProduct){
        return notFound();
    }
    return (   <div className="flex flex-col items-center p-6">
      <Image
        src={selectedProduct.ImageLink}
        alt={selectedProduct.Name}
        width={200}
        height={200}
        className="rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{selectedProduct.Name}</h1>
      <p className="text-gray-600 mt-2 text-center">{selectedProduct.Description}</p>
      <p className="text-lg font-semibold text-blue-700 mt-2">${selectedProduct.Price}</p>
    </div>)
}