"use client";

import * as React from "react";
import { PageControl } from "@/registry/cupertino-ui/page-control";

export default function PageControlDemo() {
  const [page, setPage] = React.useState(2);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex h-24 w-56 items-center justify-center rounded-[var(--radius-card)] bg-fill-quaternary text-title-2 text-secondary-label">
        {page + 1}
      </div>
      <PageControl count={5} page={page} onPageChange={setPage} />
    </div>
  );
}
