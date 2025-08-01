
import ClientLayout from "./clientLayout";
import "./globals.css";


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
