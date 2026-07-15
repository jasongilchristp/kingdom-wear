import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('kingdom_cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find(item => item.id === product.id);
      let newItems;
      if (existing) {
        // Prevent adding if we've reached the stock limit
        if (existing.quantity >= product.stock) {
          return prevItems;
        }
        newItems = prevItems.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Prevent adding if out of stock
        if (product.stock <= 0) return prevItems;
        newItems = [...prevItems, { ...product, quantity: 1 }];
      }
      localStorage.setItem('kingdom_cart', JSON.stringify(newItems));
      return newItems;
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => {
      const newItems = prev.filter(item => item.id !== id);
      localStorage.setItem('kingdom_cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems(prev => {
      const newItems = prev.map(item => {
        if (item.id === id) {
          const newQ = item.quantity + delta;
          return { ...item, quantity: newQ > 0 ? newQ : 1 };
        }
        return item;
      });
      localStorage.setItem('kingdom_cart', JSON.stringify(newItems));
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('kingdom_cart');
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, addToCart, removeFromCart, updateQuantity, clearCart, 
      cartCount, cartTotal, isCartOpen, setIsCartOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};
