import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { portals } from "@/data/setu";

const siteLinks = [
  { label: "Services", to: "/", hash: "services" },
  { label: "Products", to: "/products/setu-systems" },
  { label: "Industries", to: "/", hash: "industries" },
  { label: "Approach", to: "/approach" },
  { label: "Results", to: "/results" },
  { label: "Insights", to: "/", hash: "insights" },
  { label: "About", to: "/", hash: "about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--tint)]">
      <div className="container-page grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Wordmark className="text-2xl" />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            From AI curiosity to AI capability.
          </p>
        </div>

        <nav aria-label="Site">
          <h2 className="label-mono">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {siteLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={"hash" in l ? l.hash : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Setu Systems">
          <h2 className="label-mono">Setu Systems</h2>
          <ul className="mt-4 space-y-2.5">
            {portals.map((p) => (
              <li key={p.id}>
                <Link
                  to="/products/setu-systems"
                  hash={p.id}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {p.name.replace("Setu ", "")}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 3ylabs. All rights reserved.</p>
          <p>Privacy</p>
        </div>
      </div>
    </footer>
  );
}
