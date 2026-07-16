"use client";

import { Button } from "@/registry/cupertino-ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/cupertino-ui/popover";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="gray">Show Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-1">
          <p className="text-headline">Focus</p>
          <p className="text-footnote text-secondary-label">
            Silence notifications while you work. Apps and people can still
            notify you if it&apos;s urgent.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
