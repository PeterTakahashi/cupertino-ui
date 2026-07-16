"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * SwiftUI ProgressView() — the UIActivityIndicator with eight
 * fading spokes.
 */
function Spinner({
  className,
  size = 20,
  ...props
}: React.ComponentProps<"span"> & { size?: number }) {
  return (
    <span
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn("relative inline-block text-secondary-label", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <style>{`@keyframes cupertino-ui-spinner { 0% { opacity: 1 } 100% { opacity: 0.15 } }`}</style>
      {Array.from({ length: 8 }, (_, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full bg-current"
          style={{
            width: size * 0.095,
            height: size * 0.30,
            transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(${-size * 0.34}px)`,
            animation: `cupertino-ui-spinner 0.8s linear infinite`,
            animationDelay: `${(i - 8) * 0.1}s`,
          }}
        />
      ))}
    </span>
  );
}

export { Spinner };
