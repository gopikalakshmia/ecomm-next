"use client";
import { SessionProvider } from "next-auth/react";
import Navbar from "./navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#E9DFC3] p-20">
      <SessionProvider>
        <div className="bg-[#F8F4E1]  p-3 rounded-4xl">
          <Navbar />
          {children}
        </div>
      </SessionProvider>
    </div>
  );
}
