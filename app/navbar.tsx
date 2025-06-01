import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">🌟 Shopora</div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link href="/" className="hover:text-yellow-300 transition-colors duration-200">Home</Link>
        <Link href="/deals" className="hover:text-yellow-300 transition-colors duration-200">Deals</Link>
        <Link href="/cart" className="hover:text-yellow-300 transition-colors duration-200">Cart</Link>
        <Link href="/login" className="hover:text-yellow-300 transition-colors duration-200">Login</Link>
      </div>
    </div>
  );
}
