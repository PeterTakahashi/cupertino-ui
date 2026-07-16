"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI ColorPicker — the rainbow-ring well plus a row of Apple
 * system-color swatches. Uses the native color input under the
 * hood for the custom well.
 */
const SYSTEM_SWATCHES = [
  "var(--system-red)",
  "var(--system-orange)",
  "var(--system-yellow)",
  "var(--system-green)",
  "var(--system-teal)",
  "var(--system-blue)",
  "var(--system-indigo)",
  "var(--system-purple)",
  "var(--system-pink)",
  "var(--system-brown)",
  "var(--system-gray)",
];

function ColorPicker({
  className,
  value,
  defaultValue = "#007aff",
  onValueChange,
  label,
  swatches = SYSTEM_SWATCHES,
  disabled,
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (color: string) => void;
  /** Trailing label, like SwiftUI's ColorPicker("Accent"). */
  label?: React.ReactNode;
  /** Preset swatch colors; defaults to the Apple system palette. */
  swatches?: string[];
  disabled?: boolean;
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const color = value ?? internal;

  const set = (next: string) => {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  };

  return (
    <div
      data-slot="color-picker"
      className={cn(
        "flex items-center gap-3",
        disabled && "pointer-events-none opacity-40",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-1.5">
        {swatches.map((s) => (
          <button
            key={s}
            type="button"
            aria-label={`Select color ${s}`}
            onClick={() => set(s)}
            className={cn(
              "size-[22px] shrink-0 cursor-default rounded-full shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)] outline-none transition-transform focus-visible:ring-[3px] focus-visible:ring-blue/40 active:scale-90",
              color === s &&
                "ring-2 ring-blue ring-offset-2 ring-offset-background"
            )}
            style={{ backgroundColor: s }}
          />
        ))}
      </div>

      {/* Rainbow-ring custom color well */}
      <label
        className={cn(
          "relative inline-flex size-7 shrink-0 cursor-default items-center justify-center rounded-full p-[3px]",
          "bg-[conic-gradient(#ff453a,#ffd60a,#30d158,#64d2ff,#0a84ff,#bf5af2,#ff453a)]"
        )}
      >
        <span
          className="size-full rounded-full shadow-[inset_0_0_0_1.5px_var(--system-background)]"
          style={{ backgroundColor: color }}
        />
        <input
          type="color"
          aria-label="Custom color"
          value={/^#([0-9a-f]{6})$/i.test(color) ? color : "#007aff"}
          onChange={(e) => set(e.target.value)}
          disabled={disabled}
          className="absolute inset-0 size-full cursor-default opacity-0"
        />
      </label>

      {label ? (
        <span className="text-subheadline text-label">{label}</span>
      ) : null}
    </div>
  );
}

export { ColorPicker };
