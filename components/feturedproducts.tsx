'use client';


import Link from 'next/link';
import React from 'react';
import { FaClock } from 'react-icons/fa';


const FeaturedProducts = () => {
  const products = [
    {
      id: "prod1a2b3c4d5e6",
      image: 'https://images.unsplash.com/photo-1612465289702-7c84b5258fde?q=80&w=1873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Tech Accessories',
      title: 'Wireless Headphones',
      description: 'Immerse yourself in crystal-clear audio with our wireless headphones, featuring noise cancellation, long-lasting battery, and a sleek, lightweight design perfect for all-day comfort.',
      date: '22 Dec 2024',
      comments: 12,
      price: '$59.99',
    },
    {
      id: "prod2e3f4g5h6i7",
      image: 'https://images.unsplash.com/photo-1613776822564-8859412fc09b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0',
      category: 'Home Decor',
      title: 'Modern Table Lamp',
      description: 'Brighten up your room with this elegant table lamp, featuring a contemporary design, energy-efficient lighting, and premium materials that add style and functionality to your space.',
      date: '18 Dec 2024',
      comments: 8,
      price: '$45.00',
    },
    {
      id: "prod3j4k5l6m7n",
      image: 'https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Fashion',
      title: 'Leather Backpack',
      description: 'Stay organized and stylish with this durable leather backpack, featuring multiple compartments, high-quality craftsmanship, and a timeless design for daily use or travel.',
      date: '15 Dec 2024',
      comments: 15,
      price: '$120.00',
    },
  ];


  return (
    <section className="max-w-screen-xl mx-auto py-12">
      {/* Heading */}
      <h2 className="text-center text-sky-500 text-sm font-bold mb-2">Practice Advice</h2>
      <h2 className="text-center text-gray-800 text-2xl font-bold tracking-wider mb-2">
        Featured Products
      </h2>
      <p className="text-center text-gray-500 text-sm mb-6">
        Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <Link key={product.id} href={`products/${product.id}`}>





          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="relative">
              <div className="w-full h-64 rounded-md overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* "New" Badge */}
              <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded uppercase">
                New
              </span>
            </div>

            {/* Product Details */}
            <div className="mt-4">
              <p className="text-gray-600 text-xs uppercase mb-2">{product.category}</p>
              <h3 className="text-gray-800 text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-500 text-sm tracking-wider leading-relaxed mb-4">{product.description}</p>
              <p className="text-gray-900 text-lg font-bold mb-4">{product.price}</p>
              <div className="flex justify-between items-center text-sm mb-4">
                {/* Date */}
                <div className="flex items-center text-gray-500">
                  <FaClock className="text-sky-500 w-4 h-4 mr-1" />
                  {product.date}
                </div>
                {/* Comments */}
                <div className="flex items-center text-gray-500">
                  <svg
                    className="w-4 h-4 mr-1 text-sky-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 11l7 7 7-7m-7-7v14"
                    />
                  </svg>
                  {product.comments} comments
                </div>
              </div>
              {/* Learn More Button */}
              
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            
            </div>
          </div>
          </Link>
      
          
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
