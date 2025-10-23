import React from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const CtaFooter = () => {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-gradient-to-b from-transparent via-black to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 p-6 sm:p-10 bg-white/5"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold">Ready to take off?</h3>
              <p className="mt-2 text-white/70">Book a demo or subscribe for updates on releases, regulations, and pilot tips. No spam — ever.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-300" /> 14‑day pilot program</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-300" /> SaaS mission control</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-cyan-300" /> Global support</li>
              </ul>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-3"
              aria-label="Contact form"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Email</label>
                  <div className="flex items-center gap-2 px-3 py-3 rounded-md bg-black/60 border border-white/15">
                    <Mail size={16} className="text-white/60" />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full bg-transparent outline-none text-sm placeholder:text-white/40"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="shrink-0 px-5 py-3 rounded-md bg-white text-black font-medium hover:opacity-90 transition"
                >
                  Notify me
                </button>
              </div>
              <p className="text-xs text-white/50">By subscribing you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} AeroNova Robotics Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CtaFooter;
