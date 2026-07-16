"use client";

import { Label } from "@/registry/apple-ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/apple-ui/radio-group";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="medium">
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="small" id="r1" />
        <Label htmlFor="r1">Small</Label>
      </div>
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="medium" id="r2" />
        <Label htmlFor="r2">Medium</Label>
      </div>
      <div className="flex items-center gap-2.5">
        <RadioGroupItem value="large" id="r3" />
        <Label htmlFor="r3">Large</Label>
      </div>
    </RadioGroup>
  );
}
