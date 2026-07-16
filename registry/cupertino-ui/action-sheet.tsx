"use client";

import * as React from "react";
import { Dialog as ActionSheetPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

/**
 * SwiftUI .confirmationDialog() — the iOS action sheet: stacked
 * blurred groups of actions rising from the bottom, with a
 * detached Cancel button.
 */
function ActionSheet({
  ...props
}: React.ComponentProps<typeof ActionSheetPrimitive.Root>) {
  return <ActionSheetPrimitive.Root data-slot="action-sheet" {...props} />;
}

function ActionSheetTrigger({
  ...props
}: React.ComponentProps<typeof ActionSheetPrimitive.Trigger>) {
  return (
    <ActionSheetPrimitive.Trigger data-slot="action-sheet-trigger" {...props} />
  );
}

function ActionSheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ActionSheetPrimitive.Content>) {
  return (
    <ActionSheetPrimitive.Portal>
      <ActionSheetPrimitive.Overlay
        data-slot="action-sheet-overlay"
        className="fixed inset-0 z-50 bg-black/30 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
      />
      <ActionSheetPrimitive.Content
        data-slot="action-sheet-content"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 mx-auto flex w-full max-w-md flex-col gap-2 p-2 outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom data-[state=open]:duration-350 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=closed]:duration-250",
          className
        )}
        {...props}
      >
        {children}
      </ActionSheetPrimitive.Content>
    </ActionSheetPrimitive.Portal>
  );
}

/** A hairline-separated group of actions on a blurred platter. */
function ActionSheetGroup({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="action-sheet-group"
      className={cn(
        "material-thick flex flex-col overflow-hidden rounded-[14px] [&>*:not(:first-child)]:shadow-[0_-0.5px_0_0_var(--separator)]",
        className
      )}
      {...props}
    />
  );
}

/** Centered gray header text above the actions. */
function ActionSheetHeader({
  className,
  title,
  message,
  ...props
}: React.ComponentProps<"div"> & { title?: string; message?: string }) {
  return (
    <div
      data-slot="action-sheet-header"
      className={cn(
        "flex flex-col items-center gap-1 px-4 py-3.5 text-center",
        className
      )}
      {...props}
    >
      {title ? (
        <ActionSheetPrimitive.Title className="text-footnote font-semibold text-secondary-label">
          {title}
        </ActionSheetPrimitive.Title>
      ) : null}
      {message ? (
        <ActionSheetPrimitive.Description className="text-footnote text-secondary-label">
          {message}
        </ActionSheetPrimitive.Description>
      ) : null}
    </div>
  );
}

function ActionSheetAction({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: "default" | "destructive";
}) {
  return (
    <button
      type="button"
      data-slot="action-sheet-action"
      className={cn(
        "flex h-[57px] cursor-default select-none items-center justify-center px-4 text-[20px] tracking-[-0.45px] outline-none transition-colors focus-visible:bg-fill-quaternary active:bg-fill-tertiary",
        variant === "destructive" ? "text-red" : "text-blue",
        className
      )}
      {...props}
    />
  );
}

/** The detached, bold Cancel platter. */
function ActionSheetCancel({
  className,
  children = "Cancel",
  ...props
}: React.ComponentProps<"button">) {
  return (
    <ActionSheetPrimitive.Close asChild>
      <button
        type="button"
        data-slot="action-sheet-cancel"
        className={cn(
          "flex h-[57px] cursor-default select-none items-center justify-center rounded-[14px] bg-background px-4 text-[20px] font-semibold tracking-[-0.45px] text-blue outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-blue/40 active:bg-fill-quaternary dark:bg-gray-5",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </ActionSheetPrimitive.Close>
  );
}

const ActionSheetClose = ActionSheetPrimitive.Close;

export {
  ActionSheet,
  ActionSheetAction,
  ActionSheetCancel,
  ActionSheetClose,
  ActionSheetContent,
  ActionSheetGroup,
  ActionSheetHeader,
  ActionSheetTrigger,
};
