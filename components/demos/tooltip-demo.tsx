"use client";

import { Button } from "@/registry/cupertino-ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/cupertino-ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="gray" size="icon" aria-label="Add">+</Button>
      </TooltipTrigger>
      <TooltipContent>New Reminder</TooltipContent>
    </Tooltip>
  );
}
