"use client";

import { HouseIcon, RadioIcon, SearchIcon, SquareStackIcon } from "lucide-react";
import {
  TabBar,
  TabBarContent,
  TabBarItem,
  TabBarList,
} from "@/registry/cupertino-ui/tab-bar";

export default function TabBarDemo() {
  return (
    <TabBar
      defaultValue="home"
      className="h-64 w-80 overflow-hidden rounded-[var(--radius-card)] bg-background shadow-[var(--shadow-card)]"
    >
      {["home", "browse", "radio", "search"].map((tab) => (
        <TabBarContent
          key={tab}
          value={tab}
          className="flex items-center justify-center text-footnote capitalize text-tertiary-label"
        >
          {tab}
        </TabBarContent>
      ))}
      <TabBarList>
        <TabBarItem value="home" icon={<HouseIcon />}>
          Home
        </TabBarItem>
        <TabBarItem value="browse" icon={<SquareStackIcon />} badge="3">
          Browse
        </TabBarItem>
        <TabBarItem value="radio" icon={<RadioIcon />}>
          Radio
        </TabBarItem>
        <TabBarItem value="search" icon={<SearchIcon />}>
          Search
        </TabBarItem>
      </TabBarList>
    </TabBar>
  );
}
