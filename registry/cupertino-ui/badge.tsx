import * as React from "react";
import { Slot } from "radix-ui";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/** iOS badge / SwiftUI .badge() styles, plus tinted capsules. */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 select-none items-center justify-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-caption-1 font-semibold transition-colors [&_svg]:pointer-events-none [&_svg]:size-3",
  {
    variants: {
      variant: {
        default: "bg-blue text-white",
        red: "bg-red text-white",
        gray: "bg-fill-secondary text-secondary-label",
        tinted: "bg-blue/15 text-blue dark:bg-blue/25",
        green: "bg-green/15 text-green dark:bg-green/25",
        orange: "bg-orange/15 text-orange dark:bg-orange/25",
        outline:
          "text-secondary-label shadow-[inset_0_0_0_1px_var(--separator)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
