import Image from 'next/image';
import { productList} from '../productList';
import Link from 'next/link';
export default function ProductsListPage(){
 
    return(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {productList.map(item=><Link href={`/products/${item.Id}`} key={item.Id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
              <Image src={item.ImageLink} alt="Product Image" width={100} height={100} />
            <p>{item.Description}</p>
            <h1>${item.Price}</h1>
        </Link>)}
        </div>
    )
}