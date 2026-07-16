import type { AudioTrack } from "@/components/ui/audio-player";

/**
 * Sample library for demos and the Music showcase. Audio and
 * artwork are licensed via Envato Elements; artist names are the
 * original composers.
 */
export type Album = {
  id: string;
  title: string;
  artist: string;
  meta: string;
  artworkUrl: string;
  tracks: AudioTrack[];
};

const t = (
  id: string,
  title: string,
  artist: string,
  album: string,
  artworkUrl: string,
  duration: number
): AudioTrack => ({
  id,
  title,
  artist,
  album,
  artworkUrl,
  audioUrl: `/samples/music/${id}.m4a`,
  duration,
});

export const albums: Album[] = [
  {
    id: "night-signals",
    title: "Night Signals",
    artist: "Various Artists",
    meta: "Electronic · 2026",
    artworkUrl: "/samples/covers/tie-dye.jpg",
    tracks: [
      t("future-garage", "Future Garage", "BerryDeep", "Night Signals", "/samples/covers/tie-dye.jpg", 141),
      t("fire-in-the-dream", "Fire in the Dream", "Enrize", "Night Signals", "/samples/covers/tie-dye.jpg", 153),
      t("spiral-wave", "Spiral Wave", "PremiumBeat", "Night Signals", "/samples/covers/tie-dye.jpg", 185),
    ],
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    artist: "Various Artists",
    meta: "Chill · 2026",
    artworkUrl: "/samples/covers/lake.jpg",
    tracks: [
      t("lo-fi-chill", "Lo Fi Chill", "ElectroAnimals", "Golden Hour", "/samples/covers/lake.jpg", 160),
      t("surf-the-dreams", "Surf the Dreams", "PremiumBeat", "Golden Hour", "/samples/covers/lake.jpg", 148),
      t("rapture", "Rapture", "MARiAN", "Golden Hour", "/samples/covers/lake.jpg", 229),
    ],
  },
];

export const playlists = [
  { id: "focus", title: "Deep Focus", artworkUrl: "/samples/covers/marble.jpg" },
  { id: "hits", title: "Today's Hits", artworkUrl: "/samples/covers/models.jpg" },
];

export const allTracks: AudioTrack[] = albums.flatMap((a) => a.tracks);
