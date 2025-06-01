import Menu from "./menu";
import Image from "next/image";
import logoImage from "../asset/logo.png";
import SearchBar from "./searchbar";
import MenuIcons from "./menuicons";
import Link from "next/link";
export default function Navigation() {
  return (
    <header className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* Mobile */}
      <div className="flex justify-between items-center h-full lg:hidden">
        <div className="flex flex-row  items-center">
          <Image src={logoImage} alt="logo Image" height={50}></Image>
          <h1 className=" text-2xl tracking-wide ">EASƎ</h1>
        </div>
        <Menu />
      </div>
      {/* Large screens */}
      <div className="hidden xl:flex justify-between items-center h-full">
        <div className="flex flex-row  items-center w-1/2 gap-6">
          <Image src={logoImage} alt="logo Image" height={50}></Image>
          <h1 className=" text-2xl tracking-wide ">EASƎ</h1>
          <div className="gap-5 flex flex-row">
            <Link href="/">HomePage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
 
        </div>
        </div>
        <div className="flex flex-row w-1/2 justify-between gap-6">
        <SearchBar/>
        <MenuIcons/>
        </div>
     
      </div>
    </header>
  );
}
