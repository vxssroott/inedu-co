import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.06_265)] text-white/80">
      <div className="h-1 bg-[var(--gradient-accent-bar)]" />
      <div className="container-pro py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative h-12 w-12 shrink-0">
              <div className="absolute inset-0 rounded-sm bg-white/10 border border-white/20 flex items-center justify-center">
                <span className="font-serif text-white text-lg font-bold">IPS</span>
              </div>
              <div className="absolute -bottom-0.5 left-1 right-1 h-0.5 bg-secondary" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-lg font-bold text-white">INEDU & CO</div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Professional Services
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/65 max-w-sm">
            A duly registered Nigerian professional services firm delivering reliable,
            ethical, and results-driven support to individuals, SMEs, and corporate
            organizations.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-5">
            Navigation
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-white transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold tracking-[0.2em] uppercase text-white mb-5">
            Executive Office
          </h4>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Prince Sunny Inedu</div>
            <div className="text-white/60 text-xs uppercase tracking-wider mb-3">MD/CEO</div>
            <a href="tel:+2348033243379" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> 0803 324 3379
            </a>
            <a href="tel:+2348117917844" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" /> 0811 791 7844
            </a>
            <a
              href="mailto:richsunny24@gmail.com"
              className="flex items-center gap-2 hover:text-white break-all"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" /> richsunny24@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro py-6 text-center text-xs tracking-wider text-white/50">
          © 2024 INEDU & CO PROFESSIONAL SERVICES. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
