"use client";

import * as React from "react";
import { AudioPlayerProvider, useAudioPlayer } from "@/components/ui/audio-player";
import { LyricsView } from "@/components/ui/lyrics-view";
import { allTracks, lyrics } from "@/lib/music-library";

function Demo() {
  const { load, track } = useAudioPlayer();

  React.useEffect(() => {
    if (!track) load(allTracks, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!track) return null;

  return (
    <div className="h-80 w-full max-w-sm overflow-hidden rounded-[var(--radius-group)] bg-grouped-secondary shadow-[var(--shadow-card)]">
      <LyricsView lines={lyrics[track.id] ?? []} />
    </div>
  );
}

export default function LyricsViewDemo() {
  return (
    <AudioPlayerProvider>
      <Demo />
    </AudioPlayerProvider>
  );
}
