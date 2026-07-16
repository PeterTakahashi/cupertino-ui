import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Inline banner on a tinted platter — the way iOS surfaces
 * inline warnings (e.g. Battery Low, storage alerts in Settings).
 */
const alertVariants = cva(
  "relative grid w-full grid-cols-[0fr_1fr] items-start gap-x-0 rounded-[var(--radius-card)] px-4 py-3 text-subheadline has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-3 [&>svg]:mt-0.5 [&>svg]:size-[18px]",
  {
    variants: {
      variant: {
        default: "bg-blue/10 text-label dark:bg-blue/20 [&>svg]:text-blue",
        warning:
          "bg-orange/10 text-label dark:bg-orange/20 [&>svg]:text-orange",
        destructive: "bg-red/10 text-label dark:bg-red/20 [&>svg]:text-red",
        gray: "bg-fill-tertiary text-label [&>svg]:text-secondary-label",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 font-semibold leading-snug text-label",
        className
      )}
      {...props}
    />
  );
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 text-subheadline leading-snug text-secondary-label [&_a]:text-blue",
        className
      )}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle };
