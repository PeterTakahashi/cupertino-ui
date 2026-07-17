"use client";

import * as React from "react";
import {
  ChevronRightIcon,
  ListMusicIcon as QueueIcon,
  PlayIcon,
  QuoteIcon,
  LibraryIcon,
  ListMusicIcon,
  MicVocalIcon,
  MusicIcon,
  SearchIcon,
  SquareStackIcon,
} from "lucide-react";

import { AlbumCard, AlbumGrid } from "@/components/ui/album-grid";
import { AlbumHeader } from "@/components/ui/album-header";
import { useAudioPlayer } from "@/components/ui/audio-player";
import { MiniPlayer } from "@/components/ui/mini-player";
import { NowPlaying } from "@/components/ui/now-playing";
import { TrackList, TrackRow } from "@/components/ui/track-list";
import { List, ListItem } from "@/registry/cupertino-ui/list";
import {
  NavigationLink,
  NavigationStack,
} from "@/registry/cupertino-ui/navigation-stack";
import { SearchField } from "@/registry/cupertino-ui/search-field";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/registry/cupertino-ui/sheet";
import { GlassTabBar } from "@/components/ui/glass-tab-bar";
import { LyricsView } from "@/components/ui/lyrics-view";
import { QueueList } from "@/components/ui/queue-list";
import {
  albums,
  allTracks,
  artists,
  lyrics,
  playlists,
  type Album,
  type Artist,
} from "@/lib/music-library";
import { formatTime } from "@/components/ui/audio-player";

function AlbumScreen({ album }: { album: Album }) {
  const { play, track, playing } = useAudioPlayer();

  return (
    <div className="flex flex-col gap-5 pb-4">
      <AlbumHeader
        artworkUrl={album.artworkUrl}
        title={album.title}
        artist={album.artist}
        meta={album.meta}
        onPlay={() => play(album.tracks, 0)}
        onShuffle={() =>
          play([...album.tracks].sort(() => Math.random() - 0.5), 0)
        }
      />
      <div className="rounded-[var(--radius-card)] bg-grouped-secondary">
        <TrackList>
          {album.tracks.map((tr, i) => (
            <TrackRow
              key={tr.id}
              index={i + 1}
              title={tr.title}
              duration={formatTime(tr.duration ?? 0)}
              active={track?.id === tr.id}
              playing={playing}
              onClick={() => play(album.tracks, i)}
            />
          ))}
        </TrackList>
      </div>
      <p className="px-1 text-footnote text-secondary-label">
        {album.tracks.length} songs ·{" "}
        {formatTime(album.tracks.reduce((s, x) => s + (x.duration ?? 0), 0))}{" "}
        minutes
      </p>
    </div>
  );
}

function AlbumsScreen() {
  const { push } = useNavigationBridge();

  return (
    <AlbumGrid className="grid-cols-2">
      {albums.map((a) => (
        <AlbumCard
          key={a.id}
          artworkUrl={a.artworkUrl}
          title={a.title}
          subtitle={a.artist}
          onClick={() => push(a.title, <AlbumScreen album={a} />)}
        />
      ))}
    </AlbumGrid>
  );
}

function SongsScreen() {
  const { play, track, playing } = useAudioPlayer();

  return (
    <div className="rounded-[var(--radius-card)] bg-grouped-secondary">
      <TrackList>
        {allTracks.map((tr, i) => (
          <TrackRow
            key={tr.id}
            title={tr.title}
            subtitle={tr.artist}
            artworkUrl={tr.artworkUrl}
            duration={formatTime(tr.duration ?? 0)}
            active={track?.id === tr.id}
            playing={playing}
            onClick={() => play(allTracks, i)}
          />
        ))}
      </TrackList>
    </div>
  );
}

// NavigationLink can only push from inside the stack; expose push for
// grid cards rendered inside screens.
import { useNavigation } from "@/registry/cupertino-ui/navigation-stack";
function useNavigationBridge() {
  return useNavigation();
}


function ArtistScreen({ artist }: { artist: Artist }) {
  const { play, track, playing } = useAudioPlayer();
  const { push } = useNavigationBridge();
  const artistAlbums = albums.filter((a) =>
    a.tracks.some((t) => t.artist === artist.name)
  );

  return (
    <div className="flex flex-col gap-6 pb-4">
      <header className="flex flex-col items-center gap-3 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artist.artworkUrl}
          alt=""
          className="size-32 rounded-full object-cover shadow-[0_0_0_0.5px_var(--separator),0_8px_24px_rgba(0,0,0,0.2)]"
        />
        <h1 className="text-title-2">{artist.name}</h1>
        <button
          type="button"
          onClick={() => play(artist.tracks, 0)}
          className="flex h-9 cursor-default select-none items-center gap-2 rounded-full bg-red px-5 text-subheadline font-semibold text-white outline-none active:scale-[0.97] [&_svg]:size-3.5 [&_svg]:fill-current"
        >
          <PlayIcon /> Play
        </button>
      </header>

      <section className="flex flex-col gap-2">
        <h2 className="px-1 text-title-3">Top Songs</h2>
        <div className="rounded-[var(--radius-card)] bg-grouped-secondary">
          <TrackList>
            {artist.tracks.map((tr, i) => (
              <TrackRow
                key={tr.id}
                title={tr.title}
                subtitle={tr.album}
                artworkUrl={tr.artworkUrl}
                duration={formatTime(tr.duration ?? 0)}
                active={track?.id === tr.id}
                playing={playing}
                onClick={() => play(artist.tracks, i)}
              />
            ))}
          </TrackList>
        </div>
      </section>

      {artistAlbums.length > 0 ? (
        <section className="flex flex-col gap-3">
          <h2 className="px-1 text-title-3">Albums</h2>
          <AlbumGrid className="grid-cols-2">
            {artistAlbums.map((a) => (
              <AlbumCard
                key={a.id}
                artworkUrl={a.artworkUrl}
                title={a.title}
                subtitle={a.meta}
                onClick={() => push(a.title, <AlbumScreen album={a} />)}
              />
            ))}
          </AlbumGrid>
        </section>
      ) : null}
    </div>
  );
}

function ArtistsScreen() {
  const { push } = useNavigationBridge();

  return (
    <div className="rounded-[var(--radius-card)] bg-grouped-secondary">
      <TrackList>
        {artists.map((a) => (
          <TrackRow
            key={a.name}
            title={a.name}
            subtitle={`${a.tracks.length} song${a.tracks.length > 1 ? "s" : ""}`}
            artworkUrl={a.artworkUrl}
            onClick={() => push(a.name, <ArtistScreen artist={a} />)}
          />
        ))}
      </TrackList>
    </div>
  );
}

function LibraryTab() {
  return (
    <NavigationStack title="Library" className="h-full bg-grouped">
      <div className="flex flex-col gap-6">
        <List>
          <NavigationLink
            title="Playlists"
            icon={<ListMusicIcon />}
            iconColor="var(--system-red)"
            destination={
              <AlbumGrid className="grid-cols-2">
                {playlists.map((p) => (
                  <AlbumCard
                    key={p.id}
                    artworkUrl={p.artworkUrl}
                    title={p.title}
                    subtitle="Apple Music"
                  />
                ))}
              </AlbumGrid>
            }
          />
          <NavigationLink
            title="Artists"
            icon={<MicVocalIcon />}
            iconColor="var(--system-red)"
            destination={<ArtistsScreen />}
          />
          <NavigationLink
            title="Albums"
            icon={<SquareStackIcon />}
            iconColor="var(--system-red)"
            destination={<AlbumsScreen />}
          />
          <NavigationLink
            title="Songs"
            icon={<MusicIcon />}
            iconColor="var(--system-red)"
            destination={<SongsScreen />}
          />
        </List>

        <section className="flex flex-col gap-3">
          <h2 className="flex items-center gap-1 px-1 text-title-3">
            Recently Added <ChevronRightIcon className="size-4 text-tertiary-label" />
          </h2>
          <RecentlyAddedGrid />
        </section>
      </div>
    </NavigationStack>
  );
}

function RecentlyAddedGrid() {
  const { push } = useNavigationBridge();

  return (
    <AlbumGrid className="grid-cols-2">
      {albums.map((a) => (
        <AlbumCard
          key={a.id}
          artworkUrl={a.artworkUrl}
          title={a.title}
          subtitle={a.artist}
          onClick={() => push(a.title, <AlbumScreen album={a} />)}
        />
      ))}
    </AlbumGrid>
  );
}

function BrowseTab() {
  const { play } = useAudioPlayer();

  return (
    <div className="flex h-full flex-col gap-5 overflow-y-auto bg-grouped p-4">
      <h1 className="text-large-title tracking-tight">Browse</h1>
      <button
        type="button"
        onClick={() => play(albums[0].tracks, 0)}
        className="relative overflow-hidden rounded-[var(--radius-group)] text-left shadow-[var(--shadow-card)]"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={albums[0].artworkUrl} alt="" className="h-44 w-full object-cover" />
        <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10 text-white">
          <span className="text-caption-1 uppercase text-white/70">
            Featured Album
          </span>
          <span className="text-title-3">{albums[0].title}</span>
        </span>
      </button>
      <section className="flex flex-col gap-3">
        <h2 className="px-1 text-title-3">Made for You</h2>
        <AlbumGrid className="grid-cols-2">
          {playlists.map((p) => (
            <AlbumCard
              key={p.id}
              artworkUrl={p.artworkUrl}
              title={p.title}
              subtitle="Apple Music"
              onClick={() => play(allTracks, 0)}
            />
          ))}
        </AlbumGrid>
      </section>
    </div>
  );
}

function SearchTab() {
  const { play, track, playing } = useAudioPlayer();
  const [query, setQuery] = React.useState("");

  const results = allTracks.filter(
    (x) =>
      query &&
      (x.title.toLowerCase().includes(query.toLowerCase()) ||
        x.artist.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto bg-grouped p-4">
      <h1 className="text-large-title tracking-tight">Search</h1>
      <SearchField
        placeholder="Artists, Songs, Albums"
        onValueChange={setQuery}
      />
      {query ? (
        results.length ? (
          <div className="rounded-[var(--radius-card)] bg-grouped-secondary">
            <TrackList>
              {results.map((tr) => (
                <TrackRow
                  key={tr.id}
                  title={tr.title}
                  subtitle={tr.artist}
                  artworkUrl={tr.artworkUrl}
                  active={track?.id === tr.id}
                  playing={playing}
                  onClick={() =>
                    play(allTracks, allTracks.findIndex((x) => x.id === tr.id))
                  }
                />
              ))}
            </TrackList>
          </div>
        ) : (
          <p className="pt-8 text-center text-subheadline text-secondary-label">
            No results for &ldquo;{query}&rdquo;
          </p>
        )
      ) : (
        <p className="text-footnote text-secondary-label">
          Search your library.
        </p>
      )}
    </div>
  );
}

export function MusicMobile({ className }: { className?: string }) {
  const [nowPlayingOpen, setNowPlayingOpen] = React.useState(false);
  const [tab, setTab] = React.useState("library");
  const { track } = useAudioPlayer();

  return (
    <div className={className}>
      <div className="relative mx-auto flex h-[calc(100dvh-96px)] max-h-[820px] w-full max-w-md flex-col overflow-hidden rounded-[24px] bg-grouped shadow-[var(--shadow-window)]">
        {/* Content scrolls beneath the floating Liquid Glass controls */}
        <div className="min-h-0 flex-1 overflow-hidden">
          {tab === "library" ? (
            <LibraryTab />
          ) : tab === "browse" ? (
            <BrowseTab />
          ) : (
            <SearchTab />
          )}
        </div>

        {track ? (
          <div className="pointer-events-none absolute inset-x-3 bottom-[86px] z-10">
            <MiniPlayer
              className="pointer-events-auto glass-regular bg-transparent dark:bg-transparent"
              onExpand={() => setNowPlayingOpen(true)}
            />
          </div>
        ) : null}

        {/* iOS 26 floating Liquid Glass tab bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center">
          <GlassTabBar
            className="pointer-events-auto"
            value={tab}
            onValueChange={setTab}
            items={[
              { value: "library", icon: <LibraryIcon />, label: "Library" },
              { value: "browse", icon: <SquareStackIcon />, label: "Browse" },
              { value: "search", icon: <SearchIcon />, label: "Search" },
            ]}
          />
        </div>
      </div>

      <Sheet open={nowPlayingOpen} onOpenChange={setNowPlayingOpen}>
        <SheetContent className="max-w-md bg-secondary-background dark:bg-gray-6">
          <SheetTitle className="sr-only">Now Playing</SheetTitle>
          <NowPlayingSheet />
        </SheetContent>
      </Sheet>
    </div>
  );
}

function NowPlayingSheet() {
  const [view, setView] = React.useState<"player" | "lyrics" | "queue">("player");
  const { track } = useAudioPlayer();
  const lines = track ? lyrics[track.id] : undefined;

  return (
    <div className="flex h-[85dvh] flex-col">
      {view === "player" ? (
        <div className="flex-1 overflow-y-auto">
          <NowPlaying />
        </div>
      ) : (
        <>
          {/* Compact header while lyrics / queue are open */}
          <div className="flex items-center gap-3 px-5 py-3">
            {track?.artworkUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={track.artworkUrl}
                alt=""
                className="size-12 rounded-[7px] object-cover shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
              />
            ) : null}
            <div className="min-w-0 flex-1">
              <p className="truncate text-subheadline font-semibold">{track?.title}</p>
              <p className="truncate text-footnote text-secondary-label">
                {track?.artist}
              </p>
            </div>
          </div>
          {view === "lyrics" ? (
            lines ? (
              <LyricsView lines={lines} className="min-h-0 flex-1" />
            ) : (
              <p className="flex flex-1 items-center justify-center text-footnote text-secondary-label">
                No lyrics for this song.
              </p>
            )
          ) : (
            <QueueList className="min-h-0 flex-1" />
          )}
        </>
      )}

      {/* Bottom controls: lyrics / queue toggles */}
      <div className="flex shrink-0 items-center justify-around px-10 pb-6 pt-2">
        <button
          type="button"
          aria-label="Lyrics"
          aria-pressed={view === "lyrics"}
          onClick={() => setView((v) => (v === "lyrics" ? "player" : "lyrics"))}
          className={`flex size-10 cursor-default items-center justify-center rounded-[10px] outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-blue/40 [&_svg]:size-5 ${
            view === "lyrics" ? "bg-fill text-label" : "text-secondary-label"
          }`}
        >
          <QuoteIcon />
        </button>
        <button
          type="button"
          aria-label="Up Next"
          aria-pressed={view === "queue"}
          onClick={() => setView((v) => (v === "queue" ? "player" : "queue"))}
          className={`flex size-10 cursor-default items-center justify-center rounded-[10px] outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-blue/40 [&_svg]:size-5 ${
            view === "queue" ? "bg-fill text-label" : "text-secondary-label"
          }`}
        >
          <QueueIcon />
        </button>
      </div>
    </div>
  );
}
