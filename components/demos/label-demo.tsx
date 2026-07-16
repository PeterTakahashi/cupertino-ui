import { Input } from "@/registry/apple-ui/input";
import { Label } from "@/registry/apple-ui/label";

export default function LabelDemo() {
  return (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Jane Appleseed" />
    </div>
  );
}
