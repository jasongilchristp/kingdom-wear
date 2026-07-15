import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CartDrawer = () => {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      setIsCartOpen(false);
      navigate('/login');
      return;
    }
    alert('Checkout flow coming soon!');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity z-[100] ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[100] flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold uppercase tracking-widest text-black">Your Cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="mb-4">Your cart is empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-black font-bold uppercase tracking-widest underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {cartItems.map(item => (
                <li key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold uppercase text-gray-900">{item.name}</h3>
                        <p className="text-sm font-bold text-gray-900 ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{item.priceStr}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border border-gray-300 rounded-sm">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-3 py-1 hover:bg-gray-100 transition-colors font-bold"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-sm font-medium">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          disabled={item.quantity >= item.stock}
                          className={`px-3 py-1 font-bold ${item.quantity >= item.stock ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100 transition-colors'}`}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs font-bold text-gray-400 hover:text-red-500 uppercase tracking-wider transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-bold uppercase text-gray-500 tracking-wider">Subtotal</span>
              <span className="text-lg font-bold text-black">${cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6">Shipping and taxes calculated at checkout.</p>
            <button 
              onClick={handleCheckout}
              className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
