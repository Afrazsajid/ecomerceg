// import { ClerkProvider,  SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
// import './globals.css'
import { Menu } from 'lucide-react';

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from 'next/link';

import Searchfrom from "@/components/ui/serachform"

// Define props type for dynamic button highlighting
interface NavbarProps {
  highlightedItem: "home" | "category" | "cart" | "login" | "signup";
  query?: string;
}

const Navbar: React.FC<NavbarProps> = ({ highlightedItem , query }) => {
  // A function to check if the current item is the highlighted one
  const getButtonClass = (item: string) =>
    highlightedItem === item
      ? "bg-primary text-white"
      : " text-gray-800";

  return (
    <>
    

    <nav className="bg-white shadow-md sticky w-full top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Home */}
        <div className="text-lg font-bold text-gray-800 m-3">Brand</div>

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
          <Link href="./"
            className={`px-4 py-2 rounded-lg ${getButtonClass("home")} hover:bg-blue-600`}
          >
            Home
          </Link>
          <Link href="./category"
            className={`px-4 py-2 rounded-lg ${getButtonClass("category")} hover:bg-gray-300`}
          >
            Category
          </Link>
          <Link href="./category"
            className={`px-4 py-2 rounded-lg ${getButtonClass("cart")} hover:bg-gray-300`}
          >
            Cart
          </Link>
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
            <button className="md:hidden focus:outline-none">
              <div className="w-8 h-8 flex items-center justify-center border rounded-md">
                <span className="material-icons text-gray-800"><Menu/></span>
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-4 bg-white shadow-lg rounded-lg w-56">
            <div className="space-y-4">
              <button
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "home"
                )} hover:bg-blue-600`}
              >
                Home
              </button>
              <button
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "category"
                )} hover:bg-gray-300`}
              >
                Category
              </button>
              <button
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "cart"
                )} hover:bg-gray-300`}
              >
                Cart
              </button>
              <button
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "login"
                )} hover:bg-gray-300`}
              >
                Login
              </button>
              <button
                className={`block w-full text-left px-4 py-2 rounded-lg ${getButtonClass(
                  "signup"
                )} hover:bg-gray-300`}
              >
                Sign Up
              </button>
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
