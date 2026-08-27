import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Building2,
  Cloud,
  Factory,
  Gavel,
  HeartPulse,
  Landmark,
  Layers,
  LineChart,
  Scale,
  Shield,
  Sparkles,
} from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { PortalExplorer } from "@/components/PortalExplorer";
import { SetuArchitecture } from "@/components/SetuArchitecture";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3ylabs — From AI Curiosity to AI Capability" },
      {
        name: "description",
        content:
          "3ylabs helps organizations turn AI ambition into secure, scalable products and intelligent operations — from strategy through production.",
      },
      { property: "og:title", content: "3ylabs — From AI Curiosity to AI Capability" },
      {
        property: "og:description",
        content:
          "AI transformation services, AI-native product engineering, legal-tech solutions and cloud delivery.",
      },
    ],
  }),
  component: Home,
});

const abr = [
  {
    key: "Advise",
    icon: LineChart,
    body: "Identify where AI can create measurable business value.",
  },
  {
    key: "Build",
    icon: Layers,
    body: "Engineer AI-native products, agents, copilots and intelligent systems.",
  },
  {
    key: "Run",
    icon: Cloud,
    body: "Operate secure platforms, cloud infrastructure and AI systems in production.",
  },
];

const services = [
  {
    icon: Sparkles,
    title: "AI Transformation Services",
    body: "AI opportunity discovery, readiness assessments, enterprise AI roadmaps and responsible AI governance.",
  },
  {
    icon: Brain,
    title: "AI-Native Product Engineering",
    body: "Agentic applications, generative AI, copilots, RAG, custom SaaS and intelligent document processing.",
  },
  {
    icon: Scale,
    title: "Legal-Tech Solutions",
    body: "Case management, client intake, ticketing, billing, evidence intelligence and AI-assisted drafting.",
  },
  {
    icon: Shield,
    title: "Platform, Cloud & Web Delivery",
    body: "Websites, portals, cloud architecture, modernization, DevOps, MLOps and security.",
  },
];

const industries = [
  { icon: Gavel, name: "Legal", featured: true },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Shield, name: "Insurance" },
  { icon: Landmark, name: "Financial Services" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Building2, name: "Professional Services" },
];

const insights = [
  {
    category: "AI Transformation Playbooks",
    title: "Where AI Creates Real Enterprise Value",
    body: "A practical way to separate AI experiments from initiatives that change the operating model.",
  },
  {
    category: "Responsible AI",
    title: "Designing Responsible AI Workflows",
    body: "Human review, traceability and role-aware access as design constraints, not afterthoughts.",
  },
  {
    category: "Build Notes",
    title: "What We Learned Building AI-Native Operations",
    body: "Lessons from putting agents, document intelligence and copilots into daily production use.",
  },
];

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="label-mono">
              AI Transformation • AI-Native Products • Production
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
              From AI curiosity to <span className="text-gradient-brand">AI capability.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              3ylabs helps organizations turn AI ambition into secure, scalable products and
              intelligent operations — from strategy through production.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                Book an AI Readiness Assessment
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/products/setu-systems"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Explore Setu Systems
              </Link>
            </div>
          </div>
          <div className="animate-fade-up lg:pl-6">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* ADVISE BUILD RUN */}
      <section className="container-page py-16 sm:py-20">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] md:grid-cols-3">
          {abr.map((c, i) => (
            <div
              key={c.key}
              className={`group bg-card p-8 transition-colors hover:bg-[var(--tint)] ${
                i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tint)] transition-colors group-hover:bg-background">
                  <c.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                </span>
                <h2 className="font-display text-lg font-bold uppercase tracking-wide text-primary">
                  {c.key}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container-page scroll-mt-20 py-16 sm:py-20">
        <p className="label-mono">Services</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          Where AI becomes operational.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="surface-card p-7 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--tint)]">
                <s.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* SETU */}
      <section id="products" className="scroll-mt-20 bg-[var(--tint)] py-16 sm:py-24">
        <div className="container-page">
          <p className="label-mono">Setu Systems</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            One intelligent platform. Every part of the operation.
          </h2>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground">
            Setu Systems gives you a portal for every part of your operation — cases, billing,
            client inquiries, evidence, and insight — with AI woven through all of it.
          </p>
          <p className="mt-3 text-sm font-medium text-primary">
            Start with one portal. Add the rest as you grow.
          </p>

          <div className="mt-12">
            <PortalExplorer />
          </div>

          <div className="mt-16">
            <SetuArchitecture />
          </div>

          <div className="mt-10">
            <Link
              to="/products/setu-systems"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              See the full Setu Systems platform <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="container-page scroll-mt-20 py-16 sm:py-24">
        <p className="label-mono">Industries</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
          AI that fits the way your industry works.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <article
              key={i.name}
              className={`rounded-2xl border p-6 transition-all hover:-translate-y-1 ${
                i.featured
                  ? "border-transparent text-primary-foreground shadow-[var(--shadow-lift)]"
                  : "border-border bg-card shadow-[var(--shadow-soft)]"
              }`}
              style={i.featured ? { background: "var(--gradient-brand)" } : undefined}
            >
              <i.icon
                className={`h-5 w-5 ${i.featured ? "text-primary-foreground" : "text-[var(--brand)]"}`}
                aria-hidden
              />
              <h3
                className={`mt-4 font-display text-lg font-semibold ${i.featured ? "text-primary-foreground" : ""}`}
              >
                {i.name}
              </h3>
              {i.featured && (
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-primary-foreground/80">
                  Deepest domain focus
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* HEM */}
      <section id="about" className="scroll-mt-20 border-y border-border bg-[var(--tint)] py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="label-mono">HEM / Hyper Enabled Minds</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              AI should amplify people, not replace them.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              We believe artificial intelligence should amplify human capability, accelerate
              innovation and enable smarter decisions — not replace the people behind them.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in oklab, var(--cyan) 35%, transparent), transparent 70%)",
              }}
            />
            <div className="relative grid gap-3 sm:grid-cols-2">
              {["Human judgment", "Machine speed", "Governed by design", "Measurable outcomes"].map(
                (t) => (
                  <div key={t} className="rounded-xl border border-border bg-background px-4 py-5">
                    <p className="font-display text-sm font-semibold text-primary">{t}</p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section id="insights" className="container-page scroll-mt-20 py-16 sm:py-24">
        <p className="label-mono">Insights</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Notes from the work.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {insights.map((a) => (
            <article
              key={a.title}
              className="surface-card flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <p className="label-mono">{a.category}</p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
