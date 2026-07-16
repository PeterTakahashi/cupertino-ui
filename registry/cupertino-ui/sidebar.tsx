"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * NavigationSplitView sidebar — the macOS/iPadOS source list:
 * translucent platter, section headers, and the accent-tinted
 * selection pill.
 */
const SidebarContext = React.createContext<{
  selected?: string;
  onSelect?: (value: string) => void;
}>({});

function Sidebar({
  className,
  selected,
  onSelect,
  children,
  ...props
}: Omit<React.ComponentProps<"nav">, "onSelect"> & {
  /** Value of the selected item (controlled). */
  selected?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <SidebarContext.Provider value={{ selected, onSelect }}>
      <nav
        data-slot="sidebar"
        className={cn(
          "flex h-full w-60 flex-col gap-4 overflow-y-auto bg-secondary-background/80 p-2.5 backdrop-blur-xl dark:bg-gray-6/80",
          className
        )}
        {...props}
      >
        {children}
      </nav>
    </SidebarContext.Provider>
  );
}

function SidebarSection({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"div"> & { title?: string }) {
  return (
    <div
      data-slot="sidebar-section"
      className={cn("flex flex-col gap-px", className)}
      {...props}
    >
      {title ? (
        <p className="px-2.5 pb-1 text-caption-1 font-semibold text-secondary-label">
          {title}
        </p>
      ) : null}
      {children}
    </div>
  );
}

function SidebarItem({
  className,
  value,
  icon,
  badge,
  children,
  ...props
}: Omit<React.ComponentProps<"button">, "value"> & {
  /** Identity used for selection. */
  value: string;
  /** Leading icon, tinted with the accent color. */
  icon?: React.ReactNode;
  /** Trailing count or badge. */
  badge?: React.ReactNode;
}) {
  const { selected, onSelect } = React.useContext(SidebarContext);
  const isSelected = selected === value;

  return (
    <button
      type="button"
      data-slot="sidebar-item"
      data-selected={isSelected || undefined}
      onClick={() => onSelect?.(value)}
      className={cn(
        "flex h-8 w-full shrink-0 cursor-default select-none items-center gap-2.5 rounded-[7px] px-2.5 text-left text-subheadline text-label outline-none transition-colors duration-100 focus-visible:ring-[3px] focus-visible:ring-blue/40",
        isSelected
          ? "bg-blue text-white [&_svg]:text-white"
          : "hover:bg-fill-quaternary active:bg-fill-tertiary [&_svg]:text-blue",
        "[&_svg]:size-[17px] [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {icon}
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {badge ? (
        <span
          className={cn(
            "shrink-0 text-footnote",
            isSelected ? "text-white/80" : "text-secondary-label"
          )}
        >
          {badge}
        </span>
      ) : null}
    </button>
  );
}

export { Sidebar, SidebarItem, SidebarSection };
