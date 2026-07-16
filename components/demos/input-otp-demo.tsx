"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/cupertino-ui/input-otp";

export default function InputOTPDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-footnote text-secondary-label">
        Enter the code sent to your iPhone
      </p>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          {Array.from({ length: 6 }, (_, i) => (
            <InputOTPSlot key={i} index={i} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
