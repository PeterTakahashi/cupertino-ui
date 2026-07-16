"use client";

import { AlbumHeader } from "@/components/ui/album-header";
import { albums } from "@/lib/music-library";

export default function AlbumHeaderDemo() {
  return (
    <AlbumHeader
      artworkUrl={albums[0].artworkUrl}
      title={albums[0].title}
      artist={albums[0].artist}
      meta={albums[0].meta}
    />
  );
}
