"use client";

import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

import { AudioPlayerProvider } from "@/components/ui/audio-player";
import { MusicDesktop } from "./music-desktop";
import { MusicMobile } from "./music-mobile";

export default function MusicShowcase() {
  return (
    <div className="flex min-h-dvh flex-col bg-grouped">
      <div className="sticky top-0 z-40 bg-grouped/80 shadow-[0_0.5px_0_0_var(--separator)] backdrop-blur-xl">
        <div className="relative mx-auto flex h-11 max-w-6xl items-center gap-2 px-4">
          <Link
            href="/showcases"
            className="flex items-center gap-0.5 rounded-[6px] py-1 pr-2 text-subheadline text-blue outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:opacity-50"
          >
            <ChevronLeftIcon className="size-5" strokeWidth={2.5} />
            Showcases
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 text-subheadline font-semibold text-label">
            Music
          </span>
          <span className="ml-auto hidden text-caption-1 text-tertiary-label sm:block">
            real audio · built with cupertino-ui
          </span>
        </div>
      </div>

      <AudioPlayerProvider>
        <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-4">
          <MusicMobile className="md:hidden" />
          <MusicDesktop className="hidden md:block" />
        </div>
      </AudioPlayerProvider>
    </div>
  );
}
