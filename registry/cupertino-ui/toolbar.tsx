"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SwiftUI .toolbar() — the macOS window toolbar: a hairline-divided
 * bar with title, borderless icon buttons, and placement groups.
 */
function Toolbar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toolbar"
      className={cn(
        "flex h-[52px] w-full items-center gap-2 bg-background/80 px-3 shadow-[0_0.5px_0_0_var(--separator)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}

/** Title block: window title + optional subtitle, like macOS Finder. */
function ToolbarTitle({
  className,
  subtitle,
  children,
  ...props
}: React.ComponentProps<"div"> & { subtitle?: string }) {
  return (
    <div
      data-slot="toolbar-title"
      className={cn("flex min-w-0 flex-col", className)}
      {...props}
    >
      <span className="truncate text-subheadline font-semibold text-label">
        {children}
      </span>
      {subtitle ? (
        <span className="truncate text-caption-1 text-secondary-label">
          {subtitle}
        </span>
      ) : null}
    </div>
  );
}

/** Toolbar icon button, borderless with a hover platter. */
function ToolbarButton({
  className,
  active,
  ...props
}: React.ComponentProps<"button"> & {
  /** Highlighted state, like an active view-mode control. */
  active?: boolean;
}) {
  return (
    <button
      type="button"
      data-slot="toolbar-button"
      className={cn(
        "flex h-7 min-w-8 shrink-0 cursor-default select-none items-center justify-center gap-1 rounded-[6px] px-1.5 text-secondary-label outline-none transition-colors duration-100 hover:bg-fill-quaternary focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill-tertiary disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-[17px] [&_svg]:shrink-0",
        active && "bg-fill-tertiary text-blue",
        className
      )}
      {...props}
    />
  );
}

/** Pushes following items to the trailing edge. */
function ToolbarSpacer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toolbar-spacer"
      aria-hidden
      className={cn("flex-1", className)}
      {...props}
    />
  );
}

function ToolbarSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="toolbar-separator"
      aria-hidden
      className={cn("mx-1 h-5 w-px shrink-0 bg-separator", className)}
      {...props}
    />
  );
}

export {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarSpacer,
  ToolbarTitle,
};
