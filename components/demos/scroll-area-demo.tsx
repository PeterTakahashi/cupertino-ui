import { ScrollArea } from "@/registry/cupertino-ui/scroll-area";
import { Separator } from "@/registry/cupertino-ui/separator";

const tracks = [
  "Here Comes the Sun", "Let It Be", "Come Together", "Hey Jude",
  "Yesterday", "Blackbird", "Something", "In My Life",
  "Across the Universe", "While My Guitar Gently Weeps", "Help!",
  "A Day in the Life",
];

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-56 w-64 rounded-[var(--radius-card)] bg-grouped-secondary shadow-[var(--shadow-card)]">
      <div className="p-3">
        <p className="px-2 pb-1 text-caption-1 font-semibold uppercase text-secondary-label">
          Up Next
        </p>
        {tracks.map((t, i) => (
          <div key={t}>
            <div className="rounded-[7px] px-2 py-1.5 text-subheadline hover:bg-fill-quaternary">
              {t}
            </div>
            {i < tracks.length - 1 ? <Separator className="ml-2" /> : null}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
