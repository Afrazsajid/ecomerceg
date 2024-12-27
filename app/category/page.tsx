"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Assuming Button component exists
import {ProductTypeCard} from '@/components/productCard';
import ProductCard from "@/components/productCard"
import { getProductsByCategory } from "@/lib/utils";
import Navbar from "@/components/navbar";


// Simulate a product data array (this should ideally come from a data source or context)
const allProducts: ProductTypeCard[] = [
  {
    _launchAt: "2024-01-01T12:00:00Z",
    sold: 50,
    shopkeeper: {
      _id: "1",
      name: "Shopkeeper 1",
      image: "/images/shopkeeper1.jpg"
    },
    productname: "Product 1",
    category: "Electronics",
    _id: "product-1",
    image: "/images/product1.jpg",
    description: "This is a description of product 1."
  },
  {
    _launchAt: "2024-01-01T12:00:00Z",
    sold: 30,
    shopkeeper: {
      _id: "2",
      name: "Shopkeeper 2",
      image: "/images/shopkeeper2.jpg"
    },
    productname: "Product 2",
    category: "Fashion",
    _id: "product-2",
    image: "/images/product2.jpg",
    description: "This is a description of product 2."
  },
  // Add more products here...
];



const CategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [products, setProducts] = useState<ProductTypeCard[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch products based on the selected category
  useEffect(() => {
    setLoading(true);
    const filteredProducts = getProductsByCategory(selectedCategory);
    setProducts(filteredProducts);
    setLoading(false);
  }, [selectedCategory]);

  const categories = ["All", "Electronics", "Fashion", "Home", "Toys"]; // Example categories

  return (<>
    <Navbar highlightedItem="category"/>
    <div className="category-page max-w-7xl mx-auto px-4 py-8">
    {/* Category Filter */}
    <div className="category-filter mb-6">
      <label htmlFor="category-select" className="block text-lg font-medium text-gray-700">
        Select Category
      </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

    {/* Product List */}
    <div className="card_grid">
      {loading ? (
        // Skeleton Loader for Products
        <div className="col-span-1 animate-pulse">
          <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
          <div className="mt-4 bg-gray-200 h-6 w-3/4 rounded"></div>
        </div>
      ) : (
        products.map((product) => (
          <div key={product._id} >
            <ProductCard post={product} />
          </div>
        ))
      )}
    </div>
  </div>
  </>
  );
};

export default CategoryPage;
