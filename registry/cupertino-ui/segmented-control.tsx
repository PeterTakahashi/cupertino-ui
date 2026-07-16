"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * SwiftUI segmented Picker (UISegmentedControl). The selected
 * segment floats on a white platter with a soft shadow.
 */
function SegmentedControl({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="segmented-control"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  );
}

function SegmentedControlList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="segmented-control-list"
      className={cn(
        "inline-flex h-8 w-fit items-center justify-center rounded-[9px] bg-fill-tertiary p-0.5",
        className
      )}
      {...props}
    />
  );
}

function SegmentedControlTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="segmented-control-trigger"
      className={cn(
        "relative inline-flex h-full flex-1 cursor-default select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-[7px] px-4 text-footnote font-medium text-label outline-none transition-all duration-150 focus-visible:ring-[3px] focus-visible:ring-blue/40 disabled:opacity-40 data-[state=active]:bg-white data-[state=active]:font-[590] data-[state=active]:shadow-[0_0_0_0.5px_rgba(0,0,0,0.04),0_3px_8px_rgba(0,0,0,0.12),0_3px_1px_rgba(0,0,0,0.04)] dark:data-[state=active]:bg-gray-2/90 [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

function SegmentedControlContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="segmented-control-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlTrigger,
  SegmentedControlContent,
};
