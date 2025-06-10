import { useSession,signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const {data:session}=useSession();
  return (
    <div className="flex justify-between items-center px-8 py-4  bg-[#F8F4E1] text-black ">
      {/* Logo
      <div className="text-2xl font-extrabold tracking-wide">📖 Whispering Pages 🕊️</div> */}
      <div></div>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-lg">
        <Link href="/" className="hover:bg-[#F2C078] p-2 rounded-md transition-colors duration-200">Home</Link>
        <Link href="/deals" className="hover:bg-[#F2C078] p-2 rounded-md transition-colors duration-200">Deals</Link>
        <Link href="/cart" className="hover:bg-[#F2C078] p-2 rounded-md transition-colors duration-200">Cart</Link>
        {session ? (
          <button
            onClick={() => signOut()}
            className="hover:bg-[#F2C078] p-2 rounded-md transition-colors duration-200"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="hover:bg-[#F2C078] p-2 rounded-md transition-colors duration-200">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
