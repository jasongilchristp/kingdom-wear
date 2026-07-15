import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

const initialProducts = [
  {
    id: 1,
    name: "Agape Heavyweight Hoodie",
    price: 85.00,
    priceStr: "$85.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Agape+Hoodie",
    stock: 12
  },
  {
    id: 2,
    name: "Redeemed Oversized Tee",
    price: 45.00,
    priceStr: "$45.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Redeemed+Tee",
    stock: 5
  },
  {
    id: 3,
    name: "Crown of Thorns Cap",
    price: 35.00,
    priceStr: "$35.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Crown+Cap",
    stock: 0
  },
  {
    id: 4,
    name: "Grace Crewneck",
    price: 75.00,
    priceStr: "$75.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Grace+Crewneck",
    stock: 20
  }
];

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('kingdom_products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('kingdom_products', JSON.stringify(initialProducts));
    }
  }, []);

  const updateStock = (id, newStock) => {
    const updatedProducts = products.map(product => 
      product.id === id ? { ...product, stock: parseInt(newStock, 10) } : product
    );
    setProducts(updatedProducts);
    localStorage.setItem('kingdom_products', JSON.stringify(updatedProducts));
  };

  const value = {
    products,
    updateStock
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
