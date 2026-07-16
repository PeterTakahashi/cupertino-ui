"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/cupertino-ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup
      orientation="horizontal"
      className="h-48 w-full max-w-md overflow-hidden rounded-[var(--radius-card)] bg-background shadow-[var(--shadow-card)]"
    >
      <ResizablePanel defaultSize="30" minSize="20">
        <div className="flex h-full items-center justify-center bg-secondary-background text-footnote text-secondary-label">
          Sidebar
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize="70">
        <div className="flex h-full items-center justify-center text-footnote text-secondary-label">
          Content
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
