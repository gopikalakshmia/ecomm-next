"use client"
import Image from "next/image";
import menuImage from '../asset/menu.png';
import { useState } from "react";
import Link from "next/link";
export default function Menu(){
    const [open,setOpen]=useState(false);
    return(
        <>
        {/* mobile */}
        <div className="">
            <Image src={menuImage} alt="ease store logo" onClick={()=>{setOpen(prev=>!prev)}}></Image>
            {open&& 
        <div className="absolute w-full left-0  justify-items-center items-center top-20 p-20 flex flex-col  bg-black text-white gap-8">
            <Link href="">HomePage</Link>
            <Link href="">Shop</Link>
            <Link href="">Deals</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
            <Link href="">Logout</Link>
            <Link href="">Cart</Link>
        </div>}
       

        </div>
        
        
      
        </>
    )
}