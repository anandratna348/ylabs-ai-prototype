import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cloud, Layers, LineChart } from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { PortalExplorer } from "@/components/PortalExplorer";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import bridgeImage from "@/assets/abstract-bridge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3ylabs | From AI Curiosity to AI Capability" },
      {
        name: "description",
        content:
          "3ylabs helps organizations turn AI ambition into secure, scalable products and intelligent operations, from strategy through production.",
      },
      { property: "og:title", content: "3ylabs | From AI Curiosity to AI Capability" },
      {
        property: "og:description",
        content:
          "AI transformation services, AI-native product engineering, legal-tech solutions and cloud delivery.",
      },
    ],
  }),
  component: Home,
});

const pillars = [
  {
    key: "Advise",
    icon: LineChart,
    body: "We find where AI creates measurable business value, and where it does not.",
    detail: "Opportunity discovery, readiness assessments, enterprise roadmaps and responsible AI governance.",
  },
  {
    key: "Build",
    icon: Layers,
    body: "We engineer AI-native products, agents, copilots and intelligent systems.",
    detail: "Agentic applications, generative AI, RAG, custom SaaS and intelligent document processing.",
  },
  {
    key: "Run",
    icon: Cloud,
    body: "We operate secure platforms and AI systems in production.",
    detail: "Cloud architecture, modernization, DevOps, MLOps, security and managed hosting.",
  },
];

const proof = [
  ["6", "portals live in one platform"],
  ["1", "accountable delivery team"],
  ["5", "stages from discovery to optimization"],
];

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="label-mono">We advise. We build. We run our own products.</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.06] sm:text-5xl lg:text-6xl">
              From AI curiosity to <span className="text-gradient-brand">AI capability.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We turn AI ambition into secure, scalable products and intelligent operations, from
              strategy through production.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                Book an AI Readiness Assessment
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/products/setu-systems"
                className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
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

      {/* ADVISE BUILD RUN, sticky scroll */}
      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="label-mono">How we work</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              One accountable team, three modes.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Most clients start with advice and stay for the build. Some hand us the running of it
              too.
            </p>
            <Link
              to="/approach"
              className="mt-7 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              See the full approach <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <ol className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.key} delay={i * 90}>
                <div className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--tint)] transition-colors duration-300 group-hover:bg-[color-mix(in_oklab,var(--cyan)_18%,white)]">
                      <p.icon className="h-5 w-5 text-[var(--brand)]" aria-hidden />
                    </span>
                    <h3 className="font-display text-lg font-bold uppercase tracking-wide text-primary">
                      {p.key}
                    </h3>
                  </div>
                  <p className="mt-5 text-lg leading-snug text-foreground">{p.body}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SERVICES CAROUSEL */}
      <section className="border-y border-border bg-[var(--tint)] py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label-mono">Services</p>
              <h2 className="mt-3 max-w-xl text-3xl font-bold sm:text-4xl">
                Where AI becomes operational.
              </h2>
            </div>
            <Link
              to="/services"
              className="cursor-pointer text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              All services
            </Link>
          </Reveal>

          <Carousel opts={{ align: "start" }} className="mt-10">
            <CarouselContent className="-ml-4">
              {services.map((s) => (
                <CarouselItem key={s.slug} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group flex h-full cursor-pointer flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                  >
                    <p className="label-mono">{s.kind === "core" ? "Core" : "Extended"}</p>
                    <h3 className="mt-4 font-display text-xl font-semibold leading-snug">{s.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {s.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
                      Explore
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </span>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex gap-2">
              <CarouselPrevious className="static translate-y-0 cursor-pointer" />
              <CarouselNext className="static translate-y-0 cursor-pointer" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* SETU */}
      <section className="container-page py-16 sm:py-24">
        <Reveal>
          <p className="label-mono">Setu Systems</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            One intelligent platform. Every part of the operation.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Setu means bridge in Sanskrit: the bridge between business functions, and between people
            and intelligent systems. Start with one portal, add the rest as you grow.
          </p>
        </Reveal>

        <div className="mt-12">
          <PortalExplorer />
        </div>

        <div className="mt-10">
          <Link
            to="/products/setu-systems"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            See the full platform <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </section>

      {/* PROOF */}
      <section className="relative overflow-hidden border-y border-border bg-[var(--tint)]">
        <img
          src={bridgeImage}
          alt=""
          aria-hidden
          loading="lazy"
          width={1600}
          height={1000}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="container-page relative grid gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="label-mono">Proof</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Built in the open, run in production.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
              AscendHSI runs its case, billing and evidence operations on Setu Systems. The same
              platform we advise from is the one we operate.
            </p>
            <Link
              to="/results"
              className="mt-7 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
            >
              Read the story <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
          <Reveal delay={80} className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {proof.map(([n, label]) => (
              <div key={label} className="bg-background p-6">
                <p className="font-display text-3xl font-bold text-[var(--brand)]">{n}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
