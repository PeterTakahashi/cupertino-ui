"use client";

import * as React from "react";
import { BikeIcon, DumbbellIcon, FootprintsIcon, WavesIcon } from "lucide-react";

import { ShowcaseFrame } from "@/components/site/showcase-frame";
import { Badge } from "@/registry/cupertino-ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/cupertino-ui/card";
import { Gauge } from "@/registry/cupertino-ui/gauge";
import { Progress } from "@/registry/cupertino-ui/progress";
import {
  SegmentedControl,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/cupertino-ui/segmented-control";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/cupertino-ui/table";

const periods: Record<string, { move: number; exercise: number; stand: number; steps: number }> = {
  day: { move: 82, exercise: 65, stand: 92, steps: 8421 },
  week: { move: 71, exercise: 58, stand: 88, steps: 52340 },
  month: { move: 64, exercise: 49, stand: 81, steps: 214882 },
};

const workouts = [
  { icon: FootprintsIcon, name: "Outdoor Run", when: "Today, 07:12", duration: "32:04", kcal
: 412, badge: "PR" },
  { icon: BikeIcon, name: "Cycling", when: "Yesterday", duration: "48:30", kcal: 561 },
  { icon: DumbbellIcon, name: "Strength", when: "Tuesday", duration: "41:15", kcal: 388 },
  { icon: WavesIcon, name: "Pool Swim", when: "Monday", duration: "25:40", kcal: 296 },
];

export default function FitnessShowcase() {
  const [period, setPeriod] = React.useState("day");
  const d = periods[period];

  return (
    <ShowcaseFrame title="Fitness">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <header className="flex items-end justify-between px-1">
          <div>
            <h1 className="text-large-title tracking-tight">Summary</h1>
            <p className="text-footnote text-secondary-label">Thursday, July 17</p>
          </div>
          <SegmentedControl value={period} onValueChange={setPeriod}>
            <SegmentedControlList>
              <SegmentedControlTrigger value="day">Day</SegmentedControlTrigger>
              <SegmentedControlTrigger value="week">Week</SegmentedControlTrigger>
              <SegmentedControlTrigger value="month">Month</SegmentedControlTrigger>
            </SegmentedControlList>
          </SegmentedControl>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Activity Rings</CardTitle>
            <CardDescription>Move · Exercise · Stand</CardDescription>
          </CardHeader>
          <div className="flex flex-wrap items-end justify-around gap-6 pb-2">
            <Gauge value={d.move} size={96} label="Move" tint="var(--system-red)"
              currentValueLabel={`${d.move}%`} />
            <Gauge value={d.exercise} size={96} label="Exercise" tint="var(--system-green)"
              currentValueLabel={`${d.exercise}%`} />
            <Gauge value={d.stand} size={96} label="Stand" tint="var(--system-cyan)"
              currentValueLabel={`${d.stand}%`} />
          </div>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-subheadline font-semibold text-secondary-label">
                Steps
              </CardTitle>
            </CardHeader>
            <p className="text-title-1 tabular-nums tracking-tight">
              {d.steps.toLocaleString()}
            </p>
            <Progress value={Math.min(100, (d.steps / 10000) * 100)} />
            <p className="text-caption-1 text-secondary-label">
              Goal: 10,000 steps
            </p>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-subheadline font-semibold text-secondary-label">
                Trends
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col gap-3">
              {[
                ["Active energy", 78, "var(--system-red)"],
                ["Workout minutes", 62, "var(--system-green)"],
                ["Distance", 55, "var(--system-cyan)"],
              ].map(([label, v, tint]) => (
                <Gauge
                  key={label as string}
                  variant="linear"
                  value={v as number}
                  tint={tint as string}
                  label={<span>{label}</span>}
                />
              ))}
            </div>
          </Card>
        </div>

        <section className="flex flex-col gap-2">
          <h2 className="px-1 text-title-3">Workouts</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Workout</TableHead>
                <TableHead>When</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead className="text-right">Energy</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workouts.map((w) => (
                <TableRow key={w.name}>
                  <TableCell className="font-medium">
                    <span className="flex items-center gap-2">
                      <w.icon className="size-4 text-green" />
                      {w.name}
                      {w.badge ? <Badge variant="green">{w.badge}</Badge> : null}
                    </span>
                  </TableCell>
                  <TableCell className="text-secondary-label">{w.when}</TableCell>
                  <TableCell className="tabular-nums text-secondary-label">
                    {w.duration}
                  </TableCell>
                  <TableCell className="text-right tabular-nums">
                    {w.kcal} kcal
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </ShowcaseFrame>
  );
}
