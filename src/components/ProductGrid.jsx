import React from 'react';

const products = [
  {
    id: 1,
    name: "Agape Heavyweight Hoodie",
    price: "$85.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Agape+Hoodie"
  },
  {
    id: 2,
    name: "Redeemed Oversized Tee",
    price: "$45.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Redeemed+Tee"
  },
  {
    id: 3,
    name: "Crown of Thorns Cap",
    price: "$35.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Crown+Cap"
  },
  {
    id: 4,
    name: "Grace Crewneck",
    price: "$75.00",
    image: "https://placehold.co/400x500/eaeaea/a3a3a3?text=Grace+Crewneck"
  }
];

const ProductGrid = () => {
  return (
    <div className="bg-white py-16 sm:py-24" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 uppercase">
            Latest Arrivals
          </h2>
          <a href="#" className="hidden sm:block text-sm font-bold text-black hover:text-gray-500 uppercase tracking-widest transition-colors">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 xl:gap-x-10">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col">
              <div className="w-full bg-gray-100 aspect-[4/5] rounded-sm overflow-hidden group-hover:opacity-90 transition-opacity">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-center object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex flex-col flex-1 text-center">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0 z-10" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500 font-medium">{product.price}</p>
                
                {/* Add to cart button */}
                <button className="mt-5 relative z-20 w-full bg-transparent border-2 border-black text-black py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center sm:hidden">
          <a href="#" className="w-full text-center px-6 py-4 border-2 border-black text-xs font-bold uppercase tracking-widest text-black hover:bg-black hover:text-white transition-colors">
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
