"use client";

import { CodeBlock } from "@/components/site/code-block";
import { siteConfig } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";

export function SkillsContent({
  skillSource,
  catalogSource,
}: {
  skillSource: string;
  catalogSource: string;
}) {
  const { dict } = useI18n();
  const t = dict.skills;
  const base = siteConfig.registryBase;

  return (
    <article className="flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-large-title tracking-tight">{t.title}</h1>
        <p className="text-body text-secondary-label">{t.lead}</p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.whatTitle}</h2>
        <p className="text-callout leading-relaxed">{t.whatBody}</p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.learnsTitle}</h2>
        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-callout leading-relaxed marker:text-tertiary-label">
          {t.learns.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.installCliTitle}</h2>
        <p className="text-callout">{t.installCliBody}</p>
        <CodeBlock code={`npx shadcn@latest add ${base}/r/skill.json`} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.installUserTitle}</h2>
        <p className="text-callout">{t.installUserBody}</p>
        <CodeBlock
          code={`npx shadcn@latest add ${base}/r/skill.json\nmkdir -p ~/.claude/skills && cp -r .claude/skills/cupertino-ui ~/.claude/skills/`}
        />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-title-3">{t.contentsTitle}</h2>
        <p className="text-callout">{t.contentsBody}</p>
        <p className="text-footnote font-semibold text-secondary-label">SKILL.md</p>
        <CodeBlock code={skillSource} collapsible />
        <p className="text-footnote font-semibold text-secondary-label">
          references/components.md
        </p>
        <CodeBlock code={catalogSource} collapsible />
      </section>
    </article>
  );
}
