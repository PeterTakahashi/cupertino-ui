"use client";

import * as React from "react";
import { AudioPlayerProvider, useAudioPlayer } from "@/components/ui/audio-player";
import { MiniPlayer } from "@/components/ui/mini-player";
import { Button } from "@/registry/cupertino-ui/button";
import { allTracks } from "@/lib/music-library";

function Demo() {
  const { load, track } = useAudioPlayer();

  React.useEffect(() => {
    if (!track) load(allTracks, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <MiniPlayer />
      <Button variant="plain" onClick={() => load(allTracks, 0)}>
        Reset queue
      </Button>
    </div>
  );
}

export default function MiniPlayerDemo() {
  return (
    <AudioPlayerProvider>
      <Demo />
    </AudioPlayerProvider>
  );
}
