import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI ContentUnavailableView — the centered empty state with a
 * large gray symbol, title, description, and optional actions.
 */
function ContentUnavailable({
  className,
  icon,
  title,
  description,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  /** Large symbol shown above the title. */
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div
      data-slot="content-unavailable"
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 px-8 py-12 text-center",
        className
      )}
      {...props}
    >
      {icon ? (
        <div className="mb-2 text-tertiary-label [&_svg]:size-12 [&_svg]:stroke-[1.5]">
          {icon}
        </div>
      ) : null}
      <h3 className="text-title-3 text-label">{title}</h3>
      {description ? (
        <p className="max-w-sm text-subheadline text-secondary-label">
          {description}
        </p>
      ) : null}
      {children ? (
        <div className="mt-3 flex items-center gap-2">{children}</div>
      ) : null}
    </div>
  );
}

export { ContentUnavailable };
