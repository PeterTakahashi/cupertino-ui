"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * SwiftUI TextField. `inset` = iOS grouped-form field on a gray
 * platter; `bordered` = macOS .textFieldStyle(.roundedBorder).
 */
const inputVariants = cva(
  "flex w-full min-w-0 text-label outline-none transition-[box-shadow,background-color] duration-150 placeholder:text-tertiary-label disabled:pointer-events-none disabled:opacity-40 file:inline-flex file:border-0 file:bg-transparent file:font-medium",
  {
    variants: {
      variant: {
        inset:
          "h-11 rounded-[var(--radius-field)] bg-fill-tertiary px-4 text-body focus:ring-[3px] focus:ring-blue/40",
        bordered:
          "h-[26px] rounded-[6px] bg-background px-2 text-footnote shadow-[inset_0_0_0_1px_var(--separator),0_0.5px_1px_rgba(0,0,0,0.05)] focus:shadow-[inset_0_0_0_1px_var(--separator)] focus:ring-[3px] focus:ring-blue/40",
      },
    },
    defaultVariants: {
      variant: "inset",
    },
  }
);

function Input({
  className,
  variant,
  type,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
