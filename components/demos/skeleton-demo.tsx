import { Skeleton } from "@/registry/cupertino-ui/skeleton";

export default function SkeletonDemo() {
  return (
    <div className="flex w-64 items-center gap-3">
      <Skeleton className="size-11 shrink-0 rounded-full" />
      <div className="flex w-full flex-col gap-2">
        <Skeleton className="h-3.5 w-3/4" />
        <Skeleton className="h-3.5 w-1/2" />
      </div>
    </div>
  );
}
