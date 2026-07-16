"use client";

import { DatePicker } from "@/registry/cupertino-ui/date-picker";

export default function DatePickerDemo() {
  return <DatePicker defaultValue={new Date()} />;
}
