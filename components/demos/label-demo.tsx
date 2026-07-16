import { Input } from "@/registry/cupertino-ui/input";
import { Label } from "@/registry/cupertino-ui/label";

export default function LabelDemo() {
  return (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Jane Appleseed" />
    </div>
  );
}
