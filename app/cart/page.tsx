


import React from 'react';
import { CartProvider} from '../context/cartcontext';
import ShoppingCart from '@/components/shopingcart';
import { useAmp } from 'next/amp';
import Navbar from '@/components/navbar';


const App: React.FC = () => {
  

  return (
    <CartProvider>
      <Navbar highlightedItem="cart" />
      <ShoppingCart />
    </CartProvider>
  );
};

export default App;

