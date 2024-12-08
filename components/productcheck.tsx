"use client"
// Define TypeScript types for the JSON structure
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
  }
  

import { useEffect, useState } from 'react';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/product.json'); // File located in `public`
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product._id}>
              <h2>{product.productname}</h2>
              <p>{product.description}</p>
              <img src={product.image} alt={product.productname} style={{ width: '200px' }} />
              <p>Category: {product.category}</p>
              <p>Sold: {product.sold}</p>
              <p>
                Shopkeeper: {product.shopkeeper.name} <br />
                <img src={product.shopkeeper.image} alt={product.shopkeeper.name} style={{ width: '50px' }} />
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
