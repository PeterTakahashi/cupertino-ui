"use client";

import { Button } from "@/registry/cupertino-ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/cupertino-ui/sheet";

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="gray">Show Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>AirPods Pro</SheetTitle>
          <SheetDescription>Connect to your devices</SheetDescription>
        </SheetHeader>
        <div className="flex h-32 items-center justify-center text-secondary-label">
          Sheet content
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button size="lg">Connect</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button size="lg" variant="plain">Not Now</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
