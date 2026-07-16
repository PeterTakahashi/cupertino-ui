"use client";

import * as React from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI Stepper — the iOS − / + control on a segmented gray
 * platter. Controlled or uncontrolled via value/defaultValue.
 */
function Stepper({
  className,
  value: valueProp,
  defaultValue = 0,
  onValueChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled,
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const value = valueProp ?? internal;

  const update = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    if (valueProp === undefined) setInternal(clamped);
    onValueChange?.(clamped);
  };

  const buttonClass =
    "flex h-8 w-[47px] cursor-default select-none items-center justify-center text-label outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill disabled:pointer-events-none disabled:opacity-30 [&_svg]:size-[15px]";

  return (
    <div
      data-slot="stepper"
      role="group"
      className={cn(
        "inline-flex items-center overflow-hidden rounded-[9px] bg-fill-tertiary",
        disabled && "pointer-events-none opacity-40",
        className
      )}
      {...props}
    >
      <button
        type="button"
        aria-label="Decrement"
        disabled={disabled || value <= min}
        onClick={() => update(value - step)}
        className={buttonClass}
      >
        <MinusIcon strokeWidth={2.5} />
      </button>
      <span aria-hidden className="h-[18px] w-px shrink-0 bg-separator" />
      <button
        type="button"
        aria-label="Increment"
        disabled={disabled || value >= max}
        onClick={() => update(value + step)}
        className={buttonClass}
      >
        <PlusIcon strokeWidth={2.5} />
      </button>
    </div>
  );
}

export { Stepper };
