"use client"

import React, { createContext, useState, ReactNode, useContext } from 'react';
import { getProductById } from '@/lib/utils';

interface Product {
  _id: string;
  productname: string;
  category: string;
  image: string;
  description: string;
  unsetprice: string;
  setprice: string;
}

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
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: "prod1w2e3r4t5", quantity: 1 },
    { id: "prod7y8u9i0o", quantity: 2 },
  ]);
  const [promoCode, setPromoCode] = useState<string>('');
  const [discount, setDiscount] = useState<number>(0);

  const addToCart = (id: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { id, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(quantity, 1) }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    const total = cart.reduce((total, item) => {
      const product = getProductById(item.id);
      if (!product) return total;

      const price = parseFloat(product.setprice.replace("€", ""));
      return total + price * item.quantity;
    }, 0);

    return total - discount;
  };

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
