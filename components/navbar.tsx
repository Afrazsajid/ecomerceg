// import { ClerkProvider,  SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import './globals.css'
"use client"
import { Menu , ShoppingCart } from 'lucide-react';

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from 'next/link';

import Searchfrom from "@/components/ui/serachform"
import { useCart } from '@/app/context/cartcontext';
import UnderDevelopment from './ui/underdevelopment';
import { useToast } from "@/hooks/use-toast"
import { Button } from './ui/button';





// Define props type for dynamic button highlighting
interface NavbarProps {
  highlightedItem: "home" |  "pricing"   |  "category" | "cart" | "login" | "signup"| "about" | "contact"  ;
  query?: string;
}

const Navbar: React.FC<NavbarProps> = ({ highlightedItem , query }) => {

  const { cart } = useCart();
  const { toast } = useToast()

  
  // A function to check if the current item is the highlighted one
  const getButtonClass = (item: string) =>
    highlightedItem === item
      ? "bg-primary text-white"
      : " text-gray-800";

  return (
    <>
    

    <nav className="bg-white shadow-md sticky w-full top-0 z-50">
    <div className='m-auto  text-[21px] text-center bg-black-200 text-white'>currently integrating Sanity so there will be some errors    <br />(faculty memebers specially for you) </div>
   
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Home */}
        <div className="text-lg font-bold text-gray-800 m-3">Desi Bazar</div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center flex-grow max-w-lg">
          {/* <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <Searchfrom query={query}/>
        
        </div>

        {/* Buttons (Visible on Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link href="/"
            className={`px-4 py-2 rounded-lg ${getButtonClass("home")}`}
          >
            Home
          </Link>

          <Button className={`px-6 py-2 rounded-lg  bg-white ${getButtonClass("cart")} hover:bg-gray-300 relative `}
      onClick={() => {
        toast({ variant: "destructive" ,
          title: "Integrating Sanity",
          description: "Website is under development and in cart i cannot fetch data asynchrously i amm seeting it out ",
        })
      }}
    >Category</Button>
          {/* <Link href="/category"
            className={`px-4 py-2 rounded-lg ${getButtonClass("category")} hover:bg-gray-300`}
          >
            Category
          </Link> */}
          <Link href="/about"
            className={`px-4 py-2 rounded-lg ${getButtonClass("about")} hover:bg-gray-300`}
          >
            about
          </Link>
          <Link href="/pricing"
            className={`px-4 py-2 rounded-lg ${getButtonClass("pricing")} hover:bg-gray-300`}
          >
            pricing
          </Link>
          <Link href="/contact"
            className={`px-4 py-2 rounded-lg ${getButtonClass("contact")} hover:bg-gray-300`}
          >
            Contact
          </Link>

          <Button className={`px-6 py-2 rounded-lg  bg-white-100 ${getButtonClass("cart")} hover:bg-gray-300 relative`}
      onClick={() => {
        toast({ variant: "destructive" ,
          title: "Integrating Sanity",
          description: "Website is under development and in cart i cannot fetch data asynchrously i amm seeting it out ",
        })
      }}
    >
       <ShoppingCart  />
          <span className="absolute bottom-0 right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          
    </Button>
           {/* <Link href="/cart"
            className={`px-6 py-2 rounded-lg ${getButtonClass("cart")} hover:bg-gray-300 relative`}
          >
          
          <ShoppingCart  />
          <span className="absolute bottom-0 right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>
          
          
          </Link>
           */}
          


         {/* Conditionally render Login/Signup or UserButton based on signed-in state */}
         {/* <SignedOut>
              <Link href="./signin" className={`px-4 py-2 rounded-lg ${getButtonClass("login")} hover:bg-gray-300`}>Login</Link>
              <Link href="./signup" className={`px-4 py-2 rounded-lg ${getButtonClass("signup")} hover:bg-gray-300`}>Sign Up</Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
          
        </div>


        {/* Mobile Menu */}
        <Popover>
          <PopoverTrigger asChild>

            <button className="md:hidden focus:outline-none flex justify-center items-center  gap-2">
              <div className="w-8 h-8 flex items-center justify-center border rounded-md p-3">
                <span className="material-icons text-gray-800"><Menu/></span>
              </div>
              <Link href="/cart"
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "cart"
                )} hover:bg-gray-300 relative`}
              >
                <ShoppingCart/>
                <span className="absolute bottom-0 right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.length}
            </span>

              </Link>
            </button>
            
          </PopoverTrigger>
          <PopoverContent className="p-4 bg-white shadow-lg rounded-lg w-56">
            <div className="space-y-4">
              <Link href={"/"}
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "home"
                )} hover:bg-gray-300`}
              >
                Home
              </Link>
              <Link href="/category"
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "category"
                )} hover:bg-gray-300`}
              >
                Category
              </Link>
           
              <Link href="/about"
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "about"
                )} hover:bg-gray-300`}
              >
                About Us
              </Link><Link href="/pricing"
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "pricing"
                )} hover:bg-gray-300`}
              >
                Pricing
              </Link>
              <Link href="/contact"
            className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
              "contact"
            )} hover:bg-gray-300`}
          >
            Contact
          </Link >
              
            </div>
          </PopoverContent>
        </Popover>
        
      </div>

      {/* Search Bar (Visible on small screens) */}
      <div className="md:hidden px-4 py-2 bg-gray-100">
      <Searchfrom/>
      </div>
    </nav>
  
    </>
  );
};

export default Navbar;
