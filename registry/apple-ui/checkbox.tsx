"use client";

import * as React from "react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CheckIcon, MinusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI Toggle with .checkboxStyle (macOS). A small rounded
 * square that fills with the accent color when checked.
 */
function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-[18px] shrink-0 cursor-default rounded-[5px] bg-background shadow-[inset_0_0_0_1px_var(--opaque-separator),0_1px_1px_rgba(0,0,0,0.04)] outline-none transition-colors duration-150 focus-visible:ring-[3px] focus-visible:ring-blue/40 disabled:opacity-40 data-[state=checked]:bg-blue data-[state=checked]:shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.3),0_1px_1px_rgba(0,0,0,0.08)] data-[state=indeterminate]:bg-blue data-[state=indeterminate]:shadow-none",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-white"
      >
        {props.checked === "indeterminate" ? (
          <MinusIcon className="size-3.5" strokeWidth={3} />
        ) : (
          <CheckIcon className="size-3.5" strokeWidth={3.5} />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
