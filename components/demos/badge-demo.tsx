import { Badge } from "@/registry/apple-ui/badge";

export default function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge>3</Badge>
      <Badge variant="red">12</Badge>
      <Badge variant="tinted">New</Badge>
      <Badge variant="green">Active</Badge>
      <Badge variant="orange">Beta</Badge>
      <Badge variant="gray">Draft</Badge>
      <Badge variant="outline">v1.0</Badge>
    </div>
  );
}
