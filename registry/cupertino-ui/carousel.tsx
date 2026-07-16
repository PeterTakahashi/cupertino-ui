"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI TabView with .tabViewStyle(.page) — horizontal paging
 * with scroll-snap and a UIPageControl dot row. No dependencies;
 * swipe, trackpad, or tap the dots.
 */
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
        data-slot="carousel-track"
        className="flex w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[var(--radius-group)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
