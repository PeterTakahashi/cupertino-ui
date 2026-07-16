"use client";

import { Slider } from "@/registry/cupertino-ui/slider";

export default function SliderDemo() {
  return <Slider defaultValue={[60]} max={100} step={1} className="w-64" />;
}
