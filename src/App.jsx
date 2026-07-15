import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans antialiased">
      {/* A wrapper div that ensures a clean white background and full height */}
      <Navbar />
      <Hero />
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
