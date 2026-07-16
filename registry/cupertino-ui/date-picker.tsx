"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI DatePicker with .datePickerStyle(.graphical) — the iOS
 * inline calendar: month header with chevrons, weekday row, and a
 * tinted circle on the selected day.
 */
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function isSameDay(a: Date | undefined, b: Date) {
  return (
    !!a &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function DatePicker({
  className,
  value,
  defaultValue,
  onValueChange,
  disabled,
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  value?: Date;
  defaultValue?: Date;
  onValueChange?: (date: Date) => void;
  disabled?: boolean;
}) {
  const [internal, setInternal] = React.useState<Date | undefined>(
    defaultValue
  );
  const selected = value ?? internal;
  const [visibleMonth, setVisibleMonth] = React.useState(() =>
    startOfMonth(selected ?? new Date())
  );

  const select = (d: Date) => {
    if (value === undefined) setInternal(d);
    onValueChange?.(d);
  };

  const year = visibleMonth.getFullYear();
  const month = visibleMonth.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const monthLabel = visibleMonth.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  return (
    <div
      data-slot="date-picker"
      className={cn(
        "w-[300px] select-none rounded-[var(--radius-card)] bg-grouped-secondary p-4 shadow-[var(--shadow-card)]",
        disabled && "pointer-events-none opacity-40",
        className
      )}
      {...props}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="pl-1 text-headline">{monthLabel}</span>
        <div className="flex items-center gap-4 text-blue">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setVisibleMonth(new Date(year, month - 1, 1))}
            className="cursor-default rounded-[6px] outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:opacity-50"
          >
            <ChevronLeftIcon className="size-6" strokeWidth={2.5} />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setVisibleMonth(new Date(year, month + 1, 1))}
            className="cursor-default rounded-[6px] outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:opacity-50"
          >
            <ChevronRightIcon className="size-6" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-1">
        {WEEKDAYS.map((w, i) => (
          <span
            key={i}
            className="flex h-8 items-center justify-center text-caption-1 font-semibold text-tertiary-label"
          >
            {w}
          </span>
        ))}
        {Array.from({ length: firstWeekday }, (_, i) => (
          <span key={`pad-${i}`} />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const d = new Date(year, month, i + 1);
          const isSelected = isSameDay(selected, d);
          const isToday = isSameDay(today, d);
          return (
            <button
              key={i}
              type="button"
              onClick={() => select(d)}
              aria-pressed={isSelected}
              className={cn(
                "mx-auto flex size-10 cursor-default items-center justify-center rounded-full text-[20px] tracking-[-0.45px] text-label outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill-tertiary",
                isSelected && "bg-blue/15 font-medium text-blue dark:bg-blue/25",
                !isSelected && isToday && "text-blue"
              )}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { DatePicker };
