"use client";

import * as React from "react";
import { EllipsisIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * The Apple Music track list: numbered rows with hairline
 * separators; the current track swaps its number for animated
 * equalizer bars.
 */
function EqualizerBars({ paused }: { paused?: boolean }) {
  return (
    <span
      aria-hidden
      className="flex h-3.5 items-end gap-[2px] text-red"
      data-slot="equalizer-bars"
    >
      <style>{`@keyframes cupertino-ui-eq { 0%,100% { height: 30% } 50% { height: 100% } }`}</style>
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-current"
          style={{
            height: "40%",
            animation: paused
              ? "none"
              : `cupertino-ui-eq ${0.7 + i * 0.13}s ease-in-out infinite`,
            animationDelay: `${i * -0.19}s`,
          }}
        />
      ))}
    </span>
  );
}

function TrackList({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="track-list"
      className={cn(
        "flex w-full flex-col [&>[data-slot=track-row]:not(:first-child)>[data-slot=track-row-inner]]:shadow-[0_-0.5px_0_0_var(--separator)]",
        className
      )}
      {...props}
    />
  );
}

function TrackRow({
  className,
  index,
  title,
  subtitle,
  artworkUrl,
  duration,
  active,
  playing,
  onMore,
  ...props
}: Omit<React.ComponentProps<"button">, "title"> & {
  /** 1-based track number (hidden while active). */
  index?: number;
  title: string;
  /** Artist line, for lists that mix albums. */
  subtitle?: string;
  /** Small artwork instead of a number (Songs list style). */
  artworkUrl?: string;
  /** Preformatted duration, e.g. "3:42". */
  duration?: string;
  /** This row is the current track. */
  active?: boolean;
  /** Whether audio is actually running (drives the bars). */
  playing?: boolean;
  /** Show the ellipsis button and call this when tapped. */
  onMore?: () => void;
}) {
  return (
    <button
      type="button"
      data-slot="track-row"
      className={cn(
        "group flex w-full cursor-default select-none items-center gap-3 pl-4 text-left outline-none focus-visible:bg-fill-quaternary active:bg-fill-tertiary",
        className
      )}
      {...props}
    >
      <span className="flex w-5 shrink-0 items-center justify-center">
        {active ? (
          <EqualizerBars paused={!playing} />
        ) : artworkUrl ? null : (
          <span className="text-subheadline tabular-nums text-secondary-label">
            {index}
          </span>
        )}
      </span>
      {artworkUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={artworkUrl}
          alt=""
          loading="lazy"
          className="-ml-2 size-11 shrink-0 rounded-[6px] object-cover shadow-[inset_0_0_0_0.5px_var(--separator)]"
        />
      ) : null}
      <span
        data-slot="track-row-inner"
        className="flex min-h-[44px] min-w-0 flex-1 items-center gap-3 py-2 pr-4"
      >
        <span className="flex min-w-0 flex-1 flex-col">
          <span className={cn("truncate text-body", active && "text-red")}>
            {title}
          </span>
          {subtitle ? (
            <span className="truncate text-footnote text-secondary-label">
              {subtitle}
            </span>
          ) : null}
        </span>
        {duration ? (
          <span className="shrink-0 text-footnote tabular-nums text-secondary-label">
            {duration}
          </span>
        ) : null}
        {onMore ? (
          <span
            role="button"
            tabIndex={-1}
            aria-label="More"
            onClick={(e) => {
              e.stopPropagation();
              onMore();
            }}
            className="flex size-7 shrink-0 items-center justify-center rounded-full text-secondary-label hover:bg-fill-quaternary"
          >
            <EllipsisIcon className="size-4" />
          </span>
        ) : null}
      </span>
    </button>
  );
}

export { EqualizerBars, TrackList, TrackRow };
