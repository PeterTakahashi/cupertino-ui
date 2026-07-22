"use client";

import * as React from "react";
import { Dialog as SheetPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * SwiftUI .sheet() — the iOS bottom sheet with a grabber and
 * large top corner radius. `side="bottom"` is the iOS sheet;
 * other sides behave like slide-over panels.
 */
function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/30 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className
      )}
      {...props}
    />
  );
}

/** Apple's momentum projection: where a flick would coast to. */
function project(velocity: number, decelerationRate = 0.998) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/** Progressive resistance past a boundary — never a hard stop. */
function rubberband(overshoot: number, dimension: number, constant = 0.55) {
  return (
    (overshoot * dimension * constant) /
    (dimension + constant * Math.abs(overshoot))
  );
}

function SheetContent({
  className,
  children,
  side = "bottom",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
}) {
  const contentRef = React.useRef<HTMLDivElement>(null);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const history = React.useRef<{ t: number; y: number }[]>([]);
  const start = React.useRef(0);

  // Drag-to-dismiss for the bottom sheet: 1:1 tracking, rubber-band
  // above the rest position, and a momentum-projected release —
  // the decision uses where the flick is GOING, not where it ends.
  const onPointerDown = (e: React.PointerEvent) => {
    if (side !== "bottom") return;
    const el = contentRef.current;
    if (!el) return;
    try {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Synthetic events / lost pointers: tracking still works uncaptured.
    }
    // Interruptible: continue from the on-screen (presentation) value.
    const m = new DOMMatrixReadOnly(getComputedStyle(el).transform);
    el.style.transition = "none";
    start.current = e.clientY - m.m42;
    history.current = [{ t: e.timeStamp, y: m.m42 }];
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (side !== "bottom" || history.current.length === 0) return;
    const el = contentRef.current;
    if (!el) return;
    const raw = e.clientY - start.current;
    const y = raw >= 0 ? raw : rubberband(raw, el.offsetHeight);
    el.style.transform = `translateY(${y}px)`;
    history.current.push({ t: e.timeStamp, y });
    if (history.current.length > 6) history.current.shift();
  };

  const onPointerUp = () => {
    if (side !== "bottom" || history.current.length === 0) return;
    const el = contentRef.current;
    if (!el) return;
    const h = history.current;
    history.current = [];
    const last = h[h.length - 1];
    const prev = h.find((p) => last.t - p.t >= 30) ?? h[0];
    const dt = Math.max(1, last.t - prev.t);
    const velocity = ((last.y - prev.y) / dt) * 1000; // px/s
    const projected = last.y + project(velocity);
    const shouldClose = projected > el.offsetHeight * 0.4;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (shouldClose) {
      if (reduced) {
        closeRef.current?.click();
        return;
      }
      // Hand the gesture's velocity to the exit so there is no seam.
      const remaining = el.offsetHeight - last.y;
      const duration = Math.min(
        400,
        Math.max(120, (remaining / Math.max(Math.abs(velocity), 600)) * 1000)
      );
      el.style.transition = `transform ${duration}ms cubic-bezier(0.32, 0.72, 0, 1)`;
      el.style.transform = `translateY(${el.offsetHeight}px)`;
      window.setTimeout(() => closeRef.current?.click(), duration);
    } else {
      el.style.transition = reduced
        ? "none"
        : "transform 400ms var(--spring-smooth, cubic-bezier(0.32, 0.72, 0, 1))";
      el.style.transform = "translateY(0)";
    }
  };

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={contentRef}
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col bg-grouped text-label shadow-[var(--shadow-window)] outline-none transition ease-in-out data-[state=open]:animate-in data-[state=open]:duration-350 data-[state=closed]:animate-out data-[state=closed]:duration-250",
          side === "bottom" &&
            "inset-x-0 bottom-0 mx-auto max-h-[92dvh] w-full max-w-2xl rounded-t-[var(--radius-sheet)] data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
          side === "top" &&
            "inset-x-0 top-0 max-h-[92dvh] rounded-b-[var(--radius-sheet)] data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 max-w-sm data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 max-w-sm data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
          className
        )}
        {...props}
      >
        {side === "bottom" ? (
          <>
            {/* Generous drag surface around the grabber (hit padding). */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 z-10 h-8 cursor-grab touch-none active:cursor-grabbing"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            />
            <div
              aria-hidden
              className="mx-auto mt-[5px] h-[5px] w-9 shrink-0 rounded-full bg-tertiary-label"
            />
            <SheetPrimitive.Close ref={closeRef} className="sr-only" tabIndex={-1}>
              Close
            </SheetPrimitive.Close>
          </>
        ) : null}
        {children}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1 p-5 pb-2 text-center", className)}
      {...props}
    />
  );
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-headline", className)}
      {...props}
    />
  );
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-footnote text-secondary-label", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-5", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
