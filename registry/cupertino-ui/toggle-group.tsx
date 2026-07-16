"use client";

import * as React from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * macOS toggle cluster — like the text-alignment control in Pages:
 * bordered segments on one platter, pressed segments filled.
 */
function ToggleGroup({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(
        "inline-flex items-stretch overflow-hidden rounded-[7px] bg-background shadow-[inset_0_0_0_0.5px_var(--opaque-separator),0_0.5px_2px_rgba(0,0,0,0.08)] dark:bg-gray-4 [&>*:not(:first-child)]:shadow-[-0.5px_0_0_0_var(--separator)]",
        className
      )}
      {...props}
    />
  );
}

function ToggleGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        "flex h-[26px] min-w-9 cursor-default select-none items-center justify-center gap-1 px-2 text-footnote text-label outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-blue/40 active:bg-fill-tertiary disabled:pointer-events-none disabled:opacity-40 data-[state=on]:bg-blue/15 data-[state=on]:text-blue dark:data-[state=on]:bg-blue/25 [&_svg]:size-3.5 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

export { ToggleGroup, ToggleGroupItem };
