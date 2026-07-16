import * as React from "react";

import AvatarDemo from "@/components/demos/avatar-demo";
import BadgeDemo from "@/components/demos/badge-demo";
import ButtonDemo from "@/components/demos/button-demo";
import CardDemo from "@/components/demos/card-demo";
import CheckboxDemo from "@/components/demos/checkbox-demo";
import DialogDemo from "@/components/demos/dialog-demo";
import DropdownMenuDemo from "@/components/demos/dropdown-menu-demo";
import InputDemo from "@/components/demos/input-demo";
import LabelDemo from "@/components/demos/label-demo";
import ListDemo from "@/components/demos/list-demo";
import PopoverDemo from "@/components/demos/popover-demo";
import ProgressDemo from "@/components/demos/progress-demo";
import RadioGroupDemo from "@/components/demos/radio-group-demo";
import SegmentedControlDemo from "@/components/demos/segmented-control-demo";
import SelectDemo from "@/components/demos/select-demo";
import SeparatorDemo from "@/components/demos/separator-demo";
import SheetDemo from "@/components/demos/sheet-demo";
import SkeletonDemo from "@/components/demos/skeleton-demo";
import SliderDemo from "@/components/demos/slider-demo";
import SpinnerDemo from "@/components/demos/spinner-demo";
import StepperDemo from "@/components/demos/stepper-demo";
import SwitchDemo from "@/components/demos/switch-demo";
import TextareaDemo from "@/components/demos/textarea-demo";
import TooltipDemo from "@/components/demos/tooltip-demo";

import ActionSheetDemo from "@/components/demos/action-sheet-demo";
import ColorPickerDemo from "@/components/demos/color-picker-demo";
import ContentUnavailableDemo from "@/components/demos/content-unavailable-demo";
import ControlGroupDemo from "@/components/demos/control-group-demo";
import DatePickerDemo from "@/components/demos/date-picker-demo";
import DisclosureGroupDemo from "@/components/demos/disclosure-group-demo";
import FormDemo from "@/components/demos/form-demo";
import GaugeDemo from "@/components/demos/gauge-demo";
import NavigationStackDemo from "@/components/demos/navigation-stack-demo";
import SearchFieldDemo from "@/components/demos/search-field-demo";
import SidebarDemo from "@/components/demos/sidebar-demo";
import TabBarDemo from "@/components/demos/tab-bar-demo";
import ToolbarDemo from "@/components/demos/toolbar-demo";

export const demos: Record<string, React.ComponentType> = {
  "action-sheet": ActionSheetDemo,
  "color-picker": ColorPickerDemo,
  "content-unavailable": ContentUnavailableDemo,
  "control-group": ControlGroupDemo,
  "date-picker": DatePickerDemo,
  "disclosure-group": DisclosureGroupDemo,
  form: FormDemo,
  gauge: GaugeDemo,
  "navigation-stack": NavigationStackDemo,
  "search-field": SearchFieldDemo,
  sidebar: SidebarDemo,
  "tab-bar": TabBarDemo,
  toolbar: ToolbarDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  button: ButtonDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  dialog: DialogDemo,
  "dropdown-menu": DropdownMenuDemo,
  input: InputDemo,
  label: LabelDemo,
  list: ListDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  "segmented-control": SegmentedControlDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  stepper: StepperDemo,
  switch: SwitchDemo,
  textarea: TextareaDemo,
  tooltip: TooltipDemo,
};
