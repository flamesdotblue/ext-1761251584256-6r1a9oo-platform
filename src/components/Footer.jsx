export default function Footer() {
  return (
    <footer id="support" className="mt-16 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm text-slate-400 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} AeroNova. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
}
