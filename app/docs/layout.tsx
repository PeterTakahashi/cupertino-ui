"use client";

import Link from "next/link";

import { SiteHeader } from "@/components/site/site-header";
import { components } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { dict } = useI18n();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 gap-10 px-5">
        <aside className="sticky top-12 hidden max-h-[calc(100dvh-3rem)] w-56 shrink-0 overflow-y-auto py-8 md:block">
          <nav className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="px-2.5 pb-1 text-caption-1 font-semibold uppercase tracking-wide text-tertiary-label">
                {dict.sidebar.gettingStarted}
              </p>
              <SidebarLink href="/docs">{dict.sidebar.introduction}</SidebarLink>
              <SidebarLink href="/docs/installation">
                {dict.sidebar.installation}
              </SidebarLink>
              <SidebarLink href="/docs/theming">{dict.sidebar.theming}</SidebarLink>
            </div>
            <div className="flex flex-col gap-1">
              <p className="px-2.5 pb-1 text-caption-1 font-semibold uppercase tracking-wide text-tertiary-label">
                {dict.sidebar.components}
              </p>
              {components.map((c) => (
                <SidebarLink key={c.slug} href={`/docs/components/${c.slug}`}>
                  {c.title}
                </SidebarLink>
              ))}
            </div>
          </nav>
        </aside>
        <main className="min-w-0 flex-1 py-10">{children}</main>
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="rounded-[7px] px-2.5 py-[5px] text-subheadline text-secondary-label transition-colors hover:bg-fill-quaternary hover:text-label"
    >
      {children}
    </Link>
  );
}
