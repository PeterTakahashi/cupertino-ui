"use client";

import * as React from "react";
import { Progress } from "@/registry/apple-ui/progress";

export default function ProgressDemo() {
  const [progress, setProgress] = React.useState(15);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(70), 600);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-64" />;
}
