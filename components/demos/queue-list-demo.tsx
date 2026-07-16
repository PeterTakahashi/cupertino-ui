"use client";

import * as React from "react";
import { AudioPlayerProvider, useAudioPlayer } from "@/components/ui/audio-player";
import { QueueList } from "@/components/ui/queue-list";
import { allTracks } from "@/lib/music-library";

function Demo() {
  const { load, track } = useAudioPlayer();

  React.useEffect(() => {
    if (!track) load(allTracks, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-80 w-full max-w-sm overflow-hidden rounded-[var(--radius-group)] bg-grouped-secondary py-4 shadow-[var(--shadow-card)]">
      <QueueList />
    </div>
  );
}

export default function QueueListDemo() {
  return (
    <AudioPlayerProvider>
      <Demo />
    </AudioPlayerProvider>
  );
}
