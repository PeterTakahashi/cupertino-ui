"use client";

import * as React from "react";
import { CalendarIcon, CheckIcon, FlagIcon, PlusIcon } from "lucide-react";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import { Badge } from "@/registry/cupertino-ui/badge";
import { Button } from "@/registry/cupertino-ui/button";
import { GlassButton } from "@/components/ui/glass-button";
import { Input } from "@/registry/cupertino-ui/input";
import { List, ListItem } from "@/registry/cupertino-ui/list";
import {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/cupertino-ui/segmented-control";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/cupertino-ui/sheet";
import { Switch } from "@/registry/cupertino-ui/switch";
import { toast, Toaster } from "@/registry/cupertino-ui/toast";

type Reminder = {
  id: number;
  title: string;
  note?: string;
  list: "today" | "scheduled";
  flagged?: boolean;
  done: boolean;
};

const initial: Reminder[] = [
  { id: 1, title: "Water the plants", note: "Kitchen + balcony", list: "today", done: false },
  { id: 2, title: "Book dentist appointment", list: "today", flagged: true, done: false },
  { id: 3, title: "Reply to Yuki about the review", list: "today", done: false },
  { id: 4, title: "Pick up dry cleaning", note: "Closes at 19:00", list: "today", done: true },
  { id: 5, title: "Renew passport", list: "scheduled", note: "Before August trip", done: false },
  { id: 6, title: "Quarterly budget check-in", list: "scheduled", done: false },
];

function CircleCheck({
  checked,
  onToggle,
}: {
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onToggle}
      className={`flex size-[22px] shrink-0 cursor-default items-center justify-center rounded-full outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-blue/40 ${
        checked
          ? "bg-orange text-white"
          : "shadow-[inset_0_0_0_1.5px_var(--system-gray3)]"
      }`}
    >
      {checked ? <CheckIcon className="size-3!" strokeWidth={3.5} /> : null}
    </button>
  );
}

export default function RemindersShowcase() {
  const [items, setItems] = React.useState(initial);
  const [filter, setFilter] = React.useState("today");
  const [draft, setDraft] = React.useState("");
  const [showCompleted, setShowCompleted] = React.useState(true);

  const toggle = (id: number) => {
    setItems((xs) =>
      xs.map((x) => {
        if (x.id !== id) return x;
        if (!x.done)
          toast({ title: "Completed", description: x.title, icon: <CheckIcon />, iconColor: "var(--system-orange)" });
        return { ...x, done: !x.done };
      })
    );
  };

  const add = () => {
    const title = draft.trim();
    if (!title) return;
    setItems((xs) => [
      ...xs,
      { id: Math.max(...xs.map((x) => x.id)) + 1, title, list: "today", done: false },
    ]);
    setDraft("");
  };

  const shown = items.filter(
    (x) =>
      (filter === "all" || x.list === filter) && (showCompleted || !x.done)
  );
  const remaining = items.filter((x) => !x.done).length;

  return (
    <ShowcaseFrame title="Reminders">
      <Toaster />
      <div className="mx-auto flex w-full max-w-md flex-col gap-5">
        <header className="flex items-end justify-between px-1">
          <div>
            <h1 className="text-large-title tracking-tight text-orange">Today</h1>
            <p className="text-footnote text-secondary-label">
              {remaining} remaining
            </p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <GlassButton size="icon" aria-label="List options">
                <span className="text-[17px] leading-none">…</span>
              </GlassButton>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>List Options</SheetTitle>
              </SheetHeader>
              <List className="px-4 pb-2">
                <ListItem detail={<Switch checked={showCompleted} onCheckedChange={setShowCompleted} className="scale-[0.85]" />}>
                  Show Completed
                </ListItem>
                <ListItem detail={<Badge variant="orange">Orange</Badge>}>
                  List Color
                </ListItem>
              </List>
              <div className="p-4 pt-1">
                <SheetClose asChild>
                  <Button size="lg" className="w-full bg-orange">
                    Done
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <SegmentedControl value={filter} onValueChange={setFilter}>
          <SegmentedControlList className="w-full">
            <SegmentedControlTrigger value="today">
              <CalendarIcon /> Today
            </SegmentedControlTrigger>
            <SegmentedControlTrigger value="scheduled">
              Scheduled
            </SegmentedControlTrigger>
            <SegmentedControlTrigger value="all">All</SegmentedControlTrigger>
          </SegmentedControlList>
        </SegmentedControl>

        <List>
          {shown.map((x) => (
            <ListItem
              key={x.id}
              icon={<CircleCheck checked={x.done} onToggle={() => toggle(x.id)} />}
              iconColor="transparent"
              detail={x.flagged ? <FlagIcon className="size-4 fill-orange text-orange" /> : undefined}
              className={x.done ? "opacity-50" : undefined}
            >
              <span className={x.done ? "line-through" : undefined}>{x.title}</span>
              {x.note ? (
                <span className="block truncate text-footnote text-secondary-label">
                  {x.note}
                </span>
              ) : null}
            </ListItem>
          ))}
          {shown.length === 0 ? (
            <ListItem className="text-secondary-label">All caught up ✓</ListItem>
          ) : null}
        </List>

        <div className="flex items-center gap-2">
          <Input
            placeholder="New reminder"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
          />
          <GlassButton size="icon" onClick={add} aria-label="Add reminder" tint="var(--system-orange)">
            <PlusIcon />
          </GlassButton>
        </div>
      </div>
    </ShowcaseFrame>
  );
}
