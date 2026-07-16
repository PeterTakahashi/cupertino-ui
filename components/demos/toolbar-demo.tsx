"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LayoutGridIcon,
  ListIcon,
  Share2Icon,
  TagIcon,
} from "lucide-react";
import {
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarSpacer,
  ToolbarTitle,
} from "@/registry/cupertino-ui/toolbar";

export default function ToolbarDemo() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
      <Toolbar>
        <ToolbarButton aria-label="Back">
          <ChevronLeftIcon />
        </ToolbarButton>
        <ToolbarButton aria-label="Forward" disabled>
          <ChevronRightIcon />
        </ToolbarButton>
        <ToolbarTitle subtitle="12 items">Documents</ToolbarTitle>
        <ToolbarSpacer />
        <ToolbarButton active aria-label="Grid view">
          <LayoutGridIcon />
        </ToolbarButton>
        <ToolbarButton aria-label="List view">
          <ListIcon />
        </ToolbarButton>
        <ToolbarSeparator />
        <ToolbarButton aria-label="Share">
          <Share2Icon />
        </ToolbarButton>
        <ToolbarButton aria-label="Tags">
          <TagIcon />
        </ToolbarButton>
      </Toolbar>
      <div className="flex h-28 items-center justify-center bg-background text-footnote text-tertiary-label">
        Window content
      </div>
    </div>
  );
}
