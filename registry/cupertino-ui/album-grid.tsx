"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * The Apple Music library grid: rounded artwork with a hairline,
 * two-line caption underneath.
 */
function AlbumGrid({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="album-grid"
      className={cn("grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4", className)}
      {...props}
    />
  );
}

function AlbumCard({
  className,
  artworkUrl,
  title,
  subtitle,
  size,
  ...props
}: React.ComponentProps<"button"> & {
  artworkUrl?: string;
  title: string;
  subtitle?: string;
  /** Fixed artwork size in px; defaults to fluid. */
  size?: number;
}) {
  return (
    <button
      type="button"
      data-slot="album-card"
      className={cn(
        "group flex cursor-default select-none flex-col gap-1.5 text-left outline-none",
        className
      )}
      style={size ? { width: size } : undefined}
      {...props}
    >
      <span
        className="block w-full overflow-hidden rounded-[8px] bg-fill-tertiary shadow-[inset_0_0_0_0.5px_var(--separator)] transition-transform duration-200 ease-[var(--ease-out-expo)] group-active:scale-[0.97] group-focus-visible:ring-[3px] group-focus-visible:ring-blue/40"
        style={{ aspectRatio: "1 / 1" }}
      >
        {artworkUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={artworkUrl}
            alt=""
            className="size-full object-cover"
            loading="lazy"
          />
        ) : null}
      </span>
      <span className="flex flex-col">
        <span className="truncate text-subheadline text-label">{title}</span>
        {subtitle ? (
          <span className="truncate text-subheadline text-secondary-label">
            {subtitle}
          </span>
        ) : null}
      </span>
    </button>
  );
}

export { AlbumCard, AlbumGrid };
