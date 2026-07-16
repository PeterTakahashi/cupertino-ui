"use client";

import { Button } from "@/registry/cupertino-ui/button";
import {
  ActionSheet,
  ActionSheetAction,
  ActionSheetCancel,
  ActionSheetClose,
  ActionSheetContent,
  ActionSheetGroup,
  ActionSheetHeader,
  ActionSheetTrigger,
} from "@/registry/cupertino-ui/action-sheet";

export default function ActionSheetDemo() {
  return (
    <ActionSheet>
      <ActionSheetTrigger asChild>
        <Button variant="tinted">Delete Note…</Button>
      </ActionSheetTrigger>
      <ActionSheetContent>
        <ActionSheetGroup>
          <ActionSheetHeader
            title="This note will be deleted"
            message="You can restore it from Recently Deleted for 30 days."
          />
          <ActionSheetClose asChild>
            <ActionSheetAction variant="destructive">
              Delete Note
            </ActionSheetAction>
          </ActionSheetClose>
          <ActionSheetClose asChild>
            <ActionSheetAction>Save to Files</ActionSheetAction>
          </ActionSheetClose>
        </ActionSheetGroup>
        <ActionSheetCancel />
      </ActionSheetContent>
    </ActionSheet>
  );
}
