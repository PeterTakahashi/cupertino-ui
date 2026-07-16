"use client";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/registry/cupertino-ui/menubar";

export default function MenubarDemo() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-[10px] shadow-[var(--shadow-card)]">
      <Menubar className="w-full">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">Finder</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About Finder</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Settings… <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Finder Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Folder <MenubarShortcut>⇧⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>Burn Disc…</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="icons">
              <MenubarRadioItem value="icons">as Icons</MenubarRadioItem>
              <MenubarRadioItem value="list">as List</MenubarRadioItem>
              <MenubarRadioItem value="columns">as Columns</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Show Path Bar</MenubarCheckboxItem>
            <MenubarCheckboxItem>Show Status Bar</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex h-24 items-center justify-center bg-background text-footnote text-tertiary-label">
        Window content
      </div>
    </div>
  );
}
