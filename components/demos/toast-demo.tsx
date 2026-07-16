"use client";

import { MessageCircleIcon } from "lucide-react";
import { Button } from "@/registry/cupertino-ui/button";
import { toast, Toaster } from "@/registry/cupertino-ui/toast";

export default function ToastDemo() {
  return (
    <>
      <Toaster />
      <Button
        variant="tinted"
        onClick={() =>
          toast({
            title: "Maya Lin",
            description: "Are we still on for lunch tomorrow?",
            icon: <MessageCircleIcon />,
            iconColor: "var(--system-green)",
          })
        }
      >
        Show Notification
      </Button>
    </>
  );
}
