"use client";
import React from 'react'
import { useCart } from "@/app/context/cartcontext";
import { Heading1 } from 'lucide-react';



const Shirtsection = () => {

    const { addToCart } = useCart();
    
      const handleAddToCart = () => {
        addToCart("prod1234yt5"); // Add the product to the cart
        alert(`Product added to the cart! Vita`);
      };

      
  return (
    <div><div className="bg-gray-50">
    {/* Hero Section */}
    <section style={{ backgroundColor: '#23856d' }} className="text-white pt-14">
        <div className="sm:text-left text-center max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
            {/* Text Content */}
            <div className="flex-1">
                <p className="text-lg uppercase font-normal mb-5 mt-16 sm:mt-0">Summer 2020</p>
                <h1 className="text-6xl font-bold leading-tight my-4">Vita Classic<br /> Product</h1>
                <p className="text-sm font-medium mb-4 tracking-widest">
                    We know how large objects will act, but things on a small scale.
                </p>
                <div className="sm:mx-0 mr-5 mx-auto sm:w-auto w-3/4 flex items-center">
                    <p className="text-2xl font-bold mr-4">$16.48</p>
                    <button className="bg-green-500 hover:bg-green-600 px-7 py-3 rounded text-white font-bold" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div> 
            </div>
            {/* Image */}
            <div className="mt-0 sm:mt-16">
                <img
                    src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734727783/shop-hero-2-png-picture-1_mzdvop.png"
                    alt="Product"
                    className="transform transition-transform duration-300 hover:scale-105 "
                />
            </div>
        </div>
    </section>

    {/* Subsection */}
    <section className="bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
            {/* Image */}
            <div className="w-full sm:w-3/4 md:w-full order-2 md:order-1">
                <img
                    src="https://res.cloudinary.com/dvbc6ctqu/image/upload/v1734816380/asian-woman-man-with-winter-clothes_1_ix5ree.png"
                    alt="People"
                    className="rounded shadow-lg w-full transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                />
            </div>
            {/* Text Content */}
            <div className="mt-16 text-center sm:text-left ml-14 order-1 md:order-2">
                <p className="text-sm uppercase font-bold tracking-widest text-gray-400 mb-7">SUMMER 2020</p>
                <h2 className="text-4xl text-gray-800 font-bold mb-4">Part of the Neural <br /> Universe</h2>
                <p className="text-gray-500 tracking-widest mb-6 font-[550]">
                    We know how large objects will act, <br /> but things on a small scale.
                </p>
                <div className="flex gap-4 sm:ml-0 ml-10">
                    <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded text-sm text-white font-bold">
                        BUY NOW
                    </button>
                    <button className="bg-gray-200 text-green-500 hover:bg-gray-300 px-8 py-3 rounded text-sm font-bold border-[0.5px] border-green-500">
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    </section>
</div></div>
  )
}

export default Shirtsection