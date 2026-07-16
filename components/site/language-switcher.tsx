"use client";

import * as React from "react";
import { GlobeIcon } from "lucide-react";

import { locales, useI18n } from "@/lib/i18n";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/registry/cupertino-ui/dropdown-menu";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Language"
        className="flex size-8 items-center justify-center rounded-full text-secondary-label outline-none transition-colors hover:bg-fill-tertiary focus-visible:ring-[3px] focus-visible:ring-blue/40 data-[state=open]:bg-fill-tertiary"
      >
        <GlobeIcon className="size-[18px]" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(v) => setLocale(v as typeof locale)}
        >
          {locales.map((l) => (
            <DropdownMenuRadioItem key={l.code} value={l.code}>
              {l.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
