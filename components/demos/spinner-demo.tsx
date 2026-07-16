import { Spinner } from "@/registry/apple-ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size={16} />
      <Spinner />
      <Spinner size={32} />
    </div>
  );
}
