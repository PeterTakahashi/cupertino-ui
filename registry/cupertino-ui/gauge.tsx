"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI Gauge — `circular` is .gaugeStyle(.accessoryCircular),
 * the watchOS/StatusBar open-ring dial; `linear` is the thin
 * capacity bar.
 */
function Gauge({
  className,
  value,
  min = 0,
  max = 100,
  variant = "circular",
  size = 64,
  label,
  currentValueLabel,
  tint = "var(--system-blue)",
  ...props
}: Omit<React.ComponentProps<"div">, "children"> & {
  value: number;
  min?: number;
  max?: number;
  variant?: "circular" | "linear";
  /** Diameter in px (circular only). */
  size?: number;
  /** Small caption under the dial / beside the bar. */
  label?: React.ReactNode;
  /** Text in the dial center; defaults to the value. */
  currentValueLabel?: React.ReactNode;
  /** Ring/bar color, any CSS color. */
  tint?: string;
}) {
  const fraction = Math.min(1, Math.max(0, (value - min) / (max - min)));

  if (variant === "linear") {
    return (
      <div
        data-slot="gauge"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        className={cn("flex w-full flex-col gap-1.5", className)}
        {...props}
      >
        <div className="h-[5px] w-full overflow-hidden rounded-full bg-fill">
          <div
            className="h-full rounded-full transition-[width] duration-500 ease-[var(--ease-out-expo)]"
            style={{ width: `${fraction * 100}%`, backgroundColor: tint }}
          />
        </div>
        {label ? (
          <div className="flex justify-between text-caption-1 text-secondary-label">
            {label}
          </div>
        ) : null}
      </div>
    );
  }

  // Open ring: 270° arc starting at 135°, like accessoryCircular.
  const stroke = size * 0.09;
  const r = (size - stroke) / 2;
  const c = size / 2;
  const arc = 2 * Math.PI * r * 0.75;
  const gap = 2 * Math.PI * r * 0.25;

  return (
    <div
      data-slot="gauge"
      role="meter"
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      className={cn(
        "relative inline-flex flex-col items-center",
        className
      )}
      style={{ width: size }}
      {...props}
    >
      <svg width={size} height={size} className="rotate-[135deg]">
        <circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          className="stroke-fill"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${arc} ${gap + arc}`}
        />
        <circle
          cx={c}
          cy={c}
          r={r}
          fill="none"
          stroke={tint}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${arc * fraction} ${2 * Math.PI * r}`}
          className="transition-[stroke-dasharray] duration-500 ease-[var(--ease-out-expo)]"
        />
      </svg>
      <span
        className="absolute inset-0 flex items-center justify-center font-semibold tabular-nums text-label"
        style={{ fontSize: size * 0.28 }}
      >
        {currentValueLabel ?? Math.round(value)}
      </span>
      {label ? (
        <span className="mt-0.5 text-caption-1 text-secondary-label">
          {label}
        </span>
      ) : null}
    </div>
  );
}

export { Gauge };
