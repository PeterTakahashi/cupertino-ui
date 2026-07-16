"use client";

import * as React from "react";
import {
  ChevronLeftIcon,
  ListMusicIcon,
  MicVocalIcon,
  MusicIcon,
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  SquareStackIcon,
} from "lucide-react";

import { AlbumCard, AlbumGrid } from "@/components/ui/album-grid";
import { AlbumHeader } from "@/components/ui/album-header";
import { formatTime, useAudioPlayer } from "@/components/ui/audio-player";
import { TrackList, TrackRow } from "@/components/ui/track-list";
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
  Toolbar,
  ToolbarButton,
  ToolbarSpacer,
} from "@/registry/cupertino-ui/toolbar";
import { albums, allTracks, playlists, type Album } from "@/lib/music-library";

function PlayerBar() {
  const {
    track,
    playing,
    toggle,
    next,
    prev,
    currentTime,
    duration,
    seek,
    volume,
    setVolume,
  } = useAudioPlayer();
  const total = duration || track?.duration || 0;

  return (
    <div className="flex shrink-0 items-center gap-4 bg-secondary-background/80 px-4 py-2 shadow-[0_-0.5px_0_0_var(--separator)] backdrop-blur-xl">
      <div className="flex items-center gap-1 text-label">
        <button type="button" aria-label="Previous" onClick={prev} className="rounded p-1.5 hover:bg-fill-quaternary [&_svg]:size-5 [&_svg]:fill-current">
          <SkipBackIcon />
        </button>
        <button type="button" aria-label={playing ? "Pause" : "Play"} onClick={toggle} className="rounded p-1.5 hover:bg-fill-quaternary [&_svg]:size-6 [&_svg]:fill-current">
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button type="button" aria-label="Next" onClick={next} className="rounded p-1.5 hover:bg-fill-quaternary [&_svg]:size-5 [&_svg]:fill-current">
          <SkipForwardIcon />
        </button>
      </div>

      {/* LCD */}
      <div className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-[8px] bg-fill-quaternary px-3">
        {track ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={track.artworkUrl} alt="" className="size-9 shrink-0 rounded-[5px] object-cover" />
            <div className="min-w-0 flex-1 text-center">
              <p className="truncate text-footnote font-semibold">{track.title}</p>
              <p className="truncate text-caption-1 text-secondary-label">
                {track.artist} — {track.album}
              </p>
              <div className="mt-0.5 flex items-center gap-2 text-[10px] tabular-nums text-tertiary-label">
                <span>{formatTime(currentTime)}</span>
                <input
                  type="range"
                  aria-label="Playback position"
                  min={0}
                  max={total || 1}
                  step={0.1}
                  value={Math.min(currentTime, total)}
                  onChange={(e) => seek(Number(e.target.value))}
                  className="h-[3px] w-full appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:size-0 [&::-webkit-slider-thumb]:appearance-none"
                  style={{
                    background: `linear-gradient(to right, var(--secondary-label) ${total ? (currentTime / total) * 100 : 0}%, var(--system-fill) 0%)`,
                  }}
                />
                <span>-{formatTime(Math.max(0, total - currentTime))}</span>
              </div>
            </div>
          </>
        ) : (
          <p className="w-full text-center text-footnote text-tertiary-label">
            <MusicIcon className="mx-auto size-5" />
          </p>
        )}
      </div>

      <div className="hidden w-32 sm:block">
        <Slider
          value={[volume * 100]}
          onValueChange={([v]) => setVolume(v / 100)}
          className="[&_[data-slot=slider-thumb]]:size-3.5"
        />
      </div>
    </div>
  );
}

export function MusicDesktop({ className }: { className?: string }) {
  const [section, setSection] = React.useState("albums");
  const [openAlbum, setOpenAlbum] = React.useState<Album | null>(null);
  const [query, setQuery] = React.useState("");
  const { play, track, playing } = useAudioPlayer();

  const filteredTracks = allTracks.filter(
    (x) =>
      x.title.toLowerCase().includes(query.toLowerCase()) ||
      x.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={className}>
      <SidebarProvider
        selected={section}
        onSelect={(v) => {
          setSection(v);
          setOpenAlbum(null);
        }}
      >
        <div className="flex h-[640px] w-full flex-col overflow-hidden rounded-[12px] bg-background shadow-[var(--shadow-window)]">
          <Toolbar className="shrink-0 gap-2 shadow-none">
            <SidebarToggle />
            {openAlbum ? (
              <ToolbarButton aria-label="Back" onClick={() => setOpenAlbum(null)}>
                <ChevronLeftIcon />
              </ToolbarButton>
            ) : null}
            <ToolbarSpacer />
            <div className="w-64">
              <SearchField
                placeholder="Search"
                showCancel={false}
                onValueChange={setQuery}
                className="[&_input]:h-7 [&_input]:text-footnote"
              />
            </div>
          </Toolbar>

          <div className="flex min-h-0 flex-1">
            <Sidebar>
              <SidebarSection title="Library">
                <SidebarItem value="albums" icon={<SquareStackIcon />}>
                  Albums
                </SidebarItem>
                <SidebarItem value="songs" icon={<MusicIcon />} badge={String(allTracks.length)}>
                  Songs
                </SidebarItem>
                <SidebarItem value="artists" icon={<MicVocalIcon />}>
                  Artists
                </SidebarItem>
              </SidebarSection>
              <SidebarSection title="Playlists">
                {playlists.map((p) => (
                  <SidebarItem key={p.id} value={p.id} icon={<ListMusicIcon />}>
                    {p.title}
                  </SidebarItem>
                ))}
              </SidebarSection>
            </Sidebar>

            <main className="min-w-0 flex-1 overflow-y-auto p-6">
              {openAlbum ? (
                <div className="mx-auto flex max-w-xl flex-col gap-5">
                  <AlbumHeader
                    artworkUrl={openAlbum.artworkUrl}
                    title={openAlbum.title}
                    artist={openAlbum.artist}
                    meta={openAlbum.meta}
                    onPlay={() => play(openAlbum.tracks, 0)}
                    onShuffle={() =>
                      play([...openAlbum.tracks].sort(() => Math.random() - 0.5), 0)
                    }
                  />
                  <TrackList className="rounded-[var(--radius-card)] bg-grouped-secondary">
                    {openAlbum.tracks.map((tr, i) => (
                      <TrackRow
                        key={tr.id}
                        index={i + 1}
                        title={tr.title}
                        duration={formatTime(tr.duration ?? 0)}
                        active={track?.id === tr.id}
                        playing={playing}
                        onClick={() => play(openAlbum.tracks, i)}
                      />
                    ))}
                  </TrackList>
                </div>
              ) : section === "albums" ? (
                <>
                  <h1 className="mb-5 text-title-1 tracking-tight">Albums</h1>
                  <AlbumGrid>
                    {albums.map((a) => (
                      <AlbumCard
                        key={a.id}
                        artworkUrl={a.artworkUrl}
                        title={a.title}
                        subtitle={a.artist}
                        onClick={() => setOpenAlbum(a)}
                      />
                    ))}
                  </AlbumGrid>
                </>
              ) : section === "songs" ? (
                <>
                  <h1 className="mb-5 text-title-1 tracking-tight">Songs</h1>
                  <TrackList className="rounded-[var(--radius-card)] bg-grouped-secondary">
                    {(query ? filteredTracks : allTracks).map((tr) => (
                      <TrackRow
                        key={tr.id}
                        title={tr.title}
                        subtitle={tr.artist}
                        artworkUrl={tr.artworkUrl}
                        duration={formatTime(tr.duration ?? 0)}
                        active={track?.id === tr.id}
                        playing={playing}
                        onClick={() =>
                          play(allTracks, allTracks.findIndex((x) => x.id === tr.id))
                        }
                      />
                    ))}
                  </TrackList>
                </>
              ) : section === "artists" ? (
                <>
                  <h1 className="mb-5 text-title-1 tracking-tight">Artists</h1>
                  <TrackList className="rounded-[var(--radius-card)] bg-grouped-secondary">
                    {[...new Set(allTracks.map((x) => x.artist))].map((artist) => {
                      const first = allTracks.find((x) => x.artist === artist)!;
                      return (
                        <TrackRow
                          key={artist}
                          title={artist}
                          subtitle={`${allTracks.filter((x) => x.artist === artist).length} song(s)`}
                          artworkUrl={first.artworkUrl}
                          onClick={() =>
                            play(allTracks, allTracks.findIndex((x) => x.artist === artist))
                          }
                        />
                      );
                    })}
                  </TrackList>
                </>
              ) : (
                <>
                  <h1 className="mb-5 text-title-1 tracking-tight">
                    {playlists.find((p) => p.id === section)?.title}
                  </h1>
                  <AlbumHeader
                    artworkUrl={playlists.find((p) => p.id === section)?.artworkUrl}
                    title={playlists.find((p) => p.id === section)?.title ?? ""}
                    artist="Apple Music"
                    meta={`${allTracks.length} songs`}
                    onPlay={() => play(allTracks, 0)}
                    onShuffle={() =>
                      play([...allTracks].sort(() => Math.random() - 0.5), 0)
                    }
                  />
                </>
              )}
            </main>
          </div>

          <PlayerBar />
        </div>
      </SidebarProvider>
    </div>
  );
}
