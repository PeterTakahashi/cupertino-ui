"use client";

import * as React from "react";
import { PauseIcon, PlayIcon, SkipForwardIcon } from "lucide-react";

import { useAudioPlayer } from "@/components/ui/audio-player";
import { cn } from "@/lib/utils";

/**
 * The iOS mini player — the floating capsule above the tab bar:
 * artwork, title, play/pause and next. Tap anywhere else to open
 * the full Now Playing view.
 */
function MiniPlayer({
  className,
  onExpand,
  ...props
}: React.ComponentProps<"div"> & {
  /** Called when the bar itself is tapped (open Now Playing). */
  onExpand?: () => void;
}) {
  const { track, playing, toggle, next } = useAudioPlayer();

  if (!track) return null;

  return (
    <div
      data-slot="mini-player"
      className={cn(
        "flex h-14 w-full items-center gap-3 rounded-[14px] bg-white/85 px-2.5 shadow-[var(--shadow-menu)] backdrop-blur-2xl dark:bg-gray-5/90",
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={onExpand}
        aria-label="Now Playing"
        className="flex min-w-0 flex-1 cursor-default items-center gap-3 text-left outline-none"
      >
        {track.artworkUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={track.artworkUrl}
            alt=""
            className="size-10 shrink-0 rounded-[6px] object-cover shadow-[0_1px_4px_rgba(0,0,0,0.2)]"
          />
        ) : (
          <span className="size-10 shrink-0 rounded-[6px] bg-fill-tertiary" />
        )}
        <span className="min-w-0 flex-1 truncate text-subheadline text-label">
          {track.title}
        </span>
      </button>
      <button
        type="button"
        aria-label={playing ? "Pause" : "Play"}
        onClick={toggle}
        className="flex size-9 shrink-0 cursor-default items-center justify-center rounded-full text-label outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill-tertiary [&_svg]:size-5 [&_svg]:fill-current"
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={next}
        className="flex size-9 shrink-0 cursor-default items-center justify-center rounded-full text-label outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill-tertiary [&_svg]:size-5 [&_svg]:fill-current"
      >
        <SkipForwardIcon />
      </button>
    </div>
  );
}

export { MiniPlayer };
