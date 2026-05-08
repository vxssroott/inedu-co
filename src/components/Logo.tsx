import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-white" : "text-foreground";
  const sub = variant === "light" ? "text-white/70" : "text-muted-foreground";
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative h-12 w-12 shrink-0">
        <div className="absolute inset-0 rounded-sm bg-[var(--gradient-primary)] shadow-[var(--shadow-elegant)]" />
        <div className="absolute inset-[2px] rounded-sm border border-white/20 flex items-center justify-center">
          <span className="font-serif text-white text-lg font-bold tracking-tight">IPS</span>
        </div>
        <div className="absolute -bottom-0.5 left-1 right-1 h-0.5 bg-secondary" />
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
