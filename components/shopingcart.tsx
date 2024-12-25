"use client"

import React, { useState } from 'react';
import { useCart } from '@/app/context/cartcontext'; // Import the useCart hook
import Navbar from '@/components/navbar';
import { getProductById } from '@/lib/utils';

const ShoppingCart: React.FC = () => {
  const { cart, updateQuantity, getTotalPrice, promoCode, setPromoCode, discount, applyPromoCode } = useCart();

  return (
    <>
      <Navbar highlightedItem="cart" />
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
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-200 rounded-full"
                        >
                          -
                        </button>
                        <span className="text-xl">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-200 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="ml-4 text-lg font-semibold">
                      € {parseFloat(product.setprice.replace('€', '')) * item.quantity}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="lg:w-1/3 mt-6 lg:mt-0 bg-white p-6 rounded-lg shadow-lg bg-gray-600 text-white">
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
    </>
  );
};

export default ShoppingCart;
