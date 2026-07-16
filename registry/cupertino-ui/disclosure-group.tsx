"use client";

import * as React from "react";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI DisclosureGroup — a row with a rotating chevron that
 * reveals indented content, like macOS outline views.
 */
function DisclosureGroup({
  className,
  label,
  children,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root> & {
  /** Row label shown next to the disclosure chevron. */
  label: React.ReactNode;
}) {
  return (
    <CollapsiblePrimitive.Root
      data-slot="disclosure-group"
      className={cn("flex w-full flex-col", className)}
      {...props}
    >
      <CollapsiblePrimitive.Trigger
        data-slot="disclosure-group-trigger"
        className="group flex min-h-9 cursor-default select-none items-center gap-1.5 rounded-[7px] px-2 text-left text-subheadline text-label outline-none transition-colors hover:bg-fill-quaternary focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill-tertiary"
      >
        <ChevronRightIcon
          className="size-3.5 shrink-0 text-secondary-label transition-transform duration-200 group-data-[state=open]:rotate-90"
          strokeWidth={2.5}
        />
        <span className="min-w-0 flex-1">{label}</span>
      </CollapsiblePrimitive.Trigger>
      <CollapsiblePrimitive.Content
        data-slot="disclosure-group-content"
        className="overflow-hidden pl-7 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-top-1 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-1"
      >
        <div className="py-1 text-subheadline text-label">{children}</div>
      </CollapsiblePrimitive.Content>
    </CollapsiblePrimitive.Root>
  );
}

export { DisclosureGroup };
