import Link from "next/link";

import { components } from "@/lib/docs";

export const metadata = { title: "Introduction" };

export default function DocsPage() {
  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-large-title tracking-tight">Introduction</h1>
        <p className="text-body text-secondary-label">
          apple-ui brings Apple&apos;s design language to the web: React
          components styled after SwiftUI on iOS and macOS, distributed the
          shadcn way — you install the source and own it.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">Why</h2>
        <p className="text-callout leading-relaxed">
          SwiftUI apps look and feel right because they inherit decades of
          refinement: the SF type scale, the system color palette with its
          label hierarchy, translucent materials, hairline separators, and
          controls with exact, familiar proportions. apple-ui reproduces those
          decisions as Tailwind CSS tokens and Radix-based components.
        </p>
        <p className="text-callout leading-relaxed">
          Like shadcn/ui, this is not a package you depend on. Each component
          is a file the CLI copies into your project. Change anything.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">Components</h2>
        <ul className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {components.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/docs/components/${c.slug}`}
                className="block rounded-[7px] px-2.5 py-1.5 text-subheadline text-blue hover:bg-fill-quaternary"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
