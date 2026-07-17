import { Glass } from "@/components/ui/glass";
import { Badge } from "@/registry/cupertino-ui/badge";

export default function GlassDemo() {
  return (
    <div
      className="flex w-full max-w-md flex-col items-center gap-6 rounded-[var(--radius-group)] bg-cover bg-center p-8"
      style={{ backgroundImage: "url(/samples/covers/tie-dye.jpg)" }}
    >
      <Glass className="w-64 rounded-[22px] p-4 text-label">
        <p className="text-headline">Regular glass</p>
        <p className="text-footnote opacity-80">
          Adaptive — legible over anything.
        </p>
      </Glass>
      <Glass variant="clear" className="w-64 rounded-[22px] p-4 text-white">
        <p className="text-headline">Clear glass</p>
        <p className="text-footnote opacity-80">
          For media-rich backgrounds.
        </p>
      </Glass>
      <Glass interactive className="rounded-full px-4 py-2 text-subheadline">
        Interactive <Badge variant="tinted">tap me</Badge>
      </Glass>
    </div>
  );
}
