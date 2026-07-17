import { CameraIcon, HeartIcon, PlusIcon, ShareIcon } from "lucide-react";
import { GlassButton } from "@/components/ui/glass-button";

export default function GlassButtonDemo() {
  return (
    <div
      className="flex w-full max-w-md flex-col items-center gap-5 rounded-[var(--radius-group)] bg-cover bg-center p-8"
      style={{ backgroundImage: "url(/samples/covers/lake.jpg)" }}
    >
      <div className="flex items-center gap-3">
        <GlassButton>Cancel</GlassButton>
        <GlassButton tint="var(--system-blue)">
          <PlusIcon /> Add Widget
        </GlassButton>
      </div>
      <div className="flex items-center gap-3">
        <GlassButton size="icon" aria-label="Camera"><CameraIcon /></GlassButton>
        <GlassButton size="icon" aria-label="Like"><HeartIcon /></GlassButton>
        <GlassButton size="icon" variant="clear" aria-label="Share"><ShareIcon /></GlassButton>
      </div>
      <GlassButton size="lg" tint="var(--system-red)">Delete Photo</GlassButton>
    </div>
  );
}
