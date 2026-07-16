"use client";

import * as React from "react";
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * SwiftUI Picker with .radioGroupStyle (macOS). Accent-filled
 * circle with a white center dot.
 */
function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-2.5", className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "aspect-square size-[18px] shrink-0 cursor-default rounded-full bg-background shadow-[inset_0_0_0_1px_var(--opaque-separator),0_1px_1px_rgba(0,0,0,0.04)] outline-none transition-colors duration-150 focus-visible:ring-[3px] focus-visible:ring-blue/40 disabled:opacity-40 data-[state=checked]:bg-blue data-[state=checked]:shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.3),0_1px_1px_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <span className="block size-[7px] rounded-full bg-white" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
