import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const { products } = useProducts();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`Added ${product.name} to cart`);
  };

  return (
    <div className="bg-white py-16 sm:py-24" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
            Latest Arrivals
          </h2>
          <Link to="/catalog" className="hidden sm:block text-sm font-bold text-black hover:text-gray-500 uppercase tracking-widest transition-colors relative z-20">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 xl:gap-x-10">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="w-full bg-gray-100 aspect-[4/5] rounded-sm overflow-hidden group-hover:opacity-90 transition-opacity relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-white/60 flex items-center justify-center z-10">
                    <span className="bg-black text-white px-4 py-2 font-bold uppercase tracking-widest text-xs">Out of Stock</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex flex-col flex-1 text-center">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0 z-10" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-medium">{product.priceStr}</p>
                <p className="mt-1 text-xs text-gray-400">{product.stock > 0 ? `${product.stock} in stock` : 'Sold out'}</p>
                
                {/* Add to cart button */}
                <button 
                  disabled={product.stock === 0}
                  onClick={() => handleAddToCart(product)}
                  className={`mt-5 relative z-20 w-full bg-transparent border-2 border-black py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${product.stock === 0 ? 'border-gray-300 text-gray-400 cursor-not-allowed' : 'text-black hover:bg-black hover:text-white'}`}
                >
                  {product.stock === 0 ? 'Sold Out' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center sm:hidden relative z-20">
          <Link to="/catalog" className="w-full text-center px-6 py-4 border-2 border-black text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
