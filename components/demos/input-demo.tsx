import { Input } from "@/registry/apple-ui/input";

export default function InputDemo() {
  return (
    <div className="flex w-72 flex-col gap-4">
      <Input placeholder="Search" />
      <Input variant="bordered" placeholder="Account Name" />
    </div>
  );
}
