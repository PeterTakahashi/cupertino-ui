"use client";

import * as React from "react";
import { ListMusicIcon } from "lucide-react";

import { useAudioPlayer } from "@/components/ui/audio-player";
import { EqualizerBars } from "@/components/ui/track-list";
import { cn } from "@/lib/utils";

/**
 * Up Next — the Apple Music queue: the current track pinned on
 * top, upcoming tracks below; tap a row to jump to it.
 */
function QueueList({
  className,
  title = "Playing Next",
  ...props
}: React.ComponentProps<"div"> & { title?: string }) {
  const { queue, index, playing, play } = useAudioPlayer();
  const upcoming = queue.slice(index + 1);

  return (
    <div
      data-slot="queue-list"
      className={cn("flex h-full flex-col gap-2 overflow-y-auto px-5", className)}
      {...props}
    >
      <div className="flex items-center justify-between pb-1">
        <h3 className="text-headline">{title}</h3>
        <ListMusicIcon className="size-4 text-secondary-label" />
      </div>

      {queue[index] ? (
        <Row
          artworkUrl={queue[index].artworkUrl}
          title={queue[index].title}
          artist={queue[index].artist}
          trailing={<EqualizerBars paused={!playing} />}
        />
      ) : null}

      {upcoming.length > 0 ? (
        <div className="flex flex-col [&>button:not(:first-child)]:shadow-[0_-0.5px_0_0_var(--separator)]">
          {upcoming.map((t, i) => (
            <Row
              key={t.id}
              asButton
              artworkUrl={t.artworkUrl}
              title={t.title}
              artist={t.artist}
              onSelect={() => play(queue, index + 1 + i)}
            />
          ))}
        </div>
      ) : (
        <p className="py-6 text-center text-footnote text-secondary-label">
          Nothing playing next.
        </p>
      )}
    </div>
  );
}

function Row({
  artworkUrl,
  title,
  artist,
  trailing,
  asButton,
  onSelect,
}: {
  artworkUrl?: string;
  title: string;
  artist: string;
  trailing?: React.ReactNode;
  asButton?: boolean;
  onSelect?: () => void;
}) {
  const Comp: React.ElementType = asButton ? "button" : "div";

  return (
    <Comp
      type={asButton ? "button" : undefined}
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-3 py-2 text-left outline-none",
        asButton &&
          "cursor-default select-none focus-visible:bg-fill-quaternary active:bg-fill-tertiary"
      )}
    >
      {artworkUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={artworkUrl}
          alt=""
          loading="lazy"
          className="size-11 shrink-0 rounded-[6px] object-cover shadow-[inset_0_0_0_0.5px_var(--separator)]"
        />
      ) : (
        <span className="size-11 shrink-0 rounded-[6px] bg-fill-tertiary" />
      )}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="truncate text-subheadline text-label">{title}</span>
        <span className="truncate text-footnote text-secondary-label">
          {artist}
        </span>
      </span>
      {trailing}
    </Comp>
  );
}

export { QueueList };
