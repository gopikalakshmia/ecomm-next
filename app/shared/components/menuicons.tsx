"use client"
import profileImg from '../asset/profile.png';
import notification from '../asset/notification.png';
import cart from '../asset/cart.png';
import Image from "next/image";
import { useState } from 'react';
import Link from 'next/link';
import CartModal from './CartModal';
export default function MenuIcons(){
    const [profileOpen,setProfileOpen]=useState(false);
    const [cartOpen,setCartOpen]=useState(false);
    return(
        <div className="flex flex-row gap-4 xl:gap-6">
            <div>
                <Image src={profileImg} alt="Profile Icon" onClick={()=>setProfileOpen(prev=>!prev)}/>
                    {profileOpen&&
                    <div className='absolute flex flex-col rounded-md mt-2 shadow-2xl bg-white p-2'>
                        <Link href="/">Profile</Link>
                        <Link href="/">LogOut</Link>
                    </div>}
            </div>
            <div>
                <Image src={notification} alt="Notification Icon"/>
            </div>
            <div className='relative '>
                <Image src={cart} alt="Cart Icon" onClick={()=>setCartOpen(prev=>!prev)}/>
                <div className='absolute bg-pink-300 -top-3 -right-4 w-6 h-6 rounded-full flex items-center justify-center' >2</div>
{cartOpen && <CartModal/>}
            </div>
        </div>
    )
}