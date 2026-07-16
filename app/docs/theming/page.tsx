import { CodeBlock } from "@/components/site/code-block";

export const metadata = { title: "Theming" };

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
  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-large-title tracking-tight">Theming</h1>
        <p className="text-body text-secondary-label">
          Every token is a CSS variable, so restyling is an override away.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">System colors</h2>
        <p className="text-callout">
          The full HIG palette, with separate light and dark values. Use them
          as Tailwind colors: <code className="font-mono text-footnote">bg-blue</code>,{" "}
          <code className="font-mono text-footnote">text-secondary-label</code>,{" "}
          <code className="font-mono text-footnote">bg-fill-tertiary</code>.
        </p>
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
        <h2 className="text-title-3">Dark mode</h2>
        <p className="text-callout">
          Toggle the <code className="font-mono text-footnote">dark</code> class on{" "}
          <code className="font-mono text-footnote">&lt;html&gt;</code>. All tokens swap to
          their dark values — components need no changes.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">Changing the accent</h2>
        <p className="text-callout">
          Components tint with <code className="font-mono text-footnote">--system-blue</code>{" "}
          by default. Point it at another system color (or your brand color)
          to re-tint everything:
        </p>
        <CodeBlock
          code={`:root {\n  --system-blue: var(--system-indigo);\n}\n.dark {\n  --system-blue: var(--system-indigo);\n}`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">Type scale</h2>
        <p className="text-callout">
          The SF text styles ship as utilities:{" "}
          <code className="font-mono text-footnote">text-large-title</code>,{" "}
          <code className="font-mono text-footnote">text-title-1…3</code>,{" "}
          <code className="font-mono text-footnote">text-headline</code>,{" "}
          <code className="font-mono text-footnote">text-body</code>,{" "}
          <code className="font-mono text-footnote">text-callout</code>,{" "}
          <code className="font-mono text-footnote">text-subheadline</code>,{" "}
          <code className="font-mono text-footnote">text-footnote</code>,{" "}
          <code className="font-mono text-footnote">text-caption-1</code>,{" "}
          <code className="font-mono text-footnote">text-caption-2</code> — each
          with the HIG size, line height, and SF tracking.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">Materials</h2>
        <p className="text-callout">
          Translucent blur layers matching SwiftUI&apos;s materials:{" "}
          <code className="font-mono text-footnote">material-ultrathin</code>,{" "}
          <code className="font-mono text-footnote">material-thin</code>,{" "}
          <code className="font-mono text-footnote">material-regular</code>,{" "}
          <code className="font-mono text-footnote">material-thick</code>.
        </p>
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
