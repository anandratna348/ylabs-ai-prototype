import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { portals } from "@/data/setu";
import { PortalExplorer } from "@/components/PortalExplorer";
import { SetuArchitecture } from "@/components/SetuArchitecture";
import { DemoModal } from "@/components/DemoModal";
import { CTASection } from "@/components/CTASection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export const Route = createFileRoute("/products/setu-systems")({
  head: () => ({
    meta: [
      { title: "Setu Systems: One Intelligent Platform for Your Firm | 3ylabs" },
      {
        name: "description",
        content:
          "Setu Systems gives you a portal for every part of your operation, cases, billing, client inquiries, evidence and insight, with AI woven through all of it.",
      },
      { property: "og:title", content: "Setu Systems: One Intelligent Platform | 3ylabs" },
      {
        property: "og:description",
        content: "Start with one portal and add the rest as you grow.",
      },
    ],
  }),
  component: SetuPage,
});

function SetuPage() {
  const [demo, setDemo] = useState<string | null>(null);

  return (
    <main>
      <Breadcrumbs items={[{ label: "Products" }, { label: "Setu Systems" }]} />
      <section className="border-b border-border bg-[var(--gradient-tint)]">
        <div className="container-page py-16 sm:py-24">
          <p className="label-mono">Setu Systems</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Run your firm on one <span className="text-gradient-brand">intelligent platform.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Setu Systems gives you a portal for every part of your operation, cases, billing,
            client inquiries, evidence, and insight, with AI woven through all of it.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Setu means "bridge" in Sanskrit, the bridge between business functions, and between
            people and intelligent systems. Built by the team at 3ylabs, proven in production with
            real legal-tech operations, and ready for any business that runs on documents,
            deadlines and trust.
          </p>
          <p className="mt-4 text-sm font-medium text-primary">
            Start with one portal and add the rest as you grow. 3ylabs provides implementation and
            customization for every portal.
          </p>

        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Six portals. One platform.</h2>
        <Carousel opts={{ align: "start" }} className="mt-8">
          <CarouselContent className="-ml-4">
            {portals.map((p) => (
              <CarouselItem key={p.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                <article id={p.id} className="flex h-full scroll-mt-24 flex-col border-t border-border pt-5">
                  <p className="label-mono">{p.label}</p>
                  <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                  <p className="mt-4 text-sm font-medium text-[var(--brand-deep)]">✓ {p.benefits[0]}</p>
                  <button
                    type="button"
                    onClick={() => setDemo(p.name)}
                    className="mt-5 inline-flex cursor-pointer items-center gap-2 self-start text-sm font-semibold text-[var(--brand)] hover:underline"
                  >
                    Request a demo
                  </button>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex gap-2">
            <CarouselPrevious className="static translate-y-0 cursor-pointer" />
            <CarouselNext className="static translate-y-0 cursor-pointer" />
          </div>
        </Carousel>
      </section>


      <section className="bg-[var(--tint)] py-16 sm:py-20">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Explore the platform</h2>
          <div className="mt-8">
            <PortalExplorer />
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <h2 className="text-3xl font-bold">Platform architecture</h2>
        <div className="mt-8">
          <SetuArchitecture />
        </div>
      </section>

      <CTASection />
      {demo && <DemoModal product={demo} onClose={() => setDemo(null)} />}
    </main>
  );
}
