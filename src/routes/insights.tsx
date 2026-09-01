import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import cover from "@/assets/insight-cover.jpg";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Notes on Applied Enterprise AI" },
      {
        name: "description",
        content:
          "Practical writing from the 3ylabs team on AI transformation playbooks, responsible AI and what we learn building AI-native operations.",
      },
      { property: "og:title", content: "Insights | 3ylabs" },
      { property: "og:description", content: "Notes from the work: playbooks, responsible AI and build notes." },
    ],
  }),
  component: Insights,
});

const posts = [
  {
    pillar: "AI Transformation Playbooks",
    title: "Where AI Creates Real Enterprise Value",
    body: "A practical way to separate AI experiments from initiatives that change the operating model, and how to score them before anyone writes code.",
    read: "6 min read",
  },
  {
    pillar: "Responsible AI",
    title: "Designing Responsible AI Workflows",
    body: "Human review, traceability and role-aware access belong in the architecture, not in a policy document written after launch.",
    read: "5 min read",
  },
  {
    pillar: "Build Notes",
    title: "What We Learned Building AI-Native Operations",
    body: "Lessons from putting agents, document intelligence and copilots into daily production use inside a working firm.",
    read: "8 min read",
  },
  {
    pillar: "AI Transformation Playbooks",
    title: "The Readiness Assessment, Explained",
    body: "What happens in the two to three weeks between a first conversation and a costed roadmap you can act on.",
    read: "4 min read",
  },
];

function Insights() {
  const featured = posts[0]!;
  const rest = posts.slice(1);

  return (
    <main>
      <Breadcrumbs items={[{ label: "Insights" }]} />

      <section className="container-page py-14 sm:py-20">
        <Reveal>
          <p className="label-mono">Insights</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">Notes from the work.</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Three pillars: transformation playbooks, responsible AI, and build notes from our own
            products.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <article className="grid overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-lift)] lg:grid-cols-2">
            <img
              src={cover}
              alt="Abstract data visualization in blue and teal"
              loading="lazy"
              width={1200}
              height={800}
              className="h-56 w-full object-cover lg:h-full"
            />
            <div className="bg-card p-8 sm:p-10">
              <p className="label-mono">{featured.pillar}</p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{featured.body}</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {featured.read}
              </p>
            </div>
          </article>
        </Reveal>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {rest.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 60}>
              <div className="group flex cursor-pointer flex-col gap-2 py-7 sm:flex-row sm:items-center sm:gap-8">
                <span className="label-mono sm:w-56">{p.pillar}</span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-semibold transition-colors group-hover:text-[var(--brand)] sm:text-xl">
                    {p.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </span>
                </span>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-[var(--brand)] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-xs text-muted-foreground">
          Full articles publish with the production site. This prototype shows the structure and
          editorial pillars.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
        >
          Get these in your inbox
        </Link>
      </section>

      <CTASection />
    </main>
  );
}
