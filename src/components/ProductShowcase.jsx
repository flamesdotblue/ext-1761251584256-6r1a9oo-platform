const products = [
  {
    name: 'AeroNova Air',
    price: '$799',
    img: 'https://images.unsplash.com/photo-1560944527-9a984cf1c833?q=80&w=1600&auto=format&fit=crop',
    highlights: ['249 g', '4K60', '34 min'],
  },
  {
    name: 'AeroNova Pro',
    price: '$1299',
    img: 'https://images.unsplash.com/photo-1539885118850-739f6a5f43d6?q=80&w=1600&auto=format&fit=crop',
    highlights: ['8K', '46 min', 'Tri-sensing'],
  },
  {
    name: 'AeroNova FPV',
    price: '$999',
    img: 'https://images.unsplash.com/photo-1508948956644-0017e845d797?q=80&w=1600&auto=format&fit=crop',
    highlights: ['155° FOV', '4K120', 'Sport mode'],
  },
];

export default function ProductShowcase() {
  return (
    <section id="models" className="py-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold">Choose your flight path</h2>
        <p className="mt-2 text-slate-300">Three models tailored to creators, pros, and thrill‑seekers.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((p) => (
          <div key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="overflow-hidden">
              <img src={p.img} alt={p.name} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-300">{p.price}</span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                {p.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-white/10 px-2 py-1">{h}</li>
                ))}
              </ul>
              <div className="mt-5 flex gap-2">
                <button className="flex-1 rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 hover:bg-cyan-400 transition">Buy</button>
                <button className="flex-1 rounded-lg border border-white/10 px-4 py-2 font-medium hover:bg-white/5 transition">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
