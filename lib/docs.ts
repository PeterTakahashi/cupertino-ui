export type ComponentDoc = {
  slug: string;
  title: string;
  description: string;
  /** SwiftUI counterpart, shown as "SwiftUI: …" in the docs header. */
  swiftui?: string;
};

export const components: ComponentDoc[] = [
  { slug: "accordion", title: "Accordion", description: "Grouped-inset disclosure list with rotating chevrons.", swiftui: "DisclosureGroup in a List" },
  { slug: "action-sheet", title: "Action Sheet", description: "Stacked action groups rising from the bottom, with a detached Cancel.", swiftui: ".confirmationDialog(_:isPresented:)" },
  { slug: "album-grid", title: "Album Grid", description: "The Apple Music library grid.", swiftui: "LazyVGrid of artwork" },
  { slug: "album-header", title: "Album Header", description: "Album artwork, red artist name, Play / Shuffle." },
  { slug: "alert", title: "Alert", description: "Inline tinted banner for warnings and status." },
  { slug: "audio-player", title: "Audio Player", description: "Queue, transport, seek, volume — as a hook.", swiftui: "MusicKit player" },
  { slug: "avatar", title: "Avatar", description: "Contacts-style circular avatar with a monogram fallback.", swiftui: "AsyncImage in a Circle clip" },
  { slug: "badge", title: "Badge", description: "iOS badges and tinted capsules.", swiftui: ".badge(_:)" },
  { slug: "breadcrumb", title: "Breadcrumb", description: "The Finder path bar with chevron separators." },
  { slug: "button", title: "Button", description: "Filled, tinted, gray, plain, and destructive styles.", swiftui: "Button + .buttonStyle(.borderedProminent)" },
  { slug: "card", title: "Card", description: "A grouped-inset card with a hairline shadow.", swiftui: "GroupBox" },
  { slug: "carousel", title: "Carousel", description: "Scroll-snap paging with a dot indicator.", swiftui: "TabView + .tabViewStyle(.page)" },
  { slug: "checkbox", title: "Checkbox", description: "The macOS checkbox: accent square with a white check.", swiftui: "Toggle + .toggleStyle(.checkbox)" },
  { slug: "color-picker", title: "Color Picker", description: "The rainbow-ring well plus system-color swatches.", swiftui: "ColorPicker" },
  { slug: "combobox", title: "Combobox", description: "Bordered field with a filtered suggestion menu.", swiftui: "NSComboBox" },
  { slug: "command", title: "Command", description: "Spotlight: the cmd-K command palette." },
  { slug: "content-unavailable", title: "Content Unavailable", description: "The centered empty state with symbol, title, and actions.", swiftui: "ContentUnavailableView" },
  { slug: "context-menu", title: "Context Menu", description: "The macOS right-click menu.", swiftui: ".contextMenu { ... }" },
  { slug: "control-group", title: "Control Group", description: "A bordered cluster of buttons on one platter.", swiftui: "ControlGroup" },
  { slug: "date-picker", title: "Date Picker", description: "The inline calendar with month paging.", swiftui: "DatePicker + .datePickerStyle(.graphical)" },
  { slug: "dialog", title: "Dialog", description: "The iOS alert with hairline-separated actions.", swiftui: ".alert(_:isPresented:)" },
  { slug: "disclosure-group", title: "Disclosure Group", description: "Rotating-chevron rows that reveal indented content.", swiftui: "DisclosureGroup" },
  { slug: "dropdown-menu", title: "Dropdown Menu", description: "The macOS pull-down menu on a blurred material.", swiftui: "Menu" },
  { slug: "form", title: "Form", description: "Grouped-inset sections of label/control rows.", swiftui: "Form" },
  { slug: "gauge", title: "Gauge", description: "The open-ring dial and the linear capacity bar.", swiftui: "Gauge" },
  { slug: "hover-card", title: "Hover Card", description: "A hover preview panel on thick material." },
  { slug: "input", title: "Input", description: "iOS inset field or macOS rounded-border text field.", swiftui: "TextField" },
  { slug: "input-otp", title: "Input OTP", description: "Verification-code cells with a blinking caret." },
  { slug: "label", title: "Label", description: "Form label set in the subheadline style.", swiftui: "LabeledContent" },
  { slug: "list", title: "List", description: "The iOS Settings list: icon tiles, chevrons, hairline separators.", swiftui: "List + .listStyle(.insetGrouped)" },
  { slug: "lyrics-view", title: "Lyrics View", description: "Bold synced lyric lines that light up with playback.", swiftui: "MusicKit lyrics" },
  { slug: "menubar", title: "Menubar", description: "The macOS menu bar with material menus.", swiftui: ".commands { CommandMenu(...) }" },
  { slug: "mini-player", title: "Mini Player", description: "The floating capsule above the tab bar." },
  { slug: "navigation-stack", title: "Navigation Stack", description: "Push/pop slide transitions with a back-button nav bar.", swiftui: "NavigationStack + NavigationLink" },
  { slug: "now-playing", title: "Now Playing", description: "The full player with shrinking artwork." },
  { slug: "page-control", title: "Page Control", description: "Dots for paged content.", swiftui: "UIPageControl" },
  { slug: "popover", title: "Popover", description: "A blurred material panel anchored to a control.", swiftui: ".popover(isPresented:)" },
  { slug: "progress", title: "Progress", description: "The thin linear progress bar.", swiftui: "ProgressView(value:)" },
  { slug: "queue-list", title: "Queue List", description: "Up Next: current track pinned, upcoming below." },
  { slug: "radio-group", title: "Radio Group", description: "macOS radio buttons with the accent fill.", swiftui: "Picker + .pickerStyle(.radioGroup)" },
  { slug: "resizable", title: "Resizable", description: "Draggable split-view divider.", swiftui: "NavigationSplitView divider" },
  { slug: "scroll-area", title: "Scroll Area", description: "macOS overlay scrollbars.", swiftui: "ScrollView" },
  { slug: "search-field", title: "Search Field", description: "The iOS search bar with clear and Cancel.", swiftui: ".searchable(text:)" },
  { slug: "segmented-control", title: "Segmented Control", description: "The selected segment floats on a white platter.", swiftui: "Picker + .pickerStyle(.segmented)" },
  { slug: "select", title: "Select", description: "The macOS pop-up button with the accent chevron capsule.", swiftui: "Picker + .pickerStyle(.menu)" },
  { slug: "separator", title: "Separator", description: "A hairline divider.", swiftui: "Divider" },
  { slug: "sheet", title: "Sheet", description: "The iOS bottom sheet with a grabber.", swiftui: ".sheet(isPresented:)" },
  { slug: "sidebar", title: "Sidebar", description: "The macOS/iPadOS source list with accent selection.", swiftui: "NavigationSplitView" },
  { slug: "skeleton", title: "Skeleton", description: "Redaction placeholder for loading states.", swiftui: ".redacted(reason: .placeholder)" },
  { slug: "slider", title: "Slider", description: "The iOS slider with the 28pt white thumb.", swiftui: "Slider" },
  { slug: "spinner", title: "Spinner", description: "The activity indicator with eight fading spokes.", swiftui: "ProgressView()" },
  { slug: "stepper", title: "Stepper", description: "The iOS − / + control.", swiftui: "Stepper" },
  { slug: "switch", title: "Switch", description: "The iOS toggle with the springy knob.", swiftui: "Toggle" },
  { slug: "tab-bar", title: "Tab Bar", description: "The iOS bottom tab bar on blurred material.", swiftui: "TabView" },
  { slug: "table", title: "Table", description: "The macOS list view with alternating rows.", swiftui: "Table" },
  { slug: "textarea", title: "Textarea", description: "Multiline text on an iOS inset field.", swiftui: "TextEditor" },
  { slug: "toast", title: "Toast", description: "iOS notification banners; call toast() from anywhere." },
  { slug: "toggle-group", title: "Toggle Group", description: "The macOS toggle cluster on one platter.", swiftui: "Toggle + ControlGroup" },
  { slug: "toolbar", title: "Toolbar", description: "The macOS window toolbar with icon buttons.", swiftui: ".toolbar { ToolbarItem(...) }" },
  { slug: "tooltip", title: "Tooltip", description: "The macOS help tag.", swiftui: ".help(_:)" },
  { slug: "track-list", title: "Track List", description: "Numbered rows with animated equalizer bars." },
];

export const siteConfig = {
  name: "cupertino-ui",
  github: "https://github.com/PeterTakahashi/cupertino-ui",
  /** Base URL used in `npx shadcn add` commands. */
  registryBase:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://cupertino-ui.vercel.app",
};
