import { Separator } from "@/registry/apple-ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-headline">Sound &amp; Haptics</p>
      <Separator />
      <div className="flex h-5 items-center gap-3 text-subheadline text-secondary-label">
        <span>Ringtone</span>
        <Separator orientation="vertical" />
        <span>Text Tone</span>
        <Separator orientation="vertical" />
        <span>New Mail</span>
      </div>
    </div>
  );
}
