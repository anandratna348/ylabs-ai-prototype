import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createFileRoute } from "@tanstack/react-router";
import { Database, GitBranch, Rocket } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results: Proof in Production | 3ylabs" },
      {
        name: "description",
        content:
          "How 3ylabs powers AscendHSI's immigration case operations end to end with Setu portals, AI in daily workflows and managed cloud infrastructure.",
      },
      { property: "og:title", content: "Results: Proof in Production | 3ylabs" },
      {
        property: "og:description",
        content: "AscendHSI runs case management, client ticketing and billing on Setu portals.",
      },
    ],
  }),
  component: ResultsPage,
});

const outcomes = [
  {
    icon: Database,
    title: "One source of truth",
    body: "For a distributed team.",
  },
  {
    icon: GitBranch,
    title: "Faster client response",
    body: "More connected operational workflows.",
  },
  {
    icon: Rocket,
    title: "Operations that scale",
    body: "A production backbone built for growth.",
  },
];

function ResultsPage() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "Results" }]} />
      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Results</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Proof in <span className="text-gradient-brand">production.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Real operations, running every day on platforms we build and operate.
          </p>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label-mono">Featured client</p>
            <h2 className="mt-3 text-3xl font-bold">AscendHSI</h2>
            <p className="mt-2 text-sm text-muted-foreground">An immigration case operations firm.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["SETU VANTAGE", "SETU TICKETS", "SETU FINANCE", "MANAGED CLOUD"].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] tracking-widest text-[var(--brand-deep)]"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-foreground">
              3ylabs powers AscendHSI's operations end to end, replacing spreadsheets and
              disconnected trackers with Setu portals for case management, client ticketing and
              billing. AI is integrated into daily workflows with human review before anything
              reaches a customer, and 3ylabs operates the underlying cloud infrastructure.
            </p>

            <dl className="mt-10 divide-y divide-border border-y border-border">
              {outcomes.map((o) => (
                <div key={o.title} className="flex items-start gap-4 py-6">
                  <o.icon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand)]" aria-hidden />
                  <div className="min-w-0">
                    <dt className="font-display text-base font-semibold text-primary">{o.title}</dt>
                    <dd className="mt-1 text-sm text-muted-foreground">{o.body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>


      <CTASection />
    </main>
  );
}
