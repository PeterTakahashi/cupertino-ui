"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { components, siteConfig } from "@/lib/docs";
import { useI18n } from "@/lib/i18n";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/registry/cupertino-ui/sheet";

/**
 * Phone navigation: the header collapses to a hamburger that opens
 * a left drawer with the full site nav — including the docs
 * sections that the desktop sidebar shows.
 */
export function MobileMenu() {
  const { dict } = useI18n();
  const [open, setOpen] = React.useState(false);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Menu"
        className="flex size-8 shrink-0 items-center justify-center rounded-full text-secondary-label outline-none transition-colors hover:bg-fill-tertiary focus-visible:ring-[3px] focus-visible:ring-blue/40 md:hidden"
      >
        <MenuIcon className="size-[18px]" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[290px] max-w-[85vw] gap-0 overflow-y-auto bg-grouped p-4"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>

        <Link
          href="/"
          onClick={close}
          className="px-2.5 pb-4 text-headline tracking-tight"
        >
           cupertino-ui
        </Link>

        <nav className="flex flex-col gap-6 pb-8">
          <div className="flex flex-col gap-0.5">
            <MenuLink href="/docs" onClick={close}>
              {dict.nav.docs}
            </MenuLink>
            <MenuLink href="/components" onClick={close}>
              {dict.nav.components}
            </MenuLink>
            <MenuLink href="/showcases" onClick={close}>
              {dict.nav.showcases}
            </MenuLink>
            <MenuLink href={siteConfig.github} onClick={close} external>
              GitHub
            </MenuLink>
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="px-2.5 pb-1 text-caption-1 font-semibold uppercase tracking-wide text-tertiary-label">
              {dict.sidebar.gettingStarted}
            </p>
            <MenuLink href="/docs" onClick={close}>
              {dict.sidebar.introduction}
            </MenuLink>
            <MenuLink href="/docs/installation" onClick={close}>
              {dict.sidebar.installation}
            </MenuLink>
            <MenuLink href="/docs/theming" onClick={close}>
              {dict.sidebar.theming}
            </MenuLink>
            <MenuLink href="/docs/skills" onClick={close}>
              {dict.sidebar.skills}
            </MenuLink>
          </div>

          <div className="flex flex-col gap-0.5">
            <p className="px-2.5 pb-1 text-caption-1 font-semibold uppercase tracking-wide text-tertiary-label">
              {dict.sidebar.components}
            </p>
            {components.map((c) => (
              <MenuLink
                key={c.slug}
                href={`/docs/components/${c.slug}`}
                onClick={close}
              >
                {c.title}
              </MenuLink>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function MenuLink({
  href,
  onClick,
  external,
  children,
}: {
  href: string;
  onClick: () => void;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className =
    "rounded-[8px] px-2.5 py-2 text-body text-label transition-colors hover:bg-fill-quaternary active:bg-fill-tertiary";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
