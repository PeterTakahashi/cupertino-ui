import {
  SegmentedControl,
  SegmentedControlContent,
  SegmentedControlList,
  SegmentedControlTrigger,
} from "@/registry/cupertino-ui/segmented-control";

export default function SegmentedControlDemo() {
  return (
    <SegmentedControl defaultValue="year" className="items-center">
      <SegmentedControlList>
        <SegmentedControlTrigger value="day">Day</SegmentedControlTrigger>
        <SegmentedControlTrigger value="week">Week</SegmentedControlTrigger>
        <SegmentedControlTrigger value="month">Month</SegmentedControlTrigger>
        <SegmentedControlTrigger value="year">Year</SegmentedControlTrigger>
      </SegmentedControlList>
      <SegmentedControlContent value="day" className="text-footnote text-secondary-label">Steps today</SegmentedControlContent>
      <SegmentedControlContent value="week" className="text-footnote text-secondary-label">Steps this week</SegmentedControlContent>
      <SegmentedControlContent value="month" className="text-footnote text-secondary-label">Steps this month</SegmentedControlContent>
      <SegmentedControlContent value="year" className="text-footnote text-secondary-label">Steps this year</SegmentedControlContent>
    </SegmentedControl>
  );
}
