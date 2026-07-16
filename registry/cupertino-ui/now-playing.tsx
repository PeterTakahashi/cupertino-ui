"use client";

import * as React from "react";
import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  Volume1Icon,
  Volume2Icon,
} from "lucide-react";

import { formatTime, useAudioPlayer } from "@/components/ui/audio-player";
import { cn } from "@/lib/utils";

/**
 * The iOS Now Playing screen: large artwork that shrinks while
 * paused, scrubber with elapsed/remaining time, transport controls,
 * and a volume slider. Render inside a sheet or a full-screen view.
 */
function NowPlaying({ className, ...props }: React.ComponentProps<"div">) {
  const {
    track,
    playing,
    toggle,
    next,
    prev,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
  } = useAudioPlayer();
  const [scrubbing, setScrubbing] = React.useState<number | null>(null);

  if (!track) return null;

  const total = duration || track.duration || 0;
  const shown = scrubbing ?? currentTime;

  return (
    <div
      data-slot="now-playing"
      className={cn(
        "flex w-full flex-col items-center gap-7 px-7 pb-8 pt-4",
        className
      )}
      {...props}
    >
      {/* Artwork — full size while playing, shrunk while paused (iOS behavior) */}
      <div className="flex aspect-square w-full max-w-[320px] items-center justify-center">
        <span
          className={cn(
            "block w-full overflow-hidden rounded-[10px] shadow-[0_0_0_0.5px_var(--separator),0_18px_50px_rgba(0,0,0,0.35)] transition-transform duration-350 ease-[cubic-bezier(0.32,0.72,0,1)]",
            !playing && "scale-[0.78] shadow-[0_0_0_0.5px_var(--separator),0_8px_24px_rgba(0,0,0,0.25)]"
          )}
        >
          {track.artworkUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={track.artworkUrl} alt="" className="aspect-square size-full object-cover" />
          ) : (
            <span className="block aspect-square bg-fill-tertiary" />
          )}
        </span>
      </div>

      <div className="flex w-full max-w-[320px] flex-col gap-5">
        <div className="min-w-0">
          <p className="truncate text-title-3 text-label">{track.title}</p>
          <p className="truncate text-title-3 font-normal text-secondary-label">
            {track.artist}
          </p>
        </div>

        {/* Scrubber */}
        <div className="flex flex-col gap-1">
          <input
            type="range"
            aria-label="Playback position"
            min={0}
            max={total || 1}
            step={0.1}
            value={Math.min(shown, total || 0)}
            onChange={(e) => setScrubbing(Number(e.target.value))}
            onPointerUp={() => {
              if (scrubbing !== null) seek(scrubbing);
              setScrubbing(null);
            }}
            onKeyUp={() => {
              if (scrubbing !== null) seek(scrubbing);
              setScrubbing(null);
            }}
            className="h-1.5 w-full cursor-default appearance-none rounded-full bg-fill outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 [&::-webkit-slider-thumb]:size-1.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-transparent"
            style={{
              background: `linear-gradient(to right, var(--secondary-label) ${total ? (shown / total) * 100 : 0}%, var(--system-fill) 0%)`,
            }}
          />
          <div className="flex justify-between text-caption-1 tabular-nums text-tertiary-label">
            <span>{formatTime(shown)}</span>
            <span>-{formatTime(Math.max(0, total - shown))}</span>
          </div>
        </div>

        {/* Transport */}
        <div className="flex items-center justify-center gap-12">
          <button
            type="button"
            aria-label="Previous"
            onClick={prev}
            className="cursor-default text-label outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:opacity-60 [&_svg]:size-8 [&_svg]:fill-current"
          >
            <SkipBackIcon />
          </button>
          <button
            type="button"
            aria-label={playing ? "Pause" : "Play"}
            onClick={toggle}
            className="cursor-default text-label outline-none transition-transform focus-visible:ring-[3px] focus-visible:ring-blue/40 active:scale-90 [&_svg]:size-11 [&_svg]:fill-current"
          >
            {playing ? <PauseIcon /> : <PlayIcon />}
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={next}
            className="cursor-default text-label outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:opacity-60 [&_svg]:size-8 [&_svg]:fill-current"
          >
            <SkipForwardIcon />
          </button>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-3 text-secondary-label">
          <Volume1Icon className="size-4 shrink-0" />
          <input
            type="range"
            aria-label="Volume"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="h-1.5 w-full cursor-default appearance-none rounded-full outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 [&::-webkit-slider-thumb]:size-1.5 [&::-webkit-slider-thumb]:appearance-none"
            style={{
              background: `linear-gradient(to right, var(--secondary-label) ${volume * 100}%, var(--system-fill) 0%)`,
            }}
          />
          <Volume2Icon className="size-4 shrink-0" />
        </div>
      </div>
    </div>
  );
}

export { NowPlaying };
