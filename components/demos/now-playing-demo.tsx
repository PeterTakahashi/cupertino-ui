"use client";

import * as React from "react";
import { AudioPlayerProvider, useAudioPlayer } from "@/components/ui/audio-player";
import { NowPlaying } from "@/components/ui/now-playing";
import { allTracks } from "@/lib/music-library";

function Demo() {
  const { load, track } = useAudioPlayer();

  React.useEffect(() => {
    if (!track) load(allTracks, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full max-w-sm rounded-[var(--radius-sheet)] bg-secondary-background py-4 shadow-[var(--shadow-card)] dark:bg-gray-6">
      <div aria-hidden className="mx-auto mb-2 h-[5px] w-9 rounded-full bg-tertiary-label" />
      <NowPlaying />
    </div>
  );
}

export default function NowPlayingDemo() {
  return (
    <AudioPlayerProvider>
      <Demo />
    </AudioPlayerProvider>
  );
}
