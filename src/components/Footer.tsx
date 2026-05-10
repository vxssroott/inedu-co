import { Link } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
import logoImg from "@/assets/inedu-logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.06_265)] text-white/80">
      <div className="h-1 bg-[var(--gradient-accent-bar)]" />
      <div className="container-pro py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-14 w-14 shrink-0 rounded-sm overflow-hidden bg-black ring-1 ring-white/15">
              <img src={logoImg} alt="INEDU & CO logo" className="h-full w-full object-cover" width={56} height={56} />
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
              <Phone className="h-3.5 w-3.5" />
              <span>0803 324 3379</span>
            </a>
            <a href="tel:+2348117917844" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              <span>0811 791 7844</span>
            </a>
            <a
              href="mailto:richsunny24@gmail.com"
              className="flex items-center gap-2 hover:text-white break-all"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              <span>richsunny24@gmail.com</span>
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
