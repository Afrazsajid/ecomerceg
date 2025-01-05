"use client";

import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { getProductById } from '@/lib/utils';

interface CartItem {
  id: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalPrice: () => number;
  promoCode: string;
  setPromoCode: (code: string) => void;
  discount: number;
  applyPromoCode: () => void;
  loading: boolean; // Add loading state
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  // Retrieve cart data from localStorage or initialize with an empty array
  const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
  const initialCart = savedCart ? JSON.parse(savedCart) : [];

  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [promoCode, setPromoCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true); // State to track if data is loading

  // Store cart data in localStorage whenever cart state changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Simulate delay for localStorage data load (optional)
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setLoading(false); // Set loading to false once cart is loaded
      }, 200); // Optionally add a delay to simulate loading time
    }
  }, [cart]);

  // Add item to cart or increment its quantity if already in the cart
  const addToCart = (id: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { id, quantity: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId)); // Make sure you're filtering based on the ID
  };
  

  // Update item quantity in the cart
  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Calculate the total price based on cart items and applied discount
  const getTotalPrice = () => {
    const total = cart.reduce((total, item) => {
      const product = getProductById(item.id);
      if (!product) return total;
      
      const price = parseFloat(product.setprice.replace("€", ""));
      return total + price * item.quantity;
    }, 0);

    return total - discount;
  };

  // Apply a promo code and update the discount accordingly
  const applyPromoCode = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(getTotalPrice() * 0.1); // Apply 10% discount
    } else {
      setDiscount(0);
      alert("Invalid Promo Code");
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        promoCode,
        setPromoCode,
        discount,
        applyPromoCode,
        loading, // Provide loading state
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};