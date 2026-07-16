"use client";

import * as React from "react";

/**
 * Audio engine for the music components. Wraps one HTMLAudioElement
 * in a context: queue, transport, seeking, and volume — the model
 * behind MusicKit's player, sized for the web.
 */
type AudioTrack = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  /** Square artwork URL. */
  artworkUrl?: string;
  /** Playable audio URL (mp3/m4a). */
  audioUrl: string;
  /** Known duration in seconds, shown before metadata loads. */
  duration?: number;
};

type AudioPlayerState = {
  queue: AudioTrack[];
  index: number;
  track: AudioTrack | null;
  playing: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  /** Replace the queue and start playing at startIndex. */
  play: (queue?: AudioTrack[], startIndex?: number) => void;
  toggle: () => void;
  next: () => void;
  prev: () => void;
  seek: (seconds: number) => void;
  setVolume: (volume: number) => void;
};

const AudioPlayerContext = React.createContext<AudioPlayerState | null>(null);

function useAudioPlayer() {
  const ctx = React.useContext(AudioPlayerContext);
  if (!ctx)
    throw new Error("useAudioPlayer must be used inside <AudioPlayerProvider>");
  return ctx;
}

function AudioPlayerProvider({ children }: { children: React.ReactNode }) {
  const audioRef = React.useRef<HTMLAudioElement | null>(null);
  const [queue, setQueue] = React.useState<AudioTrack[]>([]);
  const [index, setIndex] = React.useState(-1);
  const [playing, setPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolumeState] = React.useState(0.8);

  const track = index >= 0 ? (queue[index] ?? null) : null;

  const audio = React.useCallback(() => {
    if (!audioRef.current && typeof window !== "undefined") {
      audioRef.current = new Audio();
      audioRef.current.preload = "metadata";
    }
    return audioRef.current;
  }, []);

  // Load + play whenever the current track changes.
  React.useEffect(() => {
    const el = audio();
    if (!el || !track) return;
    el.src = track.audioUrl;
    el.volume = volume;
    setCurrentTime(0);
    setDuration(track.duration ?? 0);
    if (playing) void el.play().catch(() => setPlaying(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track?.id]);

  React.useEffect(() => {
    const el = audio();
    if (!el) return;
    if (playing) void el.play().catch(() => setPlaying(false));
    else el.pause();
  }, [playing, audio]);

  React.useEffect(() => {
    const el = audio();
    if (!el) return;
    const onTime = () => setCurrentTime(el.currentTime);
    const onMeta = () => setDuration(el.duration || 0);
    const onEnded = () =>
      setIndex((i) => {
        if (i + 1 < queue.length) return i + 1;
        setPlaying(false);
        return i;
      });
    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnded);
    return () => {
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnded);
    };
  }, [audio, queue.length]);

  // Release the element on unmount.
  React.useEffect(
    () => () => {
      audioRef.current?.pause();
      audioRef.current = null;
    },
    []
  );

  const play = React.useCallback(
    (nextQueue?: AudioTrack[], startIndex = 0) => {
      if (nextQueue) {
        setQueue(nextQueue);
        setIndex(startIndex);
      } else if (index < 0 && queue.length > 0) {
        setIndex(0);
      }
      setPlaying(true);
    },
    [index, queue.length]
  );

  const toggle = React.useCallback(() => setPlaying((p) => !p), []);

  const next = React.useCallback(
    () => setIndex((i) => Math.min(i + 1, queue.length - 1)),
    [queue.length]
  );

  const prev = React.useCallback(() => {
    const el = audio();
    // Like iOS: restart the track unless we're within the first 3 s.
    if (el && el.currentTime > 3) {
      el.currentTime = 0;
      setCurrentTime(0);
      return;
    }
    setIndex((i) => Math.max(0, i - 1));
  }, [audio]);

  const seek = React.useCallback(
    (seconds: number) => {
      const el = audio();
      if (!el) return;
      el.currentTime = seconds;
      setCurrentTime(seconds);
    },
    [audio]
  );

  const setVolume = React.useCallback(
    (v: number) => {
      const el = audio();
      if (el) el.volume = v;
      setVolumeState(v);
    },
    [audio]
  );

  return (
    <AudioPlayerContext.Provider
      value={{
        queue,
        index,
        track,
        playing,
        currentTime,
        duration,
        volume,
        play,
        toggle,
        next,
        prev,
        seek,
        setVolume,
      }}
    >
      {children}
    </AudioPlayerContext.Provider>
  );
}

/** 92 → "1:32" */
function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export {
  AudioPlayerProvider,
  formatTime,
  useAudioPlayer,
  type AudioTrack,
};
