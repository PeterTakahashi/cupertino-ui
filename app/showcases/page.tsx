import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";

export const metadata = {
  title: "Showcases",
  description: "Small, familiar apps built entirely from cupertino-ui components.",
};

const showcases = [
  {
    slug: "music",
    title: "Music",
    description:
      "A desktop music player: sidebar, searchable track table, and a player bar.",
    uses: "Sidebar · Table · Search Field · Slider · Toolbar",
    gradient: "linear-gradient(140deg, #fa5c74, #fa233b)",
    emoji: "♫",
  },
  {
    slug: "mail",
    title: "Mail",
    description:
      "A three-pane mail client with draggable dividers and a reading pane.",
    uses: "Resizable · Sidebar · Scroll Area · Toolbar · Badge",
    gradient: "linear-gradient(140deg, #1d6ff2, #19c8fa)",
    emoji: "✉",
  },
  {
    slug: "reminders",
    title: "Reminders",
    description:
      "An iOS-style to-do app with grouped lists, sheets, and toasts.",
    uses: "List · Checkbox · Segmented Control · Sheet · Toast",
    gradient: "linear-gradient(140deg, #ff9f0a, #ff6482)",
    emoji: "☑",
  },
  {
    slug: "store",
    title: "Store",
    description:
      "A storefront with a paged hero, product cards, and a cart sheet.",
    uses: "Carousel · Card · Stepper · Sheet · Toast · Badge",
    gradient: "linear-gradient(140deg, #32d74b, #0a84ff)",
    emoji: "⌘",
  },
  {
    slug: "fitness",
    title: "Fitness",
    description:
      "An activity dashboard with rings, gauges, and a workout history table.",
    uses: "Gauge · Progress · Table · Segmented Control · Card",
    gradient: "linear-gradient(140deg, #bf5af2, #ff375f)",
    emoji: "◉",
  },
];

export default function ShowcasesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-5 pb-24">
        <header className="flex flex-col gap-2 py-12">
          <h1 className="text-large-title tracking-tight">Showcases</h1>
          <p className="max-w-xl text-body text-secondary-label">
            Small, familiar apps assembled entirely from cupertino-ui
            components — no extra CSS, no backend. Open one and poke around.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcases.map((s) => (
            <Link
              key={s.slug}
              href={`/showcases/${s.slug}`}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-group)] bg-grouped-secondary shadow-[var(--shadow-card)] outline-none transition-transform duration-200 ease-[var(--ease-out-expo)] hover:-translate-y-0.5 focus-visible:ring-[3px] focus-visible:ring-blue/40"
            >
              <div
                className="flex h-32 items-center justify-center text-[44px] text-white/90"
                style={{ background: s.gradient }}
              >
                <span aria-hidden>{s.emoji}</span>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <h2 className="text-headline">{s.title}</h2>
                <p className="text-subheadline text-secondary-label">
                  {s.description}
                </p>
                <p className="mt-2 text-caption-1 text-tertiary-label">
                  {s.uses}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
