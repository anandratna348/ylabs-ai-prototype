import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const links: { label: string; to: "/" | "/products/setu-systems" | "/approach" | "/results"; hash?: string }[] = [
  { label: "Services", to: "/", hash: "services" },
  { label: "Products", to: "/products/setu-systems" },
  { label: "Industries", to: "/", hash: "industries" },
  { label: "Approach", to: "/approach" },
  { label: "Results", to: "/results" },
  { label: "Insights", to: "/", hash: "insights" },
  { label: "About", to: "/", hash: "about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_20px_-8px_rgba(0,41,112,0.25)]" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className="container-page flex h-16 items-center justify-between gap-4"
      >
        <Link to="/" className="shrink-0" aria-label="3ylabs home">
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                {...(l.hash ? { hash: l.hash } : {})}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                activeOptions={{ exact: false }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
          >
            Book an AI Readiness Assessment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-primary lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book an AI Readiness Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
