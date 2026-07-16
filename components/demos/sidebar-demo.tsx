"use client";

import * as React from "react";
import { Clock, FolderIcon, StarIcon, TrashIcon, WifiIcon } from "lucide-react";
import { Sidebar, SidebarItem, SidebarSection } from "@/registry/cupertino-ui/sidebar";

export default function SidebarDemo() {
  const [selected, setSelected] = React.useState("recents");

  return (
    <div className="h-72 w-64 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
      <Sidebar selected={selected} onSelect={setSelected}>
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
    </div>
  );
}
