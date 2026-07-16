"use client";

import * as React from "react";
import { PanelLeftIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * NavigationSplitView sidebar — the macOS source list: translucent
 * platter, section headers, accent-tinted selection, and the
 * standard toolbar button that collapses and expands it with the
 * split-view slide animation.
 */
type SidebarState = {
  open: boolean;
  setOpen: (open: boolean) => void;
  selected?: string;
  onSelect?: (value: string) => void;
};

const SidebarContext = React.createContext<SidebarState>({
  open: true,
  setOpen: () => {},
});

function useSidebar() {
  return React.useContext(SidebarContext);
}

/**
 * Wrap the split view (toggle + sidebar + content) in a provider so
 * a SidebarToggle anywhere in the window can collapse the sidebar.
 */
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  selected,
  onSelect,
  children,
}: {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  selected?: string;
  onSelect?: (value: string) => void;
  children: React.ReactNode;
}) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const open = openProp ?? internal;

  const setOpen = React.useCallback(
    (next: boolean) => {
      if (openProp === undefined) setInternal(next);
      onOpenChange?.(next);
    },
    [openProp, onOpenChange]
  );

  return (
    <SidebarContext.Provider value={{ open, setOpen, selected, onSelect }}>
      {children}
    </SidebarContext.Provider>
  );
}

/** The macOS toolbar button with the sidebar.left symbol. */
function SidebarToggle({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { open, setOpen } = useSidebar();

  return (
    <button
      type="button"
      data-slot="sidebar-toggle"
      aria-label={open ? "Hide Sidebar" : "Show Sidebar"}
      aria-pressed={open}
      onClick={() => setOpen(!open)}
      className={cn(
        "flex h-7 min-w-8 shrink-0 cursor-default select-none items-center justify-center rounded-[6px] px-1.5 text-secondary-label outline-none transition-colors duration-100 hover:bg-fill-quaternary focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill-tertiary [&_svg]:size-[17px]",
        className
      )}
      {...props}
    >
      <PanelLeftIcon />
    </button>
  );
}

function Sidebar({
  className,
  children,
  ...props
}: React.ComponentProps<"nav">) {
  const { open } = React.useContext(SidebarContext);

  return (
    <nav
      data-slot="sidebar"
      data-state={open ? "open" : "collapsed"}
      aria-hidden={!open}
      className={cn(
        "flex h-full w-60 shrink-0 flex-col gap-4 overflow-y-auto overflow-x-hidden bg-secondary-background/80 backdrop-blur-xl transition-[width,padding,opacity] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] dark:bg-gray-6/80",
        open ? "w-60 p-2.5 opacity-100" : "pointer-events-none w-0 p-0 opacity-0",
        className
      )}
      {...props}
    >
      <div className="flex w-[220px] shrink-0 flex-col gap-4">{children}</div>
    </nav>
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

export {
  Sidebar,
  SidebarItem,
  SidebarProvider,
  SidebarSection,
  SidebarToggle,
  useSidebar,
};
