import React from 'react';
import { motion } from 'framer-motion';
import { Drone, Camera, Battery, Shield } from 'lucide-react';

const drones = [
  {
    name: 'AeroNova X1',
    desc: 'Lightweight scout for mapping and cinematics.',
    img: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1600&auto=format&fit=crop',
    specs: ['8K/60fps', '45 min', 'Obstacle Shield'],
  },
  {
    name: 'AeroNova Pro',
    desc: 'Industrial inspections with RTK precision.',
    img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600&auto=format&fit=crop',
    specs: ['Thermal + RGB', 'RTK GNSS', 'IP54 Rated'],
  },
  {
    name: 'AeroNova Cargo',
    desc: 'Autonomous delivery with smart routing.',
    img: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1600&auto=format&fit=crop',
    specs: ['3kg Payload', 'Mesh Link', 'Geo-fencing'],
  },
];

const IconMap = {
  0: Camera,
  1: Battery,
  2: Shield,
};

const FleetCard = ({ item, idx }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: idx * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
    >
      <div className="relative">
        <img src={item.img} alt={item.name} className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="p-2 rounded-lg bg-white/10 border border-white/10">
            <Drone size={18} />
          </div>
          <p className="text-sm text-white/90">{item.name}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-white/70">{item.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {item.specs.map((s, i) => {
            const Ico = IconMap[i] || Camera;
            return (
              <span key={s} className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full bg-black/40 border border-white/10">
                <Ico size={14} className="text-cyan-300" /> {s}
              </span>
            );
          })}
        </div>
        <a href="#contact" className="mt-5 inline-block text-sm text-cyan-300 hover:text-cyan-200">Request specs →</a>
      </div>
    </motion.div>
  );
};

const Fleet = () => {
  return (
    <section id="fleet" className="py-20" aria-label="Drone fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Our Fleet</h2>
            <p className="text-white/60 mt-2 max-w-2xl">From cinematic aerials to heavy-lift missions, choose a platform tailored to your operation.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-block text-sm px-4 py-2 rounded-md bg-white text-black font-medium">Talk to sales</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drones.map((d, i) => (
            <FleetCard key={d.name} item={d} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
