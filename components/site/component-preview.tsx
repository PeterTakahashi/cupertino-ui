"use client";

import * as React from "react";

import { CodeBlock } from "@/components/site/code-block";
import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/apple-ui/segmented-control";

export function ComponentPreview({
  code,
  children,
}: {
  code: string;
  children: React.ReactNode;
}) {
  return (
    <SegmentedControl defaultValue="preview">
      <SegmentedControlList>
        <SegmentedControlTrigger value="preview" className="px-6">
          Preview
        </SegmentedControlTrigger>
        <SegmentedControlTrigger value="code" className="px-6">
          Code
        </SegmentedControlTrigger>
      </SegmentedControlList>
      <SegmentedControlContent value="preview">
        <div className="flex min-h-72 items-center justify-center rounded-[var(--radius-group)] bg-grouped p-8 shadow-[inset_0_0_0_1px_var(--separator)]">
          {children}
        </div>
      </SegmentedControlContent>
      <SegmentedControlContent value="code">
        <CodeBlock code={code} />
      </SegmentedControlContent>
    </SegmentedControl>
  );
}
