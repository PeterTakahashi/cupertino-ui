import type { AudioTrack } from "@/components/ui/audio-player";
import type { LyricLine } from "@/components/ui/lyrics-view";

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

/**
 * Demo lyric sheets for the LyricsView showcase. The tracks are
 * instrumental, so these are sample lines written for the demo —
 * timed to each song's structure, not transcriptions.
 */
const sheet = (lines: [number, string][]): LyricLine[] =>
  lines.map(([time, text]) => ({ time, text }));

export const lyrics: Record<string, LyricLine[]> = {
  "future-garage": sheet([
    [0, "(Instrumental demo lyrics)"],
    [8, "City hum below the window"],
    [16, "Signal lights are counting slow"],
    [24, "Every wire holds a whisper"],
    [32, "Every street a stereo"],
    [44, "Run the night on future garage"],
    [52, "Let the low end lead you home"],
    [62, "Static blooms across the skyline"],
    [72, "We were never here alone"],
    [88, "Hold the loop, rewind the echo"],
    [100, "Play it back and let it go"],
    [116, "Run the night on future garage"],
    [128, "Let the low end lead you home"],
  ]),
  "fire-in-the-dream": sheet([
    [0, "(Instrumental demo lyrics)"],
    [10, "Sparks along the borderline"],
    [20, "A fire in the dream tonight"],
    [32, "Shadows learn to move like water"],
    [44, "Embers turn to satellite"],
    [60, "Carry me through velvet static"],
    [74, "Where the night is burning bright"],
    [92, "A fire in the dream, a fire"],
    [108, "Keep it burning out of sight"],
    [126, "Sparks along the borderline"],
    [140, "We dissolve into the light"],
  ]),
  "spiral-wave": sheet([
    [0, "(Instrumental demo lyrics)"],
    [12, "Down the spiral, catch the wave"],
    [26, "Every turn a brand new phase"],
    [40, "Gravity is optional"],
    [54, "In the circles that we trace"],
    [72, "Round and round the signal travels"],
    [90, "Painting rings around the bass"],
    [110, "Down the spiral, catch the wave"],
    [130, "Disappear without a trace"],
    [150, "Round and round the signal travels"],
    [168, "Till the morning finds its place"],
  ]),
  "lo-fi-chill": sheet([
    [0, "(Instrumental demo lyrics)"],
    [10, "Dust on vinyl, coffee steam"],
    [22, "Sunday running at half speed"],
    [36, "Tape hiss like a summer rain"],
    [50, "Nothing here we really need"],
    [66, "Slow it down, the day can wait"],
    [80, "Let the crackle set the scene"],
    [96, "Dust on vinyl, coffee steam"],
    [112, "Living somewhere in between"],
    [130, "Slow it down, the day can wait"],
    [146, "Drifting on a lo-fi dream"],
  ]),
  "surf-the-dreams": sheet([
    [0, "(Instrumental demo lyrics)"],
    [10, "Paddle out beyond the shallows"],
    [22, "Moonlight breaking on the foam"],
    [36, "Every wave a sleeping story"],
    [50, "Every tide a way back home"],
    [66, "Surf the dreams until the sunrise"],
    [80, "Ride the glow of undertow"],
    [96, "Paddle out beyond the shallows"],
    [112, "Where the quiet currents flow"],
    [128, "Surf the dreams until the sunrise"],
    [140, "Let the ocean take it slow"],
  ]),
  rapture: sheet([
    [0, "(Instrumental demo lyrics)"],
    [12, "Lift me up above the wires"],
    [26, "Golden hour in your eyes"],
    [42, "Every heartbeat is a chorus"],
    [58, "Every echo amplifies"],
    [76, "Rapture, take me where the light bends"],
    [94, "Hold the note and hold the sky"],
    [114, "Lift me up above the wires"],
    [134, "We were never meant to fly"],
    [156, "Rapture, take me where the light bends"],
    [180, "One more chorus, one more try"],
    [204, "Golden hour, say goodbye"],
  ]),
};

export type Artist = {
  name: string;
  tracks: AudioTrack[];
  artworkUrl: string;
};

export const artists: Artist[] = [...new Set(allTracks.map((t) => t.artist))].map(
  (name) => {
    const tracks = allTracks.filter((t) => t.artist === name);
    return { name, tracks, artworkUrl: tracks[0].artworkUrl ?? "" };
  }
);
