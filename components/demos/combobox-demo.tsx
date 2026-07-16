"use client";

import { Combobox } from "@/registry/cupertino-ui/combobox";

const fonts = [
  { value: "sf-pro", label: "SF Pro" },
  { value: "sf-mono", label: "SF Mono" },
  { value: "new-york", label: "New York" },
  { value: "helvetica", label: "Helvetica Neue" },
  { value: "avenir", label: "Avenir" },
  { value: "menlo", label: "Menlo" },
];

export default function ComboboxDemo() {
  return <Combobox options={fonts} defaultValue="SF Pro" placeholder="Font" />;
}
