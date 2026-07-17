"use client";

import { HouseIcon, RadioIcon, SearchIcon, SquareStackIcon } from "lucide-react";
import { GlassTabBar } from "@/components/ui/glass-tab-bar";

export default function GlassTabBarDemo() {
  return (
    <div
      className="flex w-full max-w-md items-end justify-center rounded-[var(--radius-group)] bg-cover bg-center p-8 pt-24"
      style={{ backgroundImage: "url(/samples/covers/marble.jpg)" }}
    >
      <GlassTabBar
        defaultValue="home"
        items={[
          { value: "home", icon: <HouseIcon />, label: "Home" },
          { value: "browse", icon: <SquareStackIcon />, label: "Browse" },
          { value: "radio", icon: <RadioIcon />, label: "Radio" },
          { value: "search", icon: <SearchIcon />, label: "Search" },
        ]}
      />
    </div>
  );
}
