"use client";

import { ChevronLeftIcon, ChevronRightIcon, MinusIcon, PlusIcon } from "lucide-react";
import {
  ControlGroup,
  ControlGroupButton,
} from "@/registry/cupertino-ui/control-group";

export default function ControlGroupDemo() {
  return (
    <div className="flex items-center gap-6">
      <ControlGroup>
        <ControlGroupButton aria-label="Back">
          <ChevronLeftIcon />
        </ControlGroupButton>
        <ControlGroupButton aria-label="Forward">
          <ChevronRightIcon />
        </ControlGroupButton>
      </ControlGroup>
      <ControlGroup>
        <ControlGroupButton aria-label="Zoom out">
          <MinusIcon />
        </ControlGroupButton>
        <ControlGroupButton>100%</ControlGroupButton>
        <ControlGroupButton aria-label="Zoom in">
          <PlusIcon />
        </ControlGroupButton>
      </ControlGroup>
    </div>
  );
}
