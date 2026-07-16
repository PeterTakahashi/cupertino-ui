import * as React from "react";

import { cn } from "@/lib/utils";

/** Redaction placeholder — the .redacted(reason: .placeholder) look. */
function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse rounded-[6px] bg-fill-tertiary",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
