"use client";

import * as React from "react";
import { PlayIcon, ShuffleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * The Apple Music album page header: large centered artwork,
 * album title, red artist name, meta line, and the Play / Shuffle
 * button pair.
 */
function AlbumHeader({
  className,
  artworkUrl,
  title,
  artist,
  meta,
  onPlay,
  onShuffle,
  ...props
}: React.ComponentProps<"header"> & {
  artworkUrl?: string;
  title: string;
  artist: string;
  /** Meta line, e.g. "Electronic · 2026 · Lossless". */
  meta?: string;
  onPlay?: () => void;
  onShuffle?: () => void;
}) {
  return (
    <header
      data-slot="album-header"
      className={cn("flex flex-col items-center gap-4 text-center", className)}
      {...props}
    >
      <span className="block w-56 max-w-[70%] overflow-hidden rounded-[10px] shadow-[0_0_0_0.5px_var(--separator),0_10px_30px_rgba(0,0,0,0.25)]">
        {artworkUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={artworkUrl} alt="" className="aspect-square size-full object-cover" />
        ) : (
          <span className="block aspect-square bg-fill-tertiary" />
        )}
      </span>
      <div className="flex flex-col gap-0.5">
        <h1 className="text-title-3 text-label">{title}</h1>
        <p className="text-title-3 font-normal text-red">{artist}</p>
        {meta ? (
          <p className="text-caption-1 uppercase text-secondary-label">{meta}</p>
        ) : null}
      </div>
      <div className="flex w-full max-w-xs items-center gap-3">
        <button
          type="button"
          onClick={onPlay}
          className="flex h-[46px] flex-1 cursor-default select-none items-center justify-center gap-2 rounded-[var(--radius-field)] bg-fill-tertiary text-body font-semibold text-red outline-none transition-transform focus-visible:ring-[3px] focus-visible:ring-blue/40 active:scale-[0.97] [&_svg]:size-4 [&_svg]:fill-current"
        >
          <PlayIcon /> Play
        </button>
        <button
          type="button"
          onClick={onShuffle}
          className="flex h-[46px] flex-1 cursor-default select-none items-center justify-center gap-2 rounded-[var(--radius-field)] bg-fill-tertiary text-body font-semibold text-red outline-none transition-transform focus-visible:ring-[3px] focus-visible:ring-blue/40 active:scale-[0.97] [&_svg]:size-4"
        >
          <ShuffleIcon /> Shuffle
        </button>
      </div>
    </header>
  );
}

export { AlbumHeader };
