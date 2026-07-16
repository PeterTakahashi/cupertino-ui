"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI Form — grouped-inset sections of labeled rows, the way
 * iOS renders every settings form. Rows lay out label-left /
 * control-right, with separators that start after the label gutter.
 */
function Form({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form
      data-slot="form"
      className={cn("flex w-full flex-col gap-6", className)}
      {...props}
    />
  );
}

function FormSection({
  className,
  header,
  footer,
  children,
  ...props
}: React.ComponentProps<"section"> & {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <section
      data-slot="form-section"
      className={cn("flex flex-col", className)}
      {...props}
    >
      {header ? (
        <div className="px-5 pb-1.5 text-footnote uppercase text-secondary-label">
          {header}
        </div>
      ) : null}
      <div className="overflow-hidden rounded-[var(--radius-card)] bg-grouped-secondary [&>[data-slot=form-row]:not(:first-child)]:shadow-[0_-0.5px_0_0_var(--separator)]">
        {children}
      </div>
      {footer ? (
        <div className="px-5 pt-1.5 text-footnote text-secondary-label">
          {footer}
        </div>
      ) : null}
    </section>
  );
}

function FormRow({
  className,
  label,
  htmlFor,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  label?: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <div
      data-slot="form-row"
      className={cn(
        "flex min-h-11 items-center gap-4 py-1.5 pl-4 pr-4",
        className
      )}
      {...props}
    >
      {label ? (
        <label
          htmlFor={htmlFor}
          className="shrink-0 select-none text-body text-label"
        >
          {label}
        </label>
      ) : null}
      <div className="flex min-w-0 flex-1 items-center justify-end gap-2 [&_input]:text-right">
        {children}
      </div>
    </div>
  );
}

export { Form, FormRow, FormSection };
