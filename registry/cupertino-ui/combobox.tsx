"use client";

import * as React from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * macOS NSComboBox — a bordered text field with a chevron that
 * opens a filtered suggestion menu; typing narrows the options.
 */
type ComboboxOption = { value: string; label: string };

function Combobox({
  className,
  options,
  value: valueProp,
  defaultValue = "",
  onValueChange,
  placeholder,
  emptyMessage = "No matches",
  disabled,
}: {
  className?: string;
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  emptyMessage?: string;
  disabled?: boolean;
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const value = valueProp ?? internal;
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const set = (next: string) => {
    if (valueProp === undefined) setInternal(next);
    onValueChange?.(next);
  };

  const shown =
    query === null
      ? options
      : options.filter((o) =>
          o.label.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Anchor asChild>
        <div
          data-slot="combobox"
          className={cn(
            "flex h-[26px] w-56 items-center rounded-[6px] bg-background pl-2 pr-[3px] shadow-[inset_0_0_0_0.5px_var(--opaque-separator),0_0.5px_2px_rgba(0,0,0,0.08)] transition-shadow focus-within:ring-[3px] focus-within:ring-blue/40 dark:bg-gray-4",
            disabled && "pointer-events-none opacity-40",
            className
          )}
        >
          <input
            ref={inputRef}
            data-slot="combobox-input"
            className="h-full w-full bg-transparent text-footnote text-label outline-none placeholder:text-tertiary-label"
            placeholder={placeholder}
            disabled={disabled}
            value={query ?? value}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") setOpen(false);
              if (e.key === "Enter" && shown.length > 0) {
                set(shown[0].label);
                setQuery(null);
                setOpen(false);
              }
            }}
          />
          <button
            type="button"
            tabIndex={-1}
            aria-label="Show options"
            disabled={disabled}
            onClick={() => {
              setQuery(null);
              setOpen((o) => !o);
              inputRef.current?.focus();
            }}
            className="flex h-5 w-4 shrink-0 cursor-default items-center justify-center rounded-[4px] bg-blue text-white shadow-[0_0.5px_1px_rgba(0,0,0,0.15)]"
          >
            <ChevronDownIcon className="size-3" strokeWidth={2.5} />
          </button>
        </div>
      </PopoverPrimitive.Anchor>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          data-slot="combobox-content"
          align="start"
          sideOffset={4}
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="material-thick z-50 max-h-64 w-[var(--radix-popover-trigger-width)] min-w-56 overflow-y-auto rounded-[10px] p-1 shadow-[var(--shadow-menu)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"
        >
          {shown.length === 0 ? (
            <p className="px-2.5 py-2 text-footnote text-secondary-label">
              {emptyMessage}
            </p>
          ) : (
            shown.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  set(o.label);
                  setQuery(null);
                  setOpen(false);
                }}
                className="relative flex w-full cursor-default select-none items-center gap-2 rounded-[6px] py-1 pl-6 pr-2.5 text-left text-footnote text-label outline-none hover:bg-blue hover:text-white focus-visible:bg-blue focus-visible:text-white"
              >
                {o.label === value ? (
                  <CheckIcon
                    className="absolute left-1.5 size-3.5"
                    strokeWidth={2.5}
                  />
                ) : null}
                {o.label}
              </button>
            ))
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

export { Combobox, type ComboboxOption };
