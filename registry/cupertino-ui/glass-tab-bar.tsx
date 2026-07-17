"use client";

import * as React from "react";

import { Glass } from "@/components/ui/glass";
import { cn } from "@/lib/utils";

/**
 * The iOS 26 floating Liquid Glass tab bar: a capsule that hovers
 * above content with a brighter glass pill sliding between tabs
 * (glass morphing between positions, per the Liquid Glass spec).
 */
type Item = { value: string; icon?: React.ReactNode; label: React.ReactNode };

function GlassTabBar({
  className,
  items,
  value: valueProp,
  defaultValue,
  onValueChange,
  variant = "regular",
  ...props
}: Omit<React.ComponentProps<"div">, "defaultValue" | "onChange"> & {
  items: Item[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: "regular" | "clear";
}) {
  const [internal, setInternal] = React.useState(
    defaultValue ?? items[0]?.value
  );
  const value = valueProp ?? internal;
  const refs = React.useRef(new Map<string, HTMLButtonElement>());
  const [pill, setPill] = React.useState<{ left: number; width: number }>();

  const measure = React.useCallback(() => {
    const el = refs.current.get(value);
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [value]);

  React.useLayoutEffect(() => {
    measure();
  }, [measure]);

  React.useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const select = (v: string) => {
    if (valueProp === undefined) setInternal(v);
    onValueChange?.(v);
  };

  return (
    <Glass
      variant={variant}
      data-slot="glass-tab-bar"
      role="tablist"
      className={cn("inline-flex rounded-full p-1", className)}
      {...props}
    >
      {/* Sliding glass pill */}
      {pill ? (
        <span
          aria-hidden
          data-slot="glass-tab-bar-pill"
          className="absolute top-1 bottom-1 -z-[1] rounded-full bg-white/70 shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.5),0_2px_8px_rgba(0,0,0,0.15)] transition-[left,width] duration-350 ease-[cubic-bezier(0.34,1.3,0.64,1)] dark:bg-white/20"
          style={{ left: pill.left, width: pill.width }}
        />
      ) : null}

      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            ref={(el) => {
              if (el) refs.current.set(item.value, el);
            }}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => select(item.value)}
            className={cn(
              "flex h-11 min-w-[64px] cursor-default select-none flex-col items-center justify-center gap-0.5 rounded-full px-4 outline-none transition-colors duration-200 focus-visible:ring-[3px] focus-visible:ring-blue/40 [&_svg]:size-5 [&_svg]:shrink-0",
              active ? "text-label" : "text-label/60"
            )}
          >
            {item.icon}
            <span className="text-caption-2 font-medium">{item.label}</span>
          </button>
        );
      })}
    </Glass>
  );
}

export { GlassTabBar };
