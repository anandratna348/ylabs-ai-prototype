import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import teamImage from "@/assets/team-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About 3ylabs | Hyper Enabled Minds" },
      {
        name: "description",
        content:
          "3ylabs advises, builds and runs its own AI products. Our vision, mission and the Hyper Enabled Minds philosophy behind the work.",
      },
      { property: "og:title", content: "About 3ylabs" },
      { property: "og:description", content: "Vision, mission and the Hyper Enabled Minds philosophy." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Human judgment", body: "People stay accountable for decisions that matter." },
  { title: "Machine speed", body: "Automation removes the work that never needed a human." },
  { title: "Governed by design", body: "Traceability and access control ship with version one." },
  { title: "Measurable outcomes", body: "Every engagement carries a number it is judged by." },
];

function About() {
  return (
    <main>
      <Breadcrumbs items={[{ label: "About" }]} />

      <section className="container-page grid items-center gap-12 py-14 lg:grid-cols-2 sm:py-20">
        <Reveal>
          <p className="label-mono">About 3ylabs</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            We advise, we build, and we run our own products.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            That third part is the difference. Setu Systems is our own platform, used in real
            operations, which means our advice comes from running software rather than reading about
            it.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <img
            src={teamImage}
            alt="A small team planning work at a whiteboard in a bright office"
            loading="lazy"
            width={1400}
            height={1000}
            className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)]"
          />
        </Reveal>
      </section>

      <section className="border-y border-border bg-[var(--tint)] py-14 sm:py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <p className="label-mono">Vision</p>
            <p className="mt-3 text-lg leading-relaxed text-foreground">
              To become the most trusted AI transformation partner, empowering organizations to build
              intelligent, secure and scalable digital enterprises.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="label-mono">Mission</p>
            <p className="mt-3 text-lg leading-relaxed text-foreground">
              To help organizations identify the right AI opportunities, engineer practical
              solutions, modernize their platforms and continuously innovate through intelligent
              automation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <Reveal>
          <p className="label-mono">HEM / Hyper Enabled Minds</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
            AI should amplify people, not replace them.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We believe artificial intelligence should amplify human capability, accelerate innovation
            and enable smarter decisions, with the people behind them still in charge.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="bg-card p-6 transition-colors duration-300 hover:bg-[var(--tint)]">
              <h3 className="font-display text-base font-semibold text-primary">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/approach"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-[var(--brand)] hover:underline"
          >
            See how we work <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </section>

      <CTASection />
    </main>
  );
}
