"use client";

import { Button } from "@/registry/apple-ui/button";
import {
  Dialog,
  DialogAction,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/apple-ui/dialog";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="tinted">Remove Photo</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remove Photo?</DialogTitle>
          <DialogDescription>
            This photo will be removed from all your devices.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <DialogAction variant="cancel">Cancel</DialogAction>
          </DialogClose>
          <DialogClose asChild>
            <DialogAction variant="destructive">Remove</DialogAction>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
