import React, { useState } from 'react';
import { Drone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Fleet', href: '#fleet' },
    { label: 'Tech', href: '#tech' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400">
              <Drone size={20} />
            </div>
            <span className="font-semibold tracking-tight">AeroNova</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-md bg-white text-black font-medium hover:opacity-90 transition"
            >
              Get Started
            </a>
          </nav>

          <button
            aria-label="Open menu"
            className="md:hidden p-2 rounded-md border border-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-2 bg-black/90">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-white/80 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center text-sm px-4 py-2 rounded-md bg-white text-black font-medium"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
