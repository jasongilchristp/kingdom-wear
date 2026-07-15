import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const Catalog = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="pt-20">
      <ProductGrid />
    </div>
  );
};

export default Catalog;
