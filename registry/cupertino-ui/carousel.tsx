"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI TabView with .tabViewStyle(.page) — horizontal paging
 * with scroll-snap and a UIPageControl dot row. No dependencies;
 * swipe, trackpad, mouse-drag (with momentum projection), or tap
 * the dots.
 */
function project(velocity: number, decelerationRate = 0.998) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}
function Carousel({
  className,
  showPageControl = true,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Hide the dots if the surrounding UI provides its own. */
  showPageControl?: boolean;
}) {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [page, setPage] = React.useState(0);
  const count = React.Children.count(children);
  const drag = React.useRef<{
    startX: number;
    startScroll: number;
    history: { t: number; x: number }[];
    moved: boolean;
  } | null>(null);

  // Touch uses native momentum scrolling; this adds the same feel
  // for mouse users: 1:1 drag, then project the flick and snap to
  // the page nearest where the gesture was going.
  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    try {
      el.setPointerCapture(e.pointerId);
    } catch {}
    el.style.scrollSnapType = "none";
    drag.current = {
      startX: e.clientX,
      startScroll: el.scrollLeft,
      history: [{ t: e.timeStamp, x: e.clientX }],
      moved: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    const el = trackRef.current;
    if (!d || !el) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 6) d.moved = true; // hysteresis before committing
    el.scrollLeft = d.startScroll - dx;
    d.history.push({ t: e.timeStamp, x: e.clientX });
    if (d.history.length > 6) d.history.shift();
  };

  const onPointerUp = () => {
    const d = drag.current;
    const el = trackRef.current;
    drag.current = null;
    if (!d || !el) return;
    const h = d.history;
    const last = h[h.length - 1];
    const ref = h.find((p) => last.t - p.t >= 30) ?? h[0];
    const velocity = ((last.x - ref.x) / Math.max(1, last.t - ref.t)) * 1000;
    const projected = el.scrollLeft - project(velocity);
    // Paged behavior (like UIScrollView paging): the projection decides
    // direction and commitment, but a single flick moves at most one page.
    const from = Math.round(d.startScroll / el.clientWidth);
    const raw = Math.round(projected / el.clientWidth);
    const target =
      Math.max(0, Math.min(count - 1, Math.max(from - 1, Math.min(from + 1, raw)))) *
      el.clientWidth;
    el.scrollTo({ left: target, behavior: "smooth" });
    // Restore native snapping once the momentum settle finishes.
    window.setTimeout(() => {
      el.style.scrollSnapType = "";
    }, 450);
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div
      data-slot="carousel"
      role="region"
      aria-roledescription="carousel"
      className={cn("flex w-full flex-col gap-3", className)}
      {...props}
    >
      <div
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDragStart={(e) => e.preventDefault()}
        data-slot="carousel-track"
        className="flex w-full cursor-grab snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[var(--radius-group)] [scrollbar-width:none] active:cursor-grabbing [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      {showPageControl && count > 1 ? (
        <div className="flex items-center justify-center gap-[9px]">
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Page ${i + 1}`}
              aria-current={i === page}
              onClick={() => goTo(i)}
              className={cn(
                "size-[7px] shrink-0 cursor-default rounded-full outline-none transition-colors duration-200 focus-visible:ring-[3px] focus-visible:ring-blue/40",
                i === page ? "bg-label/85" : "bg-label/25"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function CarouselItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="carousel-item"
      role="group"
      aria-roledescription="slide"
      className={cn("w-full shrink-0 snap-center", className)}
      {...props}
    />
  );
}

export { Carousel, CarouselItem };
