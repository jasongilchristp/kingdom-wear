import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter basename="/kingdom-wear/">
              <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased relative overflow-hidden">
                <Navbar />
                <CartDrawer />
                <main>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/admin" element={<AdminDashboard />} />
                  </Routes>
                </main>
              </div>
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;