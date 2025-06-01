import { Product } from '../productList';
import ProductCard from '../products/components/productCard';
export default async function CartPage() {
    const response=await fetch("http://localhost:3000/api/cart");
    let cartProducts:Product[]=[];
    if(response.ok){
        cartProducts=await response.json();
    }
  return  <div className="min-h-screen bg-gray-50 px-8 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">🛒 Your Cart</h1>

      {cartProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartProducts.map((item) => (
            <ProductCard key={item.Id} productItem={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-12">
          Your cart is empty 🛍️
        </div>
      )}
    </div>
}
