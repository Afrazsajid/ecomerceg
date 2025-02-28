import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
 import Footer from "@/components/footer"
import { CartProvider } from "./context/cartcontext";
import { Toaster } from "@/components/ui/toaster";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DesiBazar/ get you a desi item",
  description: "Shop pakistani item from pakistan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider >
        {children}
        <Toaster />
        </CartProvider>
        <Footer/>
      </body>

    </html>
  );
}
