import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-[#FAFAFA] pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-black tracking-tighter mb-6 uppercase">
          Wear Your Witness.
        </h1>
        
        <p className="mt-4 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-10">
          Premium streetwear designed for citizens of the Kingdom. 
          Unapologetic faith meets minimalist aesthetic.
        </p>
        
        <div className="mt-8 flex justify-center">
          <a
            href="#shop"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase bg-black hover:bg-gray-900 transition-all duration-300 rounded-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Shop the Collection
          </a>
        </div>
      </div>
      
      {/* Decorative subtle background elements for premium feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50 pointer-events-none -z-0"></div>
    </div>
  );
};

export default Hero;
