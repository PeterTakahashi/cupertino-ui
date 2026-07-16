"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/apple-ui/select";

export default function SelectDemo() {
  return (
    <Select defaultValue="medium">
      <SelectTrigger>
        <SelectValue placeholder="Text size" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Text Size</SelectLabel>
          <SelectItem value="small">Small</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="large">Large</SelectItem>
          <SelectItem value="xlarge">Extra Large</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
