"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI NavigationStack. Screens push in from the right with the
 * iOS parallax slide; the nav bar shows a back button labeled with
 * the previous screen's title. No routing, no reload — pure client
 * state, exactly like drilling into Settings.
 */
type Entry = {
  key: number;
  title: string;
  node: React.ReactNode;
};

type NavContext = {
  push: (title: string, node: React.ReactNode) => void;
  pop: () => void;
};

const NavigationContext = React.createContext<NavContext | null>(null);

function useNavigation() {
  const ctx = React.useContext(NavigationContext);
  if (!ctx)
    throw new Error("useNavigation must be used inside <NavigationStack>");
  return ctx;
}

function NavigationStack({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Title of the root screen. */
  title: string;
}) {
  const keyRef = React.useRef(1);
  const [stack, setStack] = React.useState<Entry[]>([
    { key: 0, title, node: children },
  ]);
  // Index the view has animated to; lags one frame behind pushes.
  const [current, setCurrent] = React.useState(0);
  const [popping, setPopping] = React.useState(false);

  const push = React.useCallback((t: string, node: React.ReactNode) => {
    setStack((s) => [...s, { key: keyRef.current++, title: t, node }]);
  }, []);

  const pop = React.useCallback(() => {
    setCurrent((c) => Math.max(0, c - 1));
    setPopping(true);
  }, []);

  // After a push, advance the animated index on the next frame so the
  // new screen mounts at 100% and then slides to 0.
  React.useLayoutEffect(() => {
    if (stack.length - 1 > current && !popping) {
      const raf = requestAnimationFrame(() =>
        requestAnimationFrame(() => setCurrent(stack.length - 1))
      );
      return () => cancelAnimationFrame(raf);
    }
  }, [stack.length, current, popping]);

  // After a pop transition, drop the removed screen from the stack.
  React.useEffect(() => {
    if (!popping) return;
    const timer = setTimeout(() => {
      setStack((s) => s.slice(0, current + 1));
      setPopping(false);
    }, 350);
    return () => clearTimeout(timer);
  }, [popping, current]);

  const top = stack[Math.min(current, stack.length - 1)];
  const prev = current > 0 ? stack[current - 1] : null;

  return (
    <NavigationContext.Provider value={{ push, pop }}>
      <div
        data-slot="navigation-stack"
        className={cn(
          "relative flex h-96 flex-col overflow-hidden bg-grouped",
          className
        )}
        {...props}
      >
        {/* Nav bar */}
        <div className="relative z-10 flex h-[52px] shrink-0 items-center bg-grouped/80 px-2 shadow-[0_0.5px_0_0_var(--separator)] backdrop-blur-xl">
          <div className="flex-1">
            {prev ? (
              <button
                type="button"
                onClick={pop}
                className="flex cursor-default select-none items-center gap-0.5 rounded-[6px] py-1 pr-2 text-body text-blue outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:opacity-50"
              >
                <ChevronLeftIcon className="size-6" strokeWidth={2.5} />
                <span className="max-w-28 truncate">{prev.title}</span>
              </button>
            ) : null}
          </div>
          <span
            key={top?.key}
            className="pointer-events-none absolute left-1/2 max-w-[50%] -translate-x-1/2 truncate text-headline duration-300 animate-in fade-in"
          >
            {top?.title}
          </span>
          <div className="flex-1" />
        </div>

        {/* Screens */}
        <div className="relative flex-1">
          {stack.map((entry, i) => {
            const offset =
              i === current ? "0%" : i < current ? "-30%" : "100%";
            return (
              <div
                key={entry.key}
                aria-hidden={i !== current}
                className={cn(
                  "absolute inset-0 overflow-y-auto bg-grouped p-4 transition-transform duration-350 ease-[cubic-bezier(0.32,0.72,0,1)]",
                  i !== current && "pointer-events-none",
                  i < current && "brightness-[0.96]"
                )}
                style={{ transform: `translateX(${offset})` }}
              >
                {entry.node}
              </div>
            );
          })}
        </div>
      </div>
    </NavigationContext.Provider>
  );
}

/**
 * SwiftUI NavigationLink — a list row that pushes its destination.
 * Compose inside a <List>, or use `plain` for a standalone button.
 */
function NavigationLink({
  className,
  title,
  destination,
  icon,
  iconColor,
  detail,
  children,
  ...props
}: Omit<React.ComponentProps<"button">, "title"> & {
  /** Title of the destination screen (shown in the nav bar). */
  title: string;
  /** Screen content to push. */
  destination: React.ReactNode;
  /** Optional iOS Settings-style icon tile. */
  icon?: React.ReactNode;
  iconColor?: string;
  /** Trailing detail text. */
  detail?: React.ReactNode;
}) {
  const { push } = useNavigation();

  return (
    <button
      type="button"
      data-slot="navigation-link"
      onClick={() => push(title, destination)}
      className={cn(
        "group/item flex w-full cursor-default select-none items-center gap-3.5 pl-4 text-left text-body text-label outline-none focus-visible:bg-fill-quaternary active:bg-fill-tertiary",
        className
      )}
      {...props}
    >
      {icon ? (
        <span
          className="flex size-[29px] shrink-0 items-center justify-center rounded-[7px] text-white [&_svg]:size-[18px]"
          style={{ backgroundColor: iconColor ?? "var(--system-blue)" }}
        >
          {icon}
        </span>
      ) : null}
      <span
        data-slot="list-item-inner"
        className="flex min-h-11 min-w-0 flex-1 items-center gap-3 py-2.5 pr-4"
      >
        <span className="min-w-0 flex-1 truncate">{children ?? title}</span>
        {detail ? (
          <span className="shrink-0 text-body text-secondary-label">
            {detail}
          </span>
        ) : null}
        <ChevronRightIcon
          className="size-[17px] shrink-0 text-tertiary-label"
          strokeWidth={2.5}
        />
      </span>
    </button>
  );
}

export { NavigationLink, NavigationStack, useNavigation };
