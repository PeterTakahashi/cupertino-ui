"use client";

import Link from "next/link";

import { components } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";

export default function DocsPage() {
  const { dict } = useI18n();
  const t = dict.intro;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-large-title tracking-tight">{t.title}</h1>
        <p className="text-body text-secondary-label">{t.lead}</p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.whyTitle}</h2>
        <p className="text-callout leading-relaxed">{t.whyP1}</p>
        <p className="text-callout leading-relaxed">{t.whyP2}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.componentsTitle}</h2>
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
