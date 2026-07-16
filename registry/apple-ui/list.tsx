"use client";

import * as React from "react";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI List with .listStyle(.insetGrouped) — the signature
 * iOS Settings look: rounded sections, hairline separators that
 * start after the leading icon, and disclosure chevrons.
 */
function List({
  className,
  header,
  footer,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div data-slot="list" className={cn("flex flex-col", className)} {...props}>
      {header ? (
        <div className="px-5 pb-1.5 text-footnote uppercase text-secondary-label">
          {header}
        </div>
      ) : null}
      <div className="overflow-hidden rounded-[var(--radius-card)] bg-grouped-secondary [&>[data-slot=list-item]:not(:first-child)>[data-slot=list-item-inner]]:shadow-[0_-0.5px_0_0_var(--separator)]">
        {children}
      </div>
      {footer ? (
        <div className="px-5 pt-1.5 text-footnote text-secondary-label">
          {footer}
        </div>
      ) : null}
    </div>
  );
}

function ListItem({
  className,
  icon,
  iconColor,
  detail,
  chevron = false,
  href,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  /** Leading icon, rendered on an iOS Settings-style colored tile. */
  icon?: React.ReactNode;
  /** Background of the icon tile, e.g. "var(--system-blue)". */
  iconColor?: string;
  /** Trailing detail text or element (value, badge, control). */
  detail?: React.ReactNode;
  /** Show a disclosure chevron. */
  chevron?: boolean;
  /** Render the row as a link. */
  href?: string;
}) {
  // Rows become interactive elements when they navigate or handle clicks.
  const Comp: React.ElementType = href ? "a" : props.onClick ? "button" : "div";

  return (
    <Comp
      href={href}
      type={Comp === "button" ? "button" : undefined}
      data-slot="list-item"
      className={cn(
        "group/item flex w-full cursor-default select-none items-center gap-3.5 pl-4 text-left text-body text-label outline-none focus-visible:bg-fill-quaternary [a&]:active:bg-fill-tertiary [button&]:active:bg-fill-tertiary",
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
        <span className="min-w-0 flex-1 truncate">{children}</span>
        {detail ? (
          <span className="shrink-0 text-body text-secondary-label">
            {detail}
          </span>
        ) : null}
        {chevron ? (
          <ChevronRightIcon
            className="size-[17px] shrink-0 text-tertiary-label"
            strokeWidth={2.5}
          />
        ) : null}
      </span>
    </Comp>
  );
}

export { List, ListItem };
