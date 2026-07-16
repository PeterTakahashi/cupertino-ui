"use client";

import * as React from "react";
import { Toast as ToastPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * iOS notification banner. Call `toast({ title, description, icon })`
 * from anywhere; render `<Toaster />` once near the root. Banners
 * drop in from the top on a thick material, exactly like incoming
 * notifications.
 */
type ToastData = {
  id: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Leading icon tile, like an app icon. */
  icon?: React.ReactNode;
  /** Tile background color. */
  iconColor?: string;
  duration?: number;
};

type Listener = (toasts: ToastData[]) => void;

let count = 0;
let toasts: ToastData[] = [];
const listeners = new Set<Listener>();

function emit() {
  for (const l of listeners) l([...toasts]);
}

function toast(data: Omit<ToastData, "id">) {
  const id = ++count;
  toasts = [...toasts, { id, duration: 4000, ...data }];
  emit();
  return {
    id,
    dismiss: () => {
      toasts = toasts.filter((t) => t.id !== id);
      emit();
    },
  };
}

function Toaster({
  className,
  ...props
}: React.ComponentProps<typeof ToastPrimitive.Provider> & {
  /** Extra classes for each banner. */
  className?: string;
}) {
  const [items, setItems] = React.useState<ToastData[]>([]);

  React.useEffect(() => {
    const listener: Listener = setItems;
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return (
    <ToastPrimitive.Provider swipeDirection="up" {...props}>
      {items.map((t) => (
        <ToastPrimitive.Root
          key={t.id}
          duration={t.duration}
          onOpenChange={(open) => {
            if (!open) {
              toasts = toasts.filter((x) => x.id !== t.id);
              emit();
            }
          }}
          className={cn(
            // Explicit blur (no saturate): materials with saturate() render
            // incorrectly at the viewport top edge in Chrome.
            "pointer-events-auto flex w-full items-center gap-3 rounded-[var(--radius-group)] bg-white/85 p-3 shadow-[var(--shadow-menu)] outline-none backdrop-blur-2xl dark:bg-gray-6/90",
            "data-[state=open]:animate-in data-[state=open]:slide-in-from-top-4 data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-4 data-[state=closed]:fade-out-0 data-[swipe=end]:animate-out data-[swipe=end]:slide-out-to-top-4",
            className
          )}
        >
          {t.icon ? (
            <span
              className="flex size-9 shrink-0 items-center justify-center rounded-[9px] text-white [&_svg]:size-5"
              style={{ backgroundColor: t.iconColor ?? "var(--system-blue)" }}
            >
              {t.icon}
            </span>
          ) : null}
          <div className="flex min-w-0 flex-1 flex-col">
            <ToastPrimitive.Title className="truncate text-subheadline font-semibold text-label">
              {t.title}
            </ToastPrimitive.Title>
            {t.description ? (
              <ToastPrimitive.Description className="line-clamp-2 text-subheadline text-label/80">
                {t.description}
              </ToastPrimitive.Description>
            ) : null}
          </div>
        </ToastPrimitive.Root>
      ))}
      <ToastPrimitive.Viewport className="fixed left-1/2 top-3 z-[60] flex w-[min(380px,calc(100vw-24px))] -translate-x-1/2 flex-col gap-2 outline-none" />
    </ToastPrimitive.Provider>
  );
}

export { toast, Toaster };
