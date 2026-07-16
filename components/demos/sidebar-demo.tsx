"use client";

import * as React from "react";
import { Clock, FolderIcon, StarIcon, TrashIcon, WifiIcon } from "lucide-react";
import {
  Sidebar,
  SidebarItem,
  SidebarProvider,
  SidebarSection,
  SidebarToggle,
} from "@/registry/cupertino-ui/sidebar";
import { Toolbar, ToolbarTitle } from "@/registry/cupertino-ui/toolbar";

export default function SidebarDemo() {
  const [selected, setSelected] = React.useState("recents");

  return (
    <SidebarProvider selected={selected} onSelect={setSelected}>
      <div className="flex h-80 w-full max-w-md flex-col overflow-hidden rounded-[var(--radius-card)] bg-background shadow-[var(--shadow-window)]">
        <Toolbar className="shrink-0">
          <SidebarToggle />
          <ToolbarTitle>Files</ToolbarTitle>
        </Toolbar>
        <div className="flex min-h-0 flex-1">
          <Sidebar>
            <SidebarSection title="Favorites">
              <SidebarItem value="recents" icon={<Clock />} badge="12">
                Recents
              </SidebarItem>
              <SidebarItem value="documents" icon={<FolderIcon />}>
                Documents
              </SidebarItem>
              <SidebarItem value="starred" icon={<StarIcon />}>
                Starred
              </SidebarItem>
            </SidebarSection>
            <SidebarSection title="Locations">
              <SidebarItem value="network" icon={<WifiIcon />}>
                Network
              </SidebarItem>
              <SidebarItem value="trash" icon={<TrashIcon />}>
                Trash
              </SidebarItem>
            </SidebarSection>
          </Sidebar>
          <div className="flex flex-1 items-center justify-center text-footnote capitalize text-tertiary-label">
            {selected}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
