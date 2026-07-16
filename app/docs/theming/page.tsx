"use client";

import { CodeBlock } from "@/components/site/code-block";
import { useI18n } from "@/lib/i18n";

const swatches: { name: string; varName: string }[] = [
  { name: "blue", varName: "--system-blue" },
  { name: "red", varName: "--system-red" },
  { name: "green", varName: "--system-green" },
  { name: "orange", varName: "--system-orange" },
  { name: "yellow", varName: "--system-yellow" },
  { name: "teal", varName: "--system-teal" },
  { name: "cyan", varName: "--system-cyan" },
  { name: "mint", varName: "--system-mint" },
  { name: "indigo", varName: "--system-indigo" },
  { name: "purple", varName: "--system-purple" },
  { name: "pink", varName: "--system-pink" },
  { name: "brown", varName: "--system-brown" },
];

export default function ThemingPage() {
  const { dict } = useI18n();
  const t = dict.theming;
  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-large-title tracking-tight">{t.title}</h1>
        <p className="text-body text-secondary-label">
          {t.lead}
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.colors}</h2>
        <p className="text-callout">{t.colorsP}</p>
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-6">
          {swatches.map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-1.5">
              <div
                className="h-12 w-full rounded-[10px] shadow-[inset_0_0_0_0.5px_var(--separator)]"
                style={{ backgroundColor: `var(${s.varName})` }}
              />
              <span className="text-caption-2 text-secondary-label">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.dark}</h2>
        <p className="text-callout">{t.darkP}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.accent}</h2>
        <p className="text-callout">{t.accentP}</p>
        <CodeBlock
          code={`:root {\n  --system-blue: var(--system-indigo);\n}\n.dark {\n  --system-blue: var(--system-indigo);\n}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.type}</h2>
        <p className="text-callout">{t.typeP}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.materials}</h2>
        <p className="text-callout">{t.materialsP}</p>
        <div className="relative h-40 overflow-hidden rounded-[var(--radius-group)] bg-[linear-gradient(120deg,var(--system-purple),var(--system-blue),var(--system-teal))]">
          <div className="absolute inset-x-6 top-5 flex h-11 items-center rounded-[12px] px-4 text-footnote material-ultrathin">
            ultrathin
          </div>
          <div className="absolute inset-x-6 top-[74px] flex h-11 items-center rounded-[12px] px-4 text-footnote material-regular">
            regular
          </div>
          <div className="absolute inset-x-6 top-[122px] flex h-11 items-center rounded-[12px] px-4 text-footnote material-thick">
            thick
          </div>
        </div>
      </section>
    </article>
  );
}
