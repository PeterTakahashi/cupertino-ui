"use client";

import * as React from "react";
import { Stepper } from "@/registry/apple-ui/stepper";

export default function StepperDemo() {
  const [copies, setCopies] = React.useState(1);

  return (
    <div className="flex items-center gap-4">
      <span className="text-body">Copies: {copies}</span>
      <Stepper value={copies} onValueChange={setCopies} min={1} max={99} />
    </div>
  );
}
