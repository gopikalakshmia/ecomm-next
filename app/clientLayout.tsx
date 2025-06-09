'use client'
import { SessionProvider } from "next-auth/react";
import Navbar from "./navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }){
    return(
        <SessionProvider>
            <Navbar/>
            {children}
        </SessionProvider>
    )
}