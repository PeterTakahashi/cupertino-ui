"use client";

import { AlbumCard, AlbumGrid } from "@/components/ui/album-grid";
import { albums, playlists } from "@/lib/music-library";

export default function AlbumGridDemo() {
  return (
    <AlbumGrid className="w-full max-w-md grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
      {[...albums.map((a) => ({...a, subtitle: a.artist})), ...playlists.map((p) => ({...p, subtitle: "Apple Music"}))].map((x) => (
        <AlbumCard key={x.id} artworkUrl={x.artworkUrl} title={x.title} subtitle={x.subtitle} />
      ))}
    </AlbumGrid>
  );
}
