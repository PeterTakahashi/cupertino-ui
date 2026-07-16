"use client";

import * as React from "react";

import { useAudioPlayer } from "@/components/ui/audio-player";
import { cn } from "@/lib/utils";

/**
 * Apple Music lyrics: big bold lines that light up in sync with
 * playback, auto-scroll to the active line, and seek when tapped.
 */
type LyricLine = {
  /** Seconds from the start of the track. */
  time: number;
  text: string;
};

function LyricsView({
  className,
  lines,
  ...props
}: React.ComponentProps<"div"> & {
  lines: LyricLine[];
}) {
  const { currentTime, seek, play } = useAudioPlayer();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const activeIndex = React.useMemo(() => {
    let i = -1;
    for (let k = 0; k < lines.length; k++) {
      if (lines[k].time <= currentTime) i = k;
      else break;
    }
    return i;
  }, [lines, currentTime]);

  // Keep the active line vertically centered.
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container || activeIndex < 0) return;
    const el = container.children[activeIndex] as HTMLElement | undefined;
    if (!el) return;
    container.scrollTo({
      top: el.offsetTop - container.clientHeight / 2 + el.clientHeight / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      data-slot="lyrics-view"
      className={cn(
        "flex h-full flex-col gap-5 overflow-y-auto px-6 py-[40%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className
      )}
      {...props}
    >
      {lines.map((line, i) => (
        <button
          key={i}
          type="button"
          onClick={() => {
            seek(line.time);
            play();
          }}
          className={cn(
            "cursor-default select-none text-left text-[26px] font-bold leading-[1.25] tracking-[-0.4px] outline-none transition-[color,opacity,transform] duration-300 focus-visible:ring-[3px] focus-visible:ring-blue/40",
            i === activeIndex
              ? "text-label"
              : i < activeIndex
                ? "text-label/25"
                : "text-label/40",
            i === activeIndex && "scale-[1.02]"
          )}
        >
          {line.text}
        </button>
      ))}
    </div>
  );
}

export { LyricsView, type LyricLine };
