"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/** SwiftUI TextEditor rendered as an iOS inset field. */
function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full rounded-[var(--radius-field)] bg-fill-tertiary px-4 py-3 text-body text-label outline-none transition-shadow duration-150 placeholder:text-tertiary-label focus:ring-[3px] focus:ring-blue/40 disabled:pointer-events-none disabled:opacity-40",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
