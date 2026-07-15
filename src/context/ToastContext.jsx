import React, { createContext, useContext, useState } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast UI globally rendered */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[100] transition-all duration-300 transform translate-y-0 opacity-100">
          <div className={`px-6 py-4 rounded-sm shadow-xl text-xs font-bold uppercase tracking-widest text-white flex items-center gap-3 ${toast.type === 'error' ? 'bg-red-600' : 'bg-black'}`}>
            {toast.type === 'success' && (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {toast.message}
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};
