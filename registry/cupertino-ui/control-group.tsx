"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI ControlGroup — a cluster of bordered buttons sharing one
 * platter with hairline dividers, like macOS back/forward controls.
 */
function ControlGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="control-group"
      role="group"
      className={cn(
        "inline-flex items-stretch overflow-hidden rounded-[7px] bg-background shadow-[inset_0_0_0_0.5px_var(--opaque-separator),0_0.5px_2px_rgba(0,0,0,0.08)] dark:bg-gray-4 [&>*:not(:first-child)]:shadow-[-0.5px_0_0_0_var(--separator)]",
        className
      )}
      {...props}
    />
  );
}

function ControlGroupButton({
  className,
  active,
  ...props
}: React.ComponentProps<"button"> & { active?: boolean }) {
  return (
    <button
      type="button"
      data-slot="control-group-button"
      className={cn(
        "flex h-[26px] min-w-8 cursor-default select-none items-center justify-center gap-1 px-2 text-footnote text-label outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-inset focus-visible:ring-blue/40 active:bg-fill-tertiary disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-3.5 [&_svg]:shrink-0",
        active && "bg-fill-secondary",
        className
      )}
      {...props}
    />
  );
}

export { ControlGroup, ControlGroupButton };
