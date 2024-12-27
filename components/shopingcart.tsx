"use client"

import React, { useState, useEffect } from 'react';
import { useCart } from '@/app/context/cartcontext'; // Import the useCart hook
import Navbar from '@/components/navbar';
import { getProductById } from '@/lib/utils';
import { FaTrash } from "react-icons/fa";

const ShoppingCart: React.FC = () => {
  const { cart, loading, removeFromCart, updateQuantity, getTotalPrice, promoCode, setPromoCode, discount, applyPromoCode } = useCart();
  
  const [updatingItemId, setUpdatingItemId] = useState<string | null>(null); // Track which item is being updated

  const handleQuantityChange = async (itemId: string, newQuantity: number) => {
    setUpdatingItemId(itemId); // Disable the button for this item
    await updateQuantity(itemId, newQuantity); // Assuming updateQuantity is an async function
    setUpdatingItemId(null); // Re-enable buttons for all items after update is done
  };

  const handleDeleteItem = (itemId: string,namee:string) => {
    console.log('Deleting item with id:', itemId);
    console.log('Deleting item with id:', namee);
    removeFromCart(itemId); // Make sure removeFromCart is using the correct itemId
  };
  
  if (loading && cart.length === 0) {
    // Loading screen only when cart is being fetched initially
    return (
      <div>
        <h2 className="text-3xl font-bold text-center mb-6 py-3">Your Shopping Cart</h2>
        <div key={1} className="flex items-center border-b py-4 w-3/4 mx-auto">
          {/* Skeleton for Image */}
          <div className="w-20 h-20 bg-gray-200 animate-pulse mr-4 rounded"></div>
      
          <div className="flex-1">
            {/* Skeleton for Product Name */}
            <div className="h-6 bg-gray-200 animate-pulse mb-2 w-3/4 rounded"></div>
      
            {/* Skeleton for Description */}
            <div className="h-4 bg-gray-200 animate-pulse mb-2 w-1/2 rounded"></div>
      
            {/* Skeleton for Category */}
            <div className="h-4 bg-gray-200 animate-pulse mb-4 w-1/3 rounded"></div>
      
            {/* Skeleton for Quantity Buttons */}
            <div className="flex items-center space-x-4 mt-2">
              <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
              <div className="w-16 h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full"></div>
            </div>
          </div>
      
          {/* Skeleton for Price */}
          <div className="ml-4 h-6 w-20 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-6">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row space-x-6">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
            {cart.map((item) => {
              const product = getProductById(item.id);
              if (!product) return null;

              return (
                <div key={item.id} className="flex items-center border-b py-4">
                  <img src={product.image} alt={product.productname} className="w-20 h-20 object-cover mr-4" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{product.productname}</h3>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="text-sm text-gray-400">
                      <strong>Category:</strong> {product.category}
                    </p>
                    <div className="flex items-center space-x-4 mt-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="px-3 py-1 bg-gray-200 rounded-full"
                        disabled={updatingItemId === item.id} // Disable buttons if this item is being updated
                      >
                        -
                      </button>
                      <span className="text-xl">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="px-3 py-1 bg-gray-200 rounded-full"
                        disabled={updatingItemId === item.id} // Disable buttons if this item is being updated
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="ml-4 text-lg font-semibold">
                    € {parseFloat(product.setprice.replace('€', '')) * item.quantity}
                    </div>
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteItem(item.id,product.productname)}
                    className=" text-red-500 hover:text-red-700 mx-4"
                  >
                    <FaTrash className="w-6 h-6" />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="lg:w-1/3 mt-6 lg:mt-0 p-6 rounded-lg shadow-lg bg-gray-600 text-white">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Items:</span>
                <span>{cart.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Price:</span>
                <span>€ {getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Promo Code:</span>
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="border p-2 rounded-md w-32"
                  placeholder="Enter code"
                />
              </div>

              <button
                onClick={applyPromoCode}
                className="w-full mt-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Apply Promo Code
              </button>

              {discount > 0 && (
                <div className="flex justify-between mt-4 text-green-600">
                  <span>Discount Applied:</span>
                  <span>€ {discount.toFixed(2)}</span>
                </div>
              )}

              <button className="w-full mt-4 py-2 bg-black text-white rounded-md">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
