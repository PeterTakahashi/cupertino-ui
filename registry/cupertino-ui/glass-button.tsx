"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { GlassSheen, glassVariants } from "@/components/ui/glass";
import { cn } from "@/lib/utils";

/**
 * A Liquid Glass capsule button — the iOS 26 control style.
 * Glass flexes on press (springy scale) and illuminates on hover.
 * `tint` pours a translucent accent into the glass for primary
 * actions; per Apple, use tinted glass sparingly.
 */
const glassButtonVariants = cva(
  "inline-flex shrink-0 cursor-default select-none items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-[590] text-label outline-none transition-[transform,background-color,box-shadow] duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)] active:scale-[0.94] disabled:pointer-events-none disabled:opacity-40 focus-visible:ring-[3px] focus-visible:ring-blue/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      size: {
        sm: "h-8 px-3.5 text-footnote [&_svg]:size-3.5",
        default: "h-10 px-5 text-subheadline [&_svg]:size-4",
        lg: "h-[50px] px-6 text-body [&_svg]:size-5",
        icon: "size-10 [&_svg]:size-[18px]",
        "icon-lg": "size-[50px] [&_svg]:size-[22px]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

function GlassButton({
  className,
  variant = "regular",
  size,
  tint,
  children,
  style,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof glassButtonVariants> & {
    /** Glass variant: adaptive `regular` or transparent `clear`. */
    variant?: "regular" | "clear";
    /** Accent poured into the glass, e.g. "var(--system-blue)". */
    tint?: string;
  }) {
  return (
    <button
      type="button"
      data-slot="glass-button"
      className={cn(
        glassVariants({ variant, interactive: false }),
        glassButtonVariants({ size }),
        "hover:bg-[color-mix(in_srgb,var(--glass-bg)_100%,rgba(255,255,255,0.14))]",
        tint && "text-white",
        className
      )}
      style={
        tint
          ? {
              backgroundColor: `color-mix(in srgb, ${tint} 62%, transparent)`,
              ...style,
            }
          : style
      }
      {...props}
    >
      <GlassSheen />
      {children}
    </button>
  );
}

export { GlassButton, glassButtonVariants };
