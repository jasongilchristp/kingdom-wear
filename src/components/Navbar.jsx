import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, isAdmin, logout } = useAuth();
  const { cartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinkClass = "relative text-sm font-bold tracking-widest uppercase transition-colors hover:text-gray-600 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";

  return (
    <nav className="w-full bg-white text-black border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 font-extrabold text-2xl tracking-widest uppercase cursor-pointer group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
              </svg>
              <span>Kingdom Wear</span>
            </Link>
          </div>

          {/* Center Navigation Links (Hidden on mobile) */}
          <div className="hidden md:flex space-x-12">
            <Link to="/" className={navLinkClass}>
              Home
            </Link>
            {user && (
              <Link to="/catalog" className={navLinkClass}>
                Catalog
              </Link>
            )}
            {isAdmin && (
              <Link to="/admin" className={navLinkClass}>
                Admin
              </Link>
            )}
            {!user ? (
              <Link to="/login" className={navLinkClass}>
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="relative text-sm font-bold tracking-widest uppercase text-red-500 transition-colors hover:text-red-700 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:-bottom-1 after:left-0 after:bg-red-700 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Logout
              </button>
            )}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-50 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center min-w-[20px] h-[20px] px-1 text-xs font-bold leading-none text-white bg-black rounded-full transform translate-x-1/4 -translate-y-1/4 transition-transform duration-300 group-hover:scale-110">
                  {cartCount}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button (Hamburger) */}
            <button className="md:hidden ml-4 p-2 hover:bg-gray-50 rounded-full transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
