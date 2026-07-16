"use client";

import * as React from "react";
import {
  ChevronRightIcon,
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
import {
  TabBar,
  TabBarContent,
  TabBarItem,
  TabBarList,
} from "@/registry/cupertino-ui/tab-bar";
import { albums, allTracks, playlists, type Album } from "@/lib/music-library";
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
            destination={
              <List>
                {[...new Set(allTracks.map((x) => x.artist))].map((artist) => (
                  <ListItem key={artist} chevron onClick={() => {}}>
                    {artist}
                  </ListItem>
                ))}
              </List>
            }
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
  const { track } = useAudioPlayer();

  return (
    <div className={className}>
      <div className="relative mx-auto flex h-[calc(100dvh-96px)] max-h-[820px] w-full max-w-md flex-col overflow-hidden rounded-[24px] bg-grouped shadow-[var(--shadow-window)]">
        <TabBar defaultValue="library" className="h-full">
          <TabBarContent value="library" className="min-h-0 overflow-hidden">
            <LibraryTab />
          </TabBarContent>
          <TabBarContent value="browse" className="min-h-0 overflow-hidden">
            <BrowseTab />
          </TabBarContent>
          <TabBarContent value="search" className="min-h-0 overflow-hidden">
            <SearchTab />
          </TabBarContent>

          {track ? (
            <div className="pointer-events-none absolute inset-x-2 bottom-[56px] z-10">
              <MiniPlayer
                className="pointer-events-auto"
                onExpand={() => setNowPlayingOpen(true)}
              />
            </div>
          ) : null}

          <TabBarList>
            <TabBarItem value="library" icon={<LibraryIcon />} className="data-[state=active]:text-red">
              Library
            </TabBarItem>
            <TabBarItem value="browse" icon={<SquareStackIcon />} className="data-[state=active]:text-red">
              Browse
            </TabBarItem>
            <TabBarItem value="search" icon={<SearchIcon />} className="data-[state=active]:text-red">
              Search
            </TabBarItem>
          </TabBarList>
        </TabBar>
      </div>

      <Sheet open={nowPlayingOpen} onOpenChange={setNowPlayingOpen}>
        <SheetContent className="max-w-md bg-secondary-background dark:bg-gray-6">
          <SheetTitle className="sr-only">Now Playing</SheetTitle>
          <div className="overflow-y-auto">
            <NowPlaying />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
