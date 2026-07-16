"use client";

import { Checkbox } from "@/registry/cupertino-ui/checkbox";
import { Label } from "@/registry/cupertino-ui/label";

export default function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2.5">
        <Checkbox id="wifi" defaultChecked />
        <Label htmlFor="wifi">Wi-Fi</Label>
      </div>
      <div className="flex items-center gap-2.5">
        <Checkbox id="bt" />
        <Label htmlFor="bt">Bluetooth</Label>
      </div>
      <div className="flex items-center gap-2.5">
        <Checkbox id="disabled" disabled />
        <Label htmlFor="disabled">AirDrop (unavailable)</Label>
      </div>
    </div>
  );
}
