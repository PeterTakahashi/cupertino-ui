"use client";

import { CodeBlock } from "@/components/site/code-block";
import { siteConfig } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";

export default function InstallationPage() {
  const base = siteConfig.registryBase;
  const { dict } = useI18n();
  const t = dict.install;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-large-title tracking-tight">{t.title}</h1>
        <p className="text-body text-secondary-label">{t.lead}</p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.s1}</h2>
        <p className="text-callout">{t.s1p}</p>
        <CodeBlock code="npx shadcn@latest init" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.s2}</h2>
        <p className="text-callout">{t.s2p1}</p>
        <CodeBlock code={`npx shadcn@latest add --overwrite ${base}/r/theme.json`} />
        <p className="text-callout">{t.s2p2}</p>
        <CodeBlock
          code={`@import "tailwindcss";\n@import "tw-animate-css";\n@import "../cupertino-ui-theme.css";`}
        />
        <CodeBlock code="npm install tw-animate-css" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.s3}</h2>
        <CodeBlock code={`npx shadcn@latest add ${base}/r/button.json`} />
        <p className="text-callout">{t.s3p}</p>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button";\n\n<Button variant="tinted">Continue</Button>`}
        />
      </section>
    </article>
  );
}
