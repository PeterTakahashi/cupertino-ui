import { CodeBlock } from "@/components/site/code-block";
import { siteConfig } from "@/lib/docs";

export const metadata = { title: "Installation" };

export default function InstallationPage() {
  const base = siteConfig.registryBase;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-large-title tracking-tight">Installation</h1>
        <p className="text-body text-secondary-label">
          Works in any React project with Tailwind CSS v4. Next.js shown here.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">1. Set up shadcn</h2>
        <p className="text-callout">
          If your project doesn&apos;t have a <code className="font-mono text-footnote">components.json</code> yet:
        </p>
        <CodeBlock code="npx shadcn@latest init" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">2. Add the theme tokens</h2>
        <p className="text-callout">
          The components read Apple&apos;s system colors, type scale, and
          materials from CSS tokens. Install them once:
        </p>
        <CodeBlock code={`npx shadcn@latest add ${base}/r/theme.json`} />
        <p className="text-callout">
          This places <code className="font-mono text-footnote">cupertino-ui-theme.css</code> in
          your project root. Import it in your global stylesheet, after
          Tailwind:
        </p>
        <CodeBlock
          code={`@import "tailwindcss";\n@import "tw-animate-css";\n@import "../cupertino-ui-theme.css";`}
        />
        <CodeBlock code="npm install tw-animate-css" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">3. Add components</h2>
        <CodeBlock code={`npx shadcn@latest add ${base}/r/button.json`} />
        <p className="text-callout">
          The source lands in <code className="font-mono text-footnote">components/ui/</code>.
          It&apos;s yours now — edit it freely.
        </p>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button";\n\n<Button variant="tinted">Continue</Button>`}
        />
      </section>
    </article>
  );
}
