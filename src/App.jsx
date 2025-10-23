import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProductShowcase />
        <Contact />
      </main>
      <footer className="mt-16 border-t border-white/10 py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} AeroNova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
