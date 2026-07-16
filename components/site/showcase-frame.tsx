import Link from "next/link";
import { ChevronLeftIcon } from "lucide-react";

/** Minimal chrome around a showcase app: back link + title. */
export function ShowcaseFrame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-grouped">
      <div className="sticky top-0 z-40 bg-grouped/80 shadow-[0_0.5px_0_0_var(--separator)] backdrop-blur-xl">
        <div className="mx-auto flex h-11 max-w-6xl items-center gap-2 px-4">
          <Link
            href="/showcases"
            className="flex items-center gap-0.5 rounded-[6px] py-1 pr-2 text-subheadline text-blue outline-none focus-visible:ring-[3px] focus-visible:ring-blue/40 active:opacity-50"
          >
            <ChevronLeftIcon className="size-5" strokeWidth={2.5} />
            Showcases
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 text-subheadline font-semibold text-label">
            {title}
          </span>
          <span className="ml-auto text-caption-1 text-tertiary-label">
            built with cupertino-ui
          </span>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6">
        {children}
      </div>
    </div>
  );
}
