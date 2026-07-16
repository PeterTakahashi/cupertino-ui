"use client";

import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI .searchable() — the iOS search bar: gray capsule field
 * with a magnifier, a clear button while typing, and an optional
 * Cancel button that appears on focus.
 */
function SearchField({
  className,
  cancelLabel = "Cancel",
  showCancel = true,
  onValueChange,
  ...props
}: Omit<React.ComponentProps<"input">, "type"> & {
  /** Label of the cancel button (e.g. localized). */
  cancelLabel?: string;
  /** Show the cancel button while the field is focused. */
  showCancel?: boolean;
  onValueChange?: (value: string) => void;
}) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [focused, setFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(
    Boolean(props.defaultValue || props.value)
  );

  React.useEffect(() => {
    if (props.value !== undefined) setHasValue(String(props.value).length > 0);
  }, [props.value]);

  const clear = () => {
    const el = inputRef.current;
    if (!el) return;
    const setter = Object.getOwnPropertyDescriptor(
      HTMLInputElement.prototype,
      "value"
    )?.set;
    setter?.call(el, "");
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.focus();
  };

  return (
    <div
      data-slot="search-field"
      className={cn("flex w-full items-center gap-2", className)}
    >
      <div className="relative flex h-9 flex-1 items-center">
        <SearchIcon className="pointer-events-none absolute left-2.5 size-4 text-secondary-label" />
        <input
          ref={inputRef}
          type="search"
          data-slot="search-field-input"
          className="h-full w-full rounded-[10px] bg-fill-tertiary pl-8 pr-8 text-body text-label outline-none transition-shadow placeholder:text-secondary-label focus:ring-[3px] focus:ring-blue/40 disabled:pointer-events-none disabled:opacity-40 [&::-webkit-search-cancel-button]:hidden"
          placeholder="Search"
          onFocus={(e) => {
            setFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
          onChange={(e) => {
            setHasValue(e.target.value.length > 0);
            onValueChange?.(e.target.value);
            props.onChange?.(e);
          }}
        />
        {hasValue ? (
          <button
            type="button"
            aria-label="Clear search"
            onMouseDown={(e) => e.preventDefault()}
            onClick={clear}
            className="absolute right-2 flex size-[18px] cursor-default items-center justify-center rounded-full bg-fill text-background outline-none dark:text-gray-6"
          >
            <XIcon className="size-3" strokeWidth={3} />
          </button>
        ) : null}
      </div>
      {showCancel && (focused || hasValue) ? (
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            clear();
            inputRef.current?.blur();
          }}
          className="shrink-0 cursor-default select-none text-body text-blue outline-none duration-200 animate-in fade-in slide-in-from-right-2 active:opacity-50"
        >
          {cancelLabel}
        </button>
      ) : null}
    </div>
  );
}

export { SearchField };
