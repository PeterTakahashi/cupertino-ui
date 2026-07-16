"use client";

import * as React from "react";
import { TrackList, TrackRow } from "@/components/ui/track-list";
import { formatTime } from "@/components/ui/audio-player";
import { albums } from "@/lib/music-library";

export default function TrackListDemo() {
  const [active, setActive] = React.useState(0);

  return (
    <div className="w-full max-w-sm rounded-[var(--radius-card)] bg-grouped-secondary">
      <TrackList>
        {albums[0].tracks.map((t, i) => (
          <TrackRow
            key={t.id}
            index={i + 1}
            title={t.title}
            duration={formatTime(t.duration ?? 0)}
            active={i === active}
            playing={i === active}
            onClick={() => setActive(i)}
          />
        ))}
      </TrackList>
    </div>
  );
}
