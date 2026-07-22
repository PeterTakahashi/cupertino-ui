"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * SwiftUI .alert() — the iOS alert: a narrow blurred platter with
 * centered text and full-width hairline-separated actions.
 */
function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/30 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "material-thick fixed left-1/2 top-1/2 z-50 w-[270px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[14px] text-label shadow-[var(--shadow-window)] outline-none duration-200 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-105 data-[state=open]:blur-in-[8px] data-[state=open]:ease-[var(--spring-smooth)] data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-105",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-0.5 px-4 pb-4 pt-5 text-center",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-headline", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-footnote text-label/85", className)}
      {...props}
    />
  );
}

/**
 * Action row. Buttons stack horizontally (two) or vertically,
 * separated by hairlines, exactly like UIAlertController.
 */
function DialogFooter({
  className,
  stacked = false,
  ...props
}: React.ComponentProps<"div"> & { stacked?: boolean }) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex shadow-[0_-0.5px_0_0_var(--separator)]",
        stacked
          ? "flex-col [&>*:not(:first-child)]:shadow-[0_-0.5px_0_0_var(--separator)]"
          : "flex-row [&>*:not(:first-child)]:shadow-[-0.5px_0_0_0_var(--separator)]",
        className
      )}
      {...props}
    />
  );
}

/** A single alert action, e.g. "Cancel" or a destructive "Delete". */
function DialogAction({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "default" | "cancel" | "destructive";
}) {
  return (
    <button
      data-slot="dialog-action"
      className={cn(
        "flex h-11 flex-1 cursor-default select-none items-center justify-center px-2 text-body outline-none transition-colors focus-visible:bg-fill-quaternary active:bg-fill-tertiary",
        variant === "default" && "text-blue",
        variant === "cancel" && "font-[590] text-blue",
        variant === "destructive" && "text-red",
        className
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogAction,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
