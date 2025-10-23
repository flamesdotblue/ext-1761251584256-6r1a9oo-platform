export default function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-300">
            <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
            New: 8K Cinematic Capture
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Elevate your vision with AeroNova drones
          </h1>
          <p className="mt-4 text-slate-300">
            Ultra-stable flight, cinematic imagery, and intelligent autonomy — built for creators, explorers, and professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#models" className="rounded-full bg-cyan-500 px-6 py-3 font-medium text-slate-900 hover:bg-cyan-400 transition">Shop models</a>
            <a href="#features" className="rounded-full border border-white/10 px-6 py-3 font-medium hover:bg-white/5 transition">Learn more</a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              ['46 min', 'Max flight time'],
              ['18 km', 'Range'],
              ['< 249 g', 'Sub-250 compliant'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <dt className="text-2xl font-semibold text-white">{value}</dt>
                <dd className="mt-1 text-xs text-slate-400">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-fuchsia-500/20 blur-2xl" />
          <img
            alt="A sleek professional drone in flight"
            className="w-full rounded-3xl border border-white/10 shadow-2xl"
            src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
}
