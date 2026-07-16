"use client";

import * as React from "react";
import {
  CalculatorIcon,
  CalendarIcon,
  FileTextIcon,
  FolderIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "@/registry/cupertino-ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/registry/cupertino-ui/command";

export default function CommandDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button variant="gray" onClick={() => setOpen(true)}>
        Spotlight… <span className="text-secondary-label">⌘K</span>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Spotlight Search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Top Hits">
            <CommandItem>
              <FileTextIcon /> Quarterly Report.pages
            </CommandItem>
            <CommandItem>
              <FolderIcon /> Design Assets
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Applications">
            <CommandItem>
              <CalendarIcon /> Calendar <CommandShortcut>⌘1</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CalculatorIcon /> Calculator <CommandShortcut>⌘2</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <SettingsIcon /> System Settings <CommandShortcut>⌘3</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
