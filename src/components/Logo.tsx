import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/inedu-logo.jpeg";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-12 w-12 shrink-0 rounded-sm overflow-hidden bg-black ring-1 ring-border">
        <img
          src={logoImg}
          alt="INEDU & CO Professional Services logo"
          className="h-full w-full object-cover"
          width={48}
          height={48}
        />
      </div>
      <div className="leading-tight">
        <div className={`font-serif text-base sm:text-lg font-bold tracking-tight ${text}`}>
          INEDU & CO
        </div>
        <div className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase ${sub}`}>
          Professional Services
        </div>
      </div>
    </Link>
  );
}
