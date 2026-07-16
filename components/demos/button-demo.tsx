import { Button } from "@/registry/cupertino-ui/button";

export default function ButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button>Filled</Button>
        <Button variant="tinted">Tinted</Button>
        <Button variant="gray">Gray</Button>
        <Button variant="plain">Plain</Button>
        <Button variant="destructive">Delete</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="sm" variant="tinted">Small</Button>
        <Button size="lg" className="w-56">Continue</Button>
      </div>
    </div>
  );
}
