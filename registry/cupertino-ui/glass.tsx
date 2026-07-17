"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Liquid Glass (iOS 26 / macOS Tahoe) — a floating, light-bending
 * material for the CONTROL layer. Per Apple's guidance: use it for
 * elements that float above content (bars, buttons, badges), never
 * for the content itself, and avoid stacking glass on glass.
 *
 * `regular` adapts and stays legible anywhere; `clear` is more
 * transparent and belongs over media-rich backgrounds.
 */
const glassVariants = cva("relative isolate", {
  variants: {
    variant: {
      regular: "glass-regular",
      clear: "glass-clear",
    },
    interactive: {
      true: "cursor-default select-none transition-[transform,background-color] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-[color-mix(in_srgb,var(--glass-bg)_100%,rgba(255,255,255,0.12))] active:scale-[0.96] focus-visible:ring-[3px] focus-visible:ring-blue/40 outline-none",
      false: "",
    },
  },
  defaultVariants: {
    variant: "regular",
    interactive: false,
  },
});

/** Moving specular sheen, the "liquid" part. Rendered on top. */
function GlassSheen() {
  return (
    <span
      aria-hidden
      data-slot="glass-sheen"
      className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden rounded-[inherit]"
    >
      <span className="absolute -inset-x-1/4 -top-3/4 h-full rotate-[-8deg] bg-[radial-gradient(50%_60%_at_50%_100%,rgba(255,255,255,0.28),transparent_70%)]" />
    </span>
  );
}

function Glass({
  className,
  variant,
  interactive,
  asChild: _ignored,
  sheen = true,
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof glassVariants> & {
    asChild?: never;
    /** Disable the specular sheen layer. */
    sheen?: boolean;
  }) {
  return (
    <div
      data-slot="glass"
      className={cn(glassVariants({ variant, interactive }), className)}
      {...props}
    >
      {sheen ? <GlassSheen /> : null}
      {children}
    </div>
  );
}

export { Glass, GlassSheen, glassVariants };
