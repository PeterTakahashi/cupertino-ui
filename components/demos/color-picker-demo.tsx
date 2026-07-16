"use client";

import { ColorPicker } from "@/registry/cupertino-ui/color-picker";

export default function ColorPickerDemo() {
  return <ColorPicker defaultValue="var(--system-blue)" label="Highlight" />;
}
