import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
            <Navbar />
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
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;