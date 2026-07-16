"use client";

import { Carousel, CarouselItem } from "@/registry/cupertino-ui/carousel";

const colors = [
  "var(--system-blue)",
  "var(--system-purple)",
  "var(--system-pink)",
  "var(--system-orange)",
];

export default function CarouselDemo() {
  return (
    <Carousel className="w-72">
      {colors.map((c, i) => (
        <CarouselItem key={c}>
          <div
            className="flex h-40 items-center justify-center text-title-1 text-white"
            style={{ background: `linear-gradient(140deg, ${c}, color-mix(in srgb, ${c} 55%, black))` }}
          >
            {i + 1}
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
}
