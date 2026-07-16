"use client";

import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * SwiftUI Button. Variants mirror SwiftUI button styles:
 * `filled` = .borderedProminent, `tinted` = .bordered with tint,
 * `gray` = .bordered, `plain` = .borderless.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 cursor-default select-none items-center justify-center gap-1.5 whitespace-nowrap font-[590] outline-none transition-[background-color,color,transform,opacity] duration-150 ease-out active:scale-[0.97] active:opacity-75 disabled:pointer-events-none disabled:opacity-40 focus-visible:ring-[3px] focus-visible:ring-blue/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        filled: "bg-blue text-white active:bg-blue/85",
        tinted:
          "bg-blue/15 text-blue active:bg-blue/25 dark:bg-blue/25 dark:active:bg-blue/35",
        gray: "bg-fill-secondary text-label active:bg-fill",
        plain: "text-blue active:opacity-50",
        destructive: "bg-red text-white active:bg-red/85",
        "destructive-tinted":
          "bg-red/15 text-red active:bg-red/25 dark:bg-red/25 dark:active:bg-red/35",
      },
      size: {
        sm: "h-7 rounded-full px-3 text-footnote font-[590]",
        default: "h-[34px] rounded-full px-4 text-subheadline font-[590]",
        lg: "h-[50px] rounded-[var(--radius-field)] px-5 text-body font-[590] [&_svg]:size-5",
        icon: "size-[34px] rounded-full [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
