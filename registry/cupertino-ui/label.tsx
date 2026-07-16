"use client";

import * as React from "react";
import { Label as LabelPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/** Form label set in the subheadline style. */
function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "flex select-none items-center gap-2 text-subheadline font-medium leading-none text-label peer-disabled:pointer-events-none peer-disabled:opacity-40 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-40",
        className
      )}
      {...props}
    />
  );
}

export { Label };
