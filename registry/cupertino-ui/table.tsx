"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI Table — the macOS list view: header row with hairline,
 * alternating row backgrounds, and accent-blue selection.
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto rounded-[var(--radius-card)] bg-background shadow-[inset_0_0_0_0.5px_var(--opaque-separator)]"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom border-collapse text-footnote", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:shadow-[0_0.5px_0_0_var(--opaque-separator)]", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:nth-child(even):not([data-state=selected])]:bg-fill-quaternary",
        className
      )}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "shadow-[0_-0.5px_0_0_var(--separator)] [&_td]:text-secondary-label",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "transition-colors data-[state=selected]:bg-blue data-[state=selected]:text-white [&[data-state=selected]_td]:text-white",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-7 select-none whitespace-nowrap px-3 text-left align-middle text-caption-1 font-semibold text-secondary-label",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "h-8 whitespace-nowrap px-3 align-middle text-footnote text-label",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("py-2 text-caption-1 text-secondary-label", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
