import { Phone, Mail, ShieldCheck } from "lucide-react";

const phones = ["0803 324 3379", "0811 791 7844", "0706 775 5099"];
const emails = ["richsunny24@gmail.com", "s.inedu247@gmail.com"];

const telHref = (n: string) => `tel:+234${n.replace(/\s/g, "").replace(/^0/, "")}`;

export function ExecutiveContactCard({ variant = "elevated" }: { variant?: "elevated" | "plain" }) {
  return (
    <div
      className={`relative rounded-sm border border-border bg-card p-8 sm:p-10 ${
        variant === "elevated" ? "shadow-[var(--shadow-elegant)]" : ""
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent-bar rounded-t-sm" />
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-secondary mb-2">
            Executive Office
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            Prince Sunny Inedu
          </h3>
          <div className="text-sm font-semibold tracking-wider uppercase text-muted-foreground mt-1">
            MD / CEO
          </div>
        </div>
        <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-sm bg-brand-primary">
          <ShieldCheck className="h-7 w-7 text-white" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-border">
        <div>
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Direct Lines
          </div>
          <ul className="space-y-2.5">
            {phones.map((p) => (
              <li key={p}>
                <a
                  href={telHref(p)}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-semibold tracking-wide">{p}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Email
          </div>
          <ul className="space-y-2.5">
            {emails.map((e) => (
              <li key={e}>
                <a
                  href={`mailto:${e}`}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group break-all"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-medium text-sm">{e}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
