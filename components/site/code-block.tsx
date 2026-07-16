"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function CopyButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy code"
      className={cn(
        "flex size-7 items-center justify-center rounded-[6px] text-secondary-label outline-none transition-colors hover:bg-fill-tertiary focus-visible:ring-[3px] focus-visible:ring-blue/40",
        className
      )}
    >
      {copied ? (
        <CheckIcon className="size-3.5 text-green" strokeWidth={2.5} />
      ) : (
        <CopyIcon className="size-3.5" />
      )}
    </button>
  );
}

export function CodeBlock({
  code,
  className,
  collapsible = false,
}: {
  code: string;
  className?: string;
  collapsible?: boolean;
}) {
  const [expanded, setExpanded] = React.useState(!collapsible);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] bg-gray-6 dark:bg-gray-6",
        className
      )}
    >
      <CopyButton text={code} className="absolute right-2 top-2 z-10" />
      <pre
        className={cn(
          "overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.65] text-label",
          !expanded && "max-h-40"
        )}
      >
        <code>{code}</code>
      </pre>
      {collapsible && !expanded ? (
        <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-[var(--system-gray6)] to-transparent pb-2 pt-8">
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="rounded-full bg-fill-secondary px-3 py-1 text-caption-1 font-semibold text-label"
          >
            Show more
          </button>
        </div>
      ) : null}
    </div>
  );
}
