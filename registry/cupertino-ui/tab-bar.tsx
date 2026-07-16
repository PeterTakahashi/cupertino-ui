"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * SwiftUI TabView — the iOS bottom tab bar: blurred material,
 * icon-over-label items, accent tint on the active tab.
 */
function TabBar({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tab-bar"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function TabBarContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tab-bar-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

function TabBarList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tab-bar-list"
      className={cn(
        "flex h-[52px] shrink-0 items-stretch justify-around bg-background/80 px-2 shadow-[0_-0.5px_0_0_var(--separator)] backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}

function TabBarItem({
  className,
  icon,
  badge,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & {
  /** Tab icon, sized ~24pt like an SF Symbol. */
  icon: React.ReactNode;
  /** Optional red badge count. */
  badge?: React.ReactNode;
}) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tab-bar-item"
      className={cn(
        "relative flex flex-1 cursor-default select-none flex-col items-center justify-center gap-0.5 pb-1 pt-1.5 text-tertiary-label outline-none transition-colors duration-100 focus-visible:ring-[3px] focus-visible:ring-blue/40 data-[state=active]:text-blue [&_svg]:size-6 [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      <span className="relative">
        {icon}
        {badge ? (
          <span className="absolute -right-2.5 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-red px-1 text-[10px] font-semibold leading-none text-white">
            {badge}
          </span>
        ) : null}
      </span>
      <span className="text-caption-2 font-medium">{children}</span>
    </TabsPrimitive.Trigger>
  );
}

export { TabBar, TabBarContent, TabBarItem, TabBarList };
