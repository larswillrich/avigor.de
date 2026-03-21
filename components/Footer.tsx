export default function Footer() {
  return (
    <footer className="bg-indigo-deep border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                <path d="M14 38L24 12L34 38H29L24 24L19 38H14Z" fill="#84CC16"/>
                <circle cx="24" cy="14" r="3" fill="#84CC16"/>
                <rect x="19" y="30" width="10" height="2.5" rx="1.25" fill="#84CC16" opacity="0.5"/>
              </svg>
              <span className="text-lime font-bold tracking-widest text-sm">AVIGOR</span>
            </span>
            <span className="text-white/20 text-xs">
              UG (haftungsbeschr&auml;nkt) &middot; Goeckestr. 32A, 13055
              Berlin
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-white/30">
            <a href="#" className="hover:text-white/60 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Datenschutz
            </a>
            <span>&copy; 2024&ndash;2026 AVIGOR</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
