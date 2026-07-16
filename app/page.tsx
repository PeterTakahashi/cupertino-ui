import Link from "next/link";

import { HeroWindow } from "@/components/site/hero-window";
import { SiteHeader } from "@/components/site/site-header";
import { CodeBlock } from "@/components/site/code-block";
import { Button } from "@/registry/apple-ui/button";
import { components, siteConfig } from "@/lib/docs";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_srgb,var(--system-blue)_9%,transparent),transparent)]"
          />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 pb-16 pt-20 text-center">
            <h1 className="max-w-2xl text-balance text-[44px] font-bold leading-[1.06] tracking-[-0.02em] sm:text-[56px]">
              SwiftUI&apos;s design language.
              <br />
              Your React codebase.
            </h1>
            <p className="max-w-xl text-balance text-title-3 font-normal text-secondary-label">
              Apple HIG–accurate components on Tailwind CSS and Radix.
              Installed as source with the shadcn CLI — you own every line.
            </p>
            <div className="flex items-center gap-3">
              <Button size="lg" asChild className="w-44">
                <Link href="/docs/installation">Get Started</Link>
              </Button>
              <Button size="lg" variant="gray" asChild className="w-44">
                <a href={siteConfig.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            </div>
            <p className="text-footnote text-tertiary-label">
              {`${components.length} components · light & dark · MIT license`}
            </p>
          </div>

          {/* Live window — every control below is a real, working component */}
          <div className="relative mx-auto flex max-w-4xl justify-center px-5 pb-24">
            <HeroWindow />
          </div>
        </section>

        {/* Install */}
        <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 pb-24">
          <h2 className="text-title-1 tracking-tight">Install like shadcn/ui</h2>
          <p className="max-w-lg text-center text-callout text-secondary-label">
            No package to depend on. The CLI copies the component source into
            your project, styled with Apple&apos;s system tokens.
          </p>
          <div className="w-full max-w-xl">
            <CodeBlock
              code={`npx shadcn@latest add ${siteConfig.registryBase}/r/button.json`}
            />
          </div>
        </section>

        {/* Principles */}
        <section className="bg-grouped">
          <div className="mx-auto grid max-w-4xl gap-10 px-5 py-20 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="text-headline">HIG-accurate tokens</h3>
              <p className="text-subheadline text-secondary-label">
                The real system palette, label hierarchy, SF type scale with
                exact tracking, hairline separators, and translucent materials.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-headline">Own the code</h3>
              <p className="text-subheadline text-secondary-label">
                Components are files in your repo, not a dependency. Restyle a
                switch or rebuild a sheet without fighting a library.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-headline">Light and dark, free</h3>
              <p className="text-subheadline text-secondary-label">
                Every token has light and dark values, just like UIKit&apos;s
                dynamic colors. Toggle one class and everything follows.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="shadow-[0_-0.5px_0_0_var(--separator)]">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-5 py-8 text-footnote text-tertiary-label">
          <span>
            apple-ui — an independent open-source project, not affiliated with
            Apple Inc.
          </span>
          <a href={siteConfig.github} className="hover:text-secondary-label">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
