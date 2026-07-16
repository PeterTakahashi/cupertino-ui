"use client";

import * as React from "react";
import {
  HeartIcon,
  ListMusicIcon,
  MicVocalIcon,
  MusicIcon,
  PauseIcon,
  PlayIcon,
  RadioIcon,
  Repeat2Icon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  StarIcon,
} from "lucide-react";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import { Badge } from "@/registry/cupertino-ui/badge";
import { SearchField } from "@/registry/cupertino-ui/search-field";
import {
  Sidebar,
  SidebarItem,
  SidebarProvider,
  SidebarSection,
  SidebarToggle,
} from "@/registry/cupertino-ui/sidebar";
import { Slider } from "@/registry/cupertino-ui/slider";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/cupertino-ui/table";
import { Toolbar, ToolbarSpacer } from "@/registry/cupertino-ui/toolbar";

const tracks = [
  { title: "Golden Hour", artist: "Corduroy Skies", album: "Analog Summer", time: "3:42", hue: 210 },
  { title: "Night Drive", artist: "Neon Palms", album: "Rearview", time: "4:05", hue: 280 },
  { title: "Paper Boats", artist: "June Weather", album: "Small Hours", time: "2:58", hue: 160 },
  { title: "Static Bloom", artist: "Corduroy Skies", album: "Analog Summer", time: "3:21", hue: 25 },
  { title: "Glass Piano", artist: "M. Ellery", album: "Rooms", time: "5:12", hue: 330 },
  { title: "Departures", artist: "Transit Club", album: "Overnight", time: "3:54", hue: 200 },
  { title: "Low Tide", artist: "June Weather", album: "Small Hours", time: "4:31", hue: 180 },
  { title: "Copper Light", artist: "M. Ellery", album: "Rooms", time: "3:09", hue: 45 },
];

export default function MusicShowcase() {
  const [section, setSection] = React.useState("songs");
  const [query, setQuery] = React.useState("");
  const [current, setCurrent] = React.useState(0);
  const [playing, setPlaying] = React.useState(true);

  const shown = tracks.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.artist.toLowerCase().includes(query.toLowerCase())
  );
  const track = tracks[current];

  return (
    <ShowcaseFrame title="Music">
      <SidebarProvider selected={section} onSelect={setSection}>
        <div className="flex h-[620px] flex-col overflow-hidden rounded-[12px] bg-background shadow-[var(--shadow-window)]">
          {/* Toolbar */}
          <Toolbar className="shrink-0 gap-3">
            <SidebarToggle />
            <ToolbarSpacer />
            <div className="w-64">
              <SearchField
                placeholder="Search songs or artists"
                showCancel={false}
                onValueChange={setQuery}
                className="[&_input]:h-7 [&_input]:text-footnote"
              />
            </div>
          </Toolbar>

          <div className="flex min-h-0 flex-1">
            <Sidebar>
              <SidebarSection title="Library">
                <SidebarItem value="songs" icon={<MusicIcon />} badge={String(tracks.length)}>
                  Songs
                </SidebarItem>
                <SidebarItem value="artists" icon={<MicVocalIcon />}>
                  Artists
                </SidebarItem>
                <SidebarItem value="radio" icon={<RadioIcon />}>
                  Radio
                </SidebarItem>
              </SidebarSection>
              <SidebarSection title="Playlists">
                <SidebarItem value="favorites" icon={<StarIcon />} badge="23">
                  Favorites
                </SidebarItem>
                <SidebarItem value="loved" icon={<HeartIcon />}>
                  Loved Songs
                </SidebarItem>
                <SidebarItem value="queue" icon={<ListMusicIcon />}>
                  Up Next
                </SidebarItem>
              </SidebarSection>
            </Sidebar>

            {/* Track list */}
            <div className="flex min-w-0 flex-1 flex-col overflow-y-auto p-5">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <h1 className="text-title-1 tracking-tight">Songs</h1>
                  <p className="text-footnote text-secondary-label">
                    {shown.length} songs · 31 minutes
                  </p>
                </div>
                <Badge variant="tinted">Synced</Badge>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-8" />
                    <TableHead>Title</TableHead>
                    <TableHead>Artist</TableHead>
                    <TableHead>Album</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {shown.map((t) => {
                    const index = tracks.indexOf(t);
                    return (
                      <TableRow
                        key={t.title}
                        data-state={index === current ? "selected" : undefined}
                        onClick={() => {
                          setCurrent(index);
                          setPlaying(true);
                        }}
                      >
                        <TableCell>
                          <span
                            aria-hidden
                            className="block size-5 rounded-[4px]"
                            style={{
                              background: `linear-gradient(140deg, hsl(${t.hue} 80% 60%), hsl(${t.hue + 40} 80% 45%))`,
                            }}
                          />
                        </TableCell>
                        <TableCell className="font-medium">{t.title}</TableCell>
                        <TableCell className="text-secondary-label">{t.artist}</TableCell>
                        <TableCell className="text-secondary-label">{t.album}</TableCell>
                        <TableCell className="text-right tabular-nums text-secondary-label">
                          {t.time}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Player bar */}
          <div className="flex shrink-0 items-center gap-4 bg-secondary-background/80 px-4 py-2.5 shadow-[0_-0.5px_0_0_var(--separator)] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-secondary-label">
              <button type="button" aria-label="Shuffle" className="rounded p-1 hover:bg-fill-quaternary">
                <ShuffleIcon className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Previous"
                onClick={() => setCurrent((c) => (c + tracks.length - 1) % tracks.length)}
                className="rounded p-1 text-label hover:bg-fill-quaternary"
              >
                <SkipBackIcon className="size-5 fill-current" />
              </button>
              <button
                type="button"
                aria-label={playing ? "Pause" : "Play"}
                onClick={() => setPlaying((p) => !p)}
                className="rounded p-1 text-label hover:bg-fill-quaternary"
              >
                {playing ? (
                  <PauseIcon className="size-6 fill-current" />
                ) : (
                  <PlayIcon className="size-6 fill-current" />
                )}
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => setCurrent((c) => (c + 1) % tracks.length)}
                className="rounded p-1 text-label hover:bg-fill-quaternary"
              >
                <SkipForwardIcon className="size-5 fill-current" />
              </button>
              <button type="button" aria-label="Repeat" className="rounded p-1 hover:bg-fill-quaternary">
                <Repeat2Icon className="size-4" />
              </button>
            </div>

            <div className="flex min-w-0 flex-1 items-center gap-3">
              <span
                aria-hidden
                className="size-9 shrink-0 rounded-[7px]"
                style={{
                  background: `linear-gradient(140deg, hsl(${track.hue} 80% 60%), hsl(${track.hue + 40} 80% 45%))`,
                }}
              />
              <div className="min-w-0">
                <p className="truncate text-footnote font-semibold">{track.title}</p>
                <p className="truncate text-caption-1 text-secondary-label">
                  {track.artist} — {track.album}
                </p>
              </div>
            </div>

            <div className="hidden w-40 items-center sm:flex">
              <Slider defaultValue={[70]} className="[&_[data-slot=slider-thumb]]:size-4" />
            </div>
          </div>
        </div>
      </SidebarProvider>
    </ShowcaseFrame>
  );
}
