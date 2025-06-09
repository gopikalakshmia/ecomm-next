
import ClientLayout from "./clientLayout";
import "./globals.css";
import Navbar from "./navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
       <ClientLayout>
        {children}
        </ClientLayout>
      </body>
    </html>
  );
}
