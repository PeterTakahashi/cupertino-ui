"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/cupertino-ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/cupertino-ui/hover-card";

export default function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-body text-blue">
        @apple
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/apple.png" alt="Apple" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0.5">
            <p className="text-headline">Apple</p>
            <p className="text-footnote text-secondary-label">
              Open source projects from Apple — Swift, WebKit, and more.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
