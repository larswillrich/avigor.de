export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-ivory/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-amber-brand font-bold tracking-widest text-sm">
              AVIGOR
            </span>
            <span className="text-ivory/20 text-xs">
              UG (haftungsbeschr&auml;nkt) &middot; Goeckestr. 32A, 13055
              Berlin
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-ivory/30">
            <a href="#" className="hover:text-ivory/60 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-ivory/60 transition-colors">
              Datenschutz
            </a>
            <span>&copy; 2024&ndash;2026 AVIGOR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
