"use client";

import { AudioPlayerProvider, useAudioPlayer } from "@/components/ui/audio-player";
import { Button } from "@/registry/cupertino-ui/button";
import { allTracks } from "@/lib/music-library";

function Controls() {
  const { play, toggle, playing, track } = useAudioPlayer();

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-subheadline text-secondary-label">
        {track ? `${track.title} — ${track.artist}` : "Nothing playing"}
      </p>
      <div className="flex gap-2">
        <Button variant="tinted" onClick={() => play(allTracks, 0)}>
          Load Queue
        </Button>
        <Button onClick={toggle}>{playing ? "Pause" : "Play"}</Button>
      </div>
    </div>
  );
}

export default function AudioPlayerDemo() {
  return (
    <AudioPlayerProvider>
      <Controls />
    </AudioPlayerProvider>
  );
}
