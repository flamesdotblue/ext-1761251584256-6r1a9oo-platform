import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: '#models', label: 'Models' },
    { href: '#features', label: 'Features' },
    { href: '#support', label: 'Support' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
            <path d="M12 2l3 5 5 3-5 3-3 5-3-5-5-3 5-3 3-5z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" className="opacity-80" />
          </svg>
          <span className="font-semibold tracking-wide">AeroNova</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-300 hover:text-white transition-colors">{n.label}</a>
          ))}
          <a href="#models" className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition">Buy now</a>
        </nav>
        <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center rounded-md p-2 text-slate-200 hover:bg-white/5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5"/></svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-slate-300 hover:text-white transition-colors">{n.label}</a>
            ))}
            <a href="#models" onClick={() => setOpen(false)} className="w-max rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400 transition">Buy now</a>
          </div>
        </div>
      )}
    </header>
  );
}
