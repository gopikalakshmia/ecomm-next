import Link from "next/link";

export default function Navbar(){
    return(
        <div className=" flex-row p-5 shadow-lg font-bold">
            <Link href="/" className="p-5">Ecomm App</Link>
            <Link href="/products" className="p-5">Products</Link>
            <Link href="/cart" className="p-5">Cart</Link>
        </div>
    )
}