"use client";

import { Switch } from "@/registry/apple-ui/switch";
import { Label } from "@/registry/apple-ui/label";

export default function SwitchDemo() {
  return (
    <div className="flex items-center gap-3">
      <Label htmlFor="airplane">Airplane Mode</Label>
      <Switch id="airplane" defaultChecked />
    </div>
  );
}
