"use client";
import { useState } from "react";
import React from "react";

type Size = "S" | "M" | "L" | "XL" | "XXL";
type Color = "black" | "red" | "blue";

// Define the types for the product info
interface Shopkeeper {
  _id: string;
  name: string;
  image: string;
}

interface Product {
  _launchAt: string;
  sold: number;
  shopkeeper: Shopkeeper;
  productname: string;
  category: string;
  _id: string;
  image: string;
  description: string;
  unsetprice:string;
  setprice:string

}

interface ProductFullCardProps {
  product: Product;
}

const ProductFullCard: React.FC<ProductFullCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  const sizes: Size[] = ["S", "M", "L", "XL", "XXL"];
  const colors: { name: Color; className: string }[] = [
    { name: "black", className: "bg-black" },
    { name: "red", className: "bg-red-500" },
    { name: "blue", className: "bg-secondary" },
  ];

  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      comment: "Great quality and fits perfectly! Highly recommend this t-shirt.",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good material, but the color was slightly off from the pictures.",
    },
    {
      name: "Mark Taylor",
      rating: 3,
      comment: "It's okay, but I expected better stitching quality.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100">
      {/* Product Section */}
      <div className="w-full max-w-screen-lg p-4 bg-white shadow-md">
        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {/* Product Images */}
          <div className="w-full md:w-1/2">
            <div className="relative h-96 bg-gray-200 p-4 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.productname}
                className="object-contain h-full"
              />
            </div>
            
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <div className="text-sm text-gray-500 mb-4">
              <a href="#" className="text-blue-500 hover:underline">
                Home
              </a>{" "}
              /{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Product
              </a>{" "}
              / <span className="text-gray-700">{product.productname}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{product.productname}</h2>
            <div className="flex items-center text-yellow-400 space-x-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <i key={index} className="bx bxs-star"></i>
                ))}
              <span className="text-sm text-gray-600 ml-2">(3 Reviews)</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-gray-800">{product.unsetprice}</span>
              <span className="ml-4 text-xl line-through text-gray-500">{product.setprice}</span>
            </div>
            <div className="mb-4">
              <h3 className="font-medium text-lg">Description</h3>
              <p className="text-sm text-gray-700 mt-2">{product.description}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-lg">Size</h4>
              <div className="flex gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-md font-bold text-sm ${
                      selectedSize === size
                        ? "bg-gray-800 text-white shadow-md"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-medium text-lg">Color</h4>
              <div className="flex gap-2 mt-2">
                {colors.map((color) => (
                  <div
                    key={color.name}
                    className={`w-10 h-10 rounded-md cursor-pointer ${
                      color.className
                    } ${
                      selectedColor === color.name ? "shadow-lg ring-2 ring-gray-400" : ""
                    }`}
                    onClick={() => setSelectedColor(color.name)}
                  ></div>
                ))}
              </div>
            </div>
            <div className="h-px bg-gray-300 my-4"></div>
            <div className="flex flex-wrap gap-4">
              <button className="flex-1 px-4 py-2 bg-secondary text-white font-bold rounded-md hover:bg-blue-600">
                <i className="bx bxs-zap"></i> Buy Now
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 font-bold rounded-md hover:bg-gray-300">
                <i className="bx bxs-cart"></i> Add to Cart
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 font-bold rounded-md hover:text-red-500">
                <i className="bx bxs-heart"></i> Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full max-w-screen-lg p-4 mt-6 bg-white shadow-md rounded-sm">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            <div className="flex justify-between">
              <span className="font-bold text-gray-800">{review.name}</span>
              <div className="text-yellow-400">
                {Array(review.rating)
                  .fill(0)
                  .map((_, starIndex) => (
                    <i key={starIndex} className="bx bxs-star"></i>
                  ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFullCard;
