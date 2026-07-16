"use client";

import * as React from "react";
import { Bluetooth, Moon, Sun, Wifi } from "lucide-react";

import { Badge } from "@/registry/cupertino-ui/badge";
import { Button } from "@/registry/cupertino-ui/button";
import { List, ListItem } from "@/registry/cupertino-ui/list";
import {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/cupertino-ui/segmented-control";
import { Slider } from "@/registry/cupertino-ui/slider";
import { Stepper } from "@/registry/cupertino-ui/stepper";
import { Switch } from "@/registry/cupertino-ui/switch";

/** The landing hero: a live macOS-style window built from cupertino-ui components. */
export function HeroWindow() {
  const [brightness, setBrightness] = React.useState([70]);
  const [copies, setCopies] = React.useState(2);

  return (
    <div className="w-full max-w-2xl overflow-hidden rounded-[12px] bg-background shadow-[var(--shadow-window)]">
      {/* Title bar */}
      <div className="material-thin flex h-12 items-center px-4 shadow-[0_0.5px_0_0_var(--separator)]">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
          <span className="size-3 rounded-full bg-[#febc2e] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
          <span className="size-3 rounded-full bg-[#28c840] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.15)]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-footnote font-semibold text-secondary-label">
          Control Center
        </span>
      </div>

      <div className="grid gap-6 bg-grouped p-6 sm:grid-cols-2">
        <List header="Connectivity">
          <ListItem
            icon={<Wifi />}
            detail={<Switch defaultChecked className="scale-[0.8]" />}
          >
            Wi-Fi
          </ListItem>
          <ListItem
            icon={<Bluetooth />}
            iconColor="var(--system-indigo)"
            detail={<Switch defaultChecked className="scale-[0.8]" />}
          >
            Bluetooth
          </ListItem>
          <ListItem
            icon={<Moon />}
            iconColor="var(--system-purple)"
            detail={<Switch className="scale-[0.8]" />}
          >
            Focus
          </ListItem>
        </List>

        <div className="flex flex-col justify-between gap-5">
          <div className="flex flex-col gap-2.5">
            <p className="flex items-center gap-2 text-footnote uppercase text-secondary-label">
              <Sun className="size-3.5" /> Display
            </p>
            <Slider value={brightness} onValueChange={setBrightness} />
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-footnote uppercase text-secondary-label">
              Appearance
            </p>
            <SegmentedControl defaultValue="auto">
              <SegmentedControlList className="w-full">
                <SegmentedControlTrigger value="light">
                  Light
                </SegmentedControlTrigger>
                <SegmentedControlTrigger value="dark">
                  Dark
                </SegmentedControlTrigger>
                <SegmentedControlTrigger value="auto">
                  Auto
                </SegmentedControlTrigger>
              </SegmentedControlList>
            </SegmentedControl>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className="text-subheadline">
              Desktops: {copies} <Badge variant="tinted">New</Badge>
            </span>
            <Stepper value={copies} onValueChange={setCopies} min={1} max={9} />
          </div>

          <div className="flex gap-2">
            <Button className="flex-1">Done</Button>
            <Button variant="gray" className="flex-1">
              Options…
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
