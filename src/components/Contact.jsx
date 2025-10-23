import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! We'll be in touch.");
  }

  return (
    <section id="contact" className="py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Talk to a specialist</h2>
          <p className="mt-2 text-slate-300">Need help choosing a model or building a fleet? Our team can help.</p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">Email: sales@aeronova.example</p>
            <p className="text-sm text-slate-300">Phone: +1 (555) 012-3456</p>
            <p className="text-sm text-slate-300">Hours: Mon–Fri, 9am–6pm</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm text-slate-300">Name</label>
              <input required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-cyan-500/30 focus:ring" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-cyan-500/30 focus:ring" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none ring-cyan-500/30 focus:ring" />
            </div>
          </div>
          <button className="mt-4 w-full rounded-lg bg-cyan-500 px-4 py-2 font-medium text-slate-900 hover:bg-cyan-400 transition">Send</button>
          {status && <p className="mt-3 text-sm text-cyan-300">{status}</p>}
        </form>
      </div>
    </section>
  );
}
