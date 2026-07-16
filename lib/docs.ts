export type ComponentDoc = {
  slug: string;
  title: string;
  description: string;
  /** SwiftUI counterpart, shown as "SwiftUI: …" in the docs header. */
  swiftui?: string;
};

export const components: ComponentDoc[] = [
  { slug: "avatar", title: "Avatar", description: "Contacts-style circular avatar with a monogram fallback.", swiftui: "AsyncImage in a Circle clip" },
  { slug: "badge", title: "Badge", description: "iOS badges and tinted capsules.", swiftui: ".badge(_:)" },
  { slug: "button", title: "Button", description: "Filled, tinted, gray, plain, and destructive styles.", swiftui: "Button + .buttonStyle(.borderedProminent)" },
  { slug: "card", title: "Card", description: "A grouped-inset card with a hairline shadow.", swiftui: "GroupBox" },
  { slug: "checkbox", title: "Checkbox", description: "The macOS checkbox: accent square with a white check.", swiftui: "Toggle + .toggleStyle(.checkbox)" },
  { slug: "dialog", title: "Dialog", description: "The iOS alert with hairline-separated actions.", swiftui: ".alert(_:isPresented:)" },
  { slug: "dropdown-menu", title: "Dropdown Menu", description: "The macOS pull-down menu on a blurred material.", swiftui: "Menu" },
  { slug: "input", title: "Input", description: "iOS inset field or macOS rounded-border text field.", swiftui: "TextField" },
  { slug: "label", title: "Label", description: "Form label set in the subheadline style.", swiftui: "LabeledContent" },
  { slug: "list", title: "List", description: "The iOS Settings list: icon tiles, chevrons, hairline separators.", swiftui: "List + .listStyle(.insetGrouped)" },
  { slug: "popover", title: "Popover", description: "A blurred material panel anchored to a control.", swiftui: ".popover(isPresented:)" },
  { slug: "progress", title: "Progress", description: "The thin linear progress bar.", swiftui: "ProgressView(value:)" },
  { slug: "radio-group", title: "Radio Group", description: "macOS radio buttons with the accent fill.", swiftui: "Picker + .pickerStyle(.radioGroup)" },
  { slug: "segmented-control", title: "Segmented Control", description: "The selected segment floats on a white platter.", swiftui: "Picker + .pickerStyle(.segmented)" },
  { slug: "select", title: "Select", description: "The macOS pop-up button with the accent chevron capsule.", swiftui: "Picker + .pickerStyle(.menu)" },
  { slug: "separator", title: "Separator", description: "A hairline divider.", swiftui: "Divider" },
  { slug: "sheet", title: "Sheet", description: "The iOS bottom sheet with a grabber.", swiftui: ".sheet(isPresented:)" },
  { slug: "skeleton", title: "Skeleton", description: "Redaction placeholder for loading states.", swiftui: ".redacted(reason: .placeholder)" },
  { slug: "slider", title: "Slider", description: "The iOS slider with the 28pt white thumb.", swiftui: "Slider" },
  { slug: "spinner", title: "Spinner", description: "The activity indicator with eight fading spokes.", swiftui: "ProgressView()" },
  { slug: "stepper", title: "Stepper", description: "The iOS − / + control.", swiftui: "Stepper" },
  { slug: "switch", title: "Switch", description: "The iOS toggle with the springy knob.", swiftui: "Toggle" },
  { slug: "textarea", title: "Textarea", description: "Multiline text on an iOS inset field.", swiftui: "TextEditor" },
  { slug: "tooltip", title: "Tooltip", description: "The macOS help tag.", swiftui: ".help(_:)" },
];

export const siteConfig = {
  name: "apple-ui",
  github: "https://github.com/PeterTakahashi/apple-ui",
  /** Base URL used in `npx shadcn add` commands. */
  registryBase:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://apple-ui.vercel.app",
};
