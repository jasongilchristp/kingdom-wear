import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="w-full bg-white text-black border-b border-gray-100 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-extrabold text-2xl tracking-widest uppercase cursor-pointer">
              Kingdom Wear
            </Link>
          </div>

          {/* Center Navigation Links (Hidden on mobile) */}
          <div className="hidden md:flex space-x-12">
            <Link to="/" className="text-sm font-semibold tracking-wide hover:text-gray-500 transition-colors">
              Home
            </Link>
            {user && (
              <Link to="/catalog" className="text-sm font-semibold tracking-wide hover:text-gray-500 transition-colors">
                Catalog
              </Link>
            )}
            {isAdmin && (
              <Link to="/admin" className="text-sm font-semibold tracking-wide hover:text-gray-500 transition-colors">
                Admin
              </Link>
            )}
            {!user ? (
              <Link to="/login" className="text-sm font-semibold tracking-wide hover:text-gray-500 transition-colors">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="text-sm font-semibold tracking-wide text-red-500 hover:text-red-700 transition-colors">
                Logout
              </button>
            )}
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button className="relative p-2 hover:bg-gray-50 rounded-full transition-colors flex items-center justify-center">
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
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-black rounded-full transform translate-x-1/4 -translate-y-1/4">
                2
              </span>
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
