"use client";

import { DisclosureGroup } from "@/registry/cupertino-ui/disclosure-group";
import { Checkbox } from "@/registry/cupertino-ui/checkbox";
import { Label } from "@/registry/cupertino-ui/label";

export default function DisclosureGroupDemo() {
  return (
    <div className="w-72">
      <DisclosureGroup label="Notifications" defaultOpen>
        <div className="flex flex-col gap-2 py-1">
          <div className="flex items-center gap-2">
            <Checkbox id="dg-mail" defaultChecked />
            <Label htmlFor="dg-mail">Mail</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="dg-msg" defaultChecked />
            <Label htmlFor="dg-msg">Messages</Label>
          </div>
        </div>
      </DisclosureGroup>
      <DisclosureGroup label="Sounds">
        <p className="py-1 text-footnote text-secondary-label">
          Configure alert sounds and haptics.
        </p>
      </DisclosureGroup>
    </div>
  );
}
