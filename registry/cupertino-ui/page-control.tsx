"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * UIPageControl — the row of dots under a paging TabView. The
 * current dot is opaque; tapping a dot jumps to that page.
 */
function PageControl({
  className,
  count,
  page,
  onPageChange,
  ...props
}: Omit<React.ComponentProps<"div">, "onChange"> & {
  count: number;
  page: number;
  onPageChange?: (page: number) => void;
}) {
  return (
    <div
      data-slot="page-control"
      role="tablist"
      aria-label="Pages"
      className={cn("flex items-center justify-center gap-[9px]", className)}
      {...props}
    >
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === page}
          aria-label={`Page ${i + 1}`}
          onClick={() => onPageChange?.(i)}
          className={cn(
            "size-[7px] shrink-0 cursor-default rounded-full outline-none transition-colors duration-200 focus-visible:ring-[3px] focus-visible:ring-blue/40",
            i === page ? "bg-label/85" : "bg-label/25"
          )}
        />
      ))}
    </div>
  );
}

export { PageControl };
