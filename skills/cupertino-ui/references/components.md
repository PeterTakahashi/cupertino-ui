# cupertino-ui component catalog

Install any component with:

```bash
npx shadcn@latest add https://cupertino-ui.baltoon.jp/r/<slug>.json
```

Import from `@/components/ui/<slug>`. Per-component docs with live demos:
`https://cupertino-ui.baltoon.jp/docs/components/<slug>`

## Table of contents

- [Controls](#controls) — button, checkbox, color-picker, control-group, date-picker, input-otp, radio-group, segmented-control, slider, stepper, switch, toggle-group
- [Inputs](#inputs) — combobox, form, input, label, search-field, select, textarea
- [Layout & content](#layout-content) — accordion, alert, avatar, badge, breadcrumb, card, carousel, content-unavailable, disclosure-group, gauge, list, page-control, progress, resizable, scroll-area, separator, skeleton, spinner, table
- [Liquid Glass](#liquid-glass) — glass, glass-button, glass-tab-bar
- [Overlays](#overlays) — action-sheet, command, dialog, hover-card, popover, sheet, toast, tooltip
- [Menus & navigation](#menus-navigation) — context-menu, dropdown-menu, menubar, navigation-stack, sidebar, tab-bar, toolbar
- [Music](#music) — album-grid, album-header, audio-player, lyrics-view, mini-player, now-playing, queue-list, track-list

## Controls

### Button (`button`)

Filled, tinted, gray, plain, and destructive styles. SwiftUI counterpart: `Button + .buttonStyle(.borderedProminent)`.

Exports: `Button`, `buttonVariants`

### Checkbox (`checkbox`)

The macOS checkbox: accent square with a white check. SwiftUI counterpart: `Toggle + .toggleStyle(.checkbox)`.

Exports: `Checkbox`

### Color Picker (`color-picker`)

The rainbow-ring well plus system-color swatches. SwiftUI counterpart: `ColorPicker`.

Exports: `ColorPicker`

### Control Group (`control-group`)

A bordered cluster of buttons on one platter. SwiftUI counterpart: `ControlGroup`.

Exports: `ControlGroup`, `ControlGroupButton`

### Date Picker (`date-picker`)

The inline calendar with month paging. SwiftUI counterpart: `DatePicker + .datePickerStyle(.graphical)`.

Exports: `DatePicker`

### Input OTP (`input-otp`)

Verification-code cells with a blinking caret.

Exports: `InputOTP`, `InputOTPGroup`, `InputOTPSeparator`, `InputOTPSlot`

### Radio Group (`radio-group`)

macOS radio buttons with the accent fill. SwiftUI counterpart: `Picker + .pickerStyle(.radioGroup)`.

Exports: `RadioGroup`, `RadioGroupItem`

### Segmented Control (`segmented-control`)

The selected segment floats on a white platter. SwiftUI counterpart: `Picker + .pickerStyle(.segmented)`.

Exports: `SegmentedControl`, `SegmentedControlList`, `SegmentedControlTrigger`, `SegmentedControlContent`

### Slider (`slider`)

The iOS slider with the 28pt white thumb. SwiftUI counterpart: `Slider`.

Exports: `Slider`

### Stepper (`stepper`)

The iOS − / + control. SwiftUI counterpart: `Stepper`.

Exports: `Stepper`

### Switch (`switch`)

The iOS toggle with the springy knob. SwiftUI counterpart: `Toggle`.

Exports: `Switch`

### Toggle Group (`toggle-group`)

The macOS toggle cluster on one platter. SwiftUI counterpart: `Toggle + ControlGroup`.

Exports: `ToggleGroup`, `ToggleGroupItem`

## Inputs

### Combobox (`combobox`)

Bordered field with a filtered suggestion menu. SwiftUI counterpart: `NSComboBox`.

Exports: `Combobox`

### Form (`form`)

Grouped-inset sections of label/control rows. SwiftUI counterpart: `Form`.

Exports: `Form`, `FormRow`, `FormSection`

### Input (`input`)

iOS inset field or macOS rounded-border text field. SwiftUI counterpart: `TextField`.

Exports: `Input`, `inputVariants`

### Label (`label`)

Form label set in the subheadline style. SwiftUI counterpart: `LabeledContent`.

Exports: `Label`

### Search Field (`search-field`)

The iOS search bar with clear and Cancel. SwiftUI counterpart: `.searchable(text:)`.

Exports: `SearchField`

### Select (`select`)

The macOS pop-up button with the accent chevron capsule. SwiftUI counterpart: `Picker + .pickerStyle(.menu)`.

Exports: `Select`, `SelectContent`, `SelectGroup`, `SelectItem`, `SelectLabel`, `SelectScrollDownButton`, `SelectScrollUpButton`, `SelectSeparator`, `SelectTrigger`, `SelectValue`

### Textarea (`textarea`)

Multiline text on an iOS inset field. SwiftUI counterpart: `TextEditor`.

Exports: `Textarea`

## Layout & content

### Accordion (`accordion`)

Grouped-inset disclosure list with rotating chevrons. SwiftUI counterpart: `DisclosureGroup in a List`.

Exports: `Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger`

### Alert (`alert`)

Inline tinted banner for warnings and status.

Exports: `Alert`, `AlertDescription`, `AlertTitle`

### Avatar (`avatar`)

Contacts-style circular avatar with a monogram fallback. SwiftUI counterpart: `AsyncImage in a Circle clip`.

Exports: `Avatar`, `AvatarFallback`, `AvatarImage`

### Badge (`badge`)

iOS badges and tinted capsules. SwiftUI counterpart: `.badge(_:)`.

Exports: `Badge`, `badgeVariants`

### Breadcrumb (`breadcrumb`)

The Finder path bar with chevron separators.

Exports: `Breadcrumb`, `BreadcrumbEllipsis`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbList`, `BreadcrumbPage`, `BreadcrumbSeparator`

### Card (`card`)

A grouped-inset card with a hairline shadow. SwiftUI counterpart: `GroupBox`.

Exports: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

### Carousel (`carousel`)

Scroll-snap paging with a dot indicator. SwiftUI counterpart: `TabView + .tabViewStyle(.page)`.

Exports: `Carousel`, `CarouselItem`

### Content Unavailable (`content-unavailable`)

The centered empty state with symbol, title, and actions. SwiftUI counterpart: `ContentUnavailableView`.

Exports: `ContentUnavailable`

### Disclosure Group (`disclosure-group`)

Rotating-chevron rows that reveal indented content. SwiftUI counterpart: `DisclosureGroup`.

Exports: `DisclosureGroup`

### Gauge (`gauge`)

The open-ring dial and the linear capacity bar. SwiftUI counterpart: `Gauge`.

Exports: `Gauge`

### List (`list`)

The iOS Settings list: icon tiles, chevrons, hairline separators. SwiftUI counterpart: `List + .listStyle(.insetGrouped)`.

Exports: `List`, `ListItem`

### Page Control (`page-control`)

Dots for paged content. SwiftUI counterpart: `UIPageControl`.

Exports: `PageControl`

### Progress (`progress`)

The thin linear progress bar. SwiftUI counterpart: `ProgressView(value:)`.

Exports: `Progress`

### Resizable (`resizable`)

Draggable split-view divider. SwiftUI counterpart: `NavigationSplitView divider`.

Exports: `ResizableHandle`, `ResizablePanel`, `ResizablePanelGroup`

### Scroll Area (`scroll-area`)

macOS overlay scrollbars. SwiftUI counterpart: `ScrollView`.

Exports: `ScrollArea`, `ScrollBar`

### Separator (`separator`)

A hairline divider. SwiftUI counterpart: `Divider`.

Exports: `Separator`

### Skeleton (`skeleton`)

Redaction placeholder for loading states. SwiftUI counterpart: `.redacted(reason: .placeholder)`.

Exports: `Skeleton`

### Spinner (`spinner`)

The activity indicator with eight fading spokes. SwiftUI counterpart: `ProgressView()`.

Exports: `Spinner`

### Table (`table`)

The macOS list view with alternating rows. SwiftUI counterpart: `Table`.

Exports: `Table`, `TableBody`, `TableCaption`, `TableCell`, `TableFooter`, `TableHead`, `TableHeader`, `TableRow`

## Liquid Glass

### Glass (`glass`)

Liquid Glass: the light-bending control-layer material, regular and clear. SwiftUI counterpart: `glassEffect(_:in:)`.

Exports: `Glass`, `GlassSheen`, `glassVariants`

### Glass Button (`glass-button`)

Liquid Glass capsule button with springy press and optional tint. SwiftUI counterpart: `.buttonStyle(.glass)`.

Exports: `GlassButton`, `glassButtonVariants`

### Glass Tab Bar (`glass-tab-bar`)

Floating glass capsule with a pill morphing between tabs. SwiftUI counterpart: `TabView (iOS 26)`.

Exports: `GlassTabBar`

## Overlays

### Action Sheet (`action-sheet`)

Stacked action groups rising from the bottom, with a detached Cancel. SwiftUI counterpart: `.confirmationDialog(_:isPresented:)`.

Exports: `ActionSheet`, `ActionSheetAction`, `ActionSheetCancel`, `ActionSheetClose`, `ActionSheetContent`, `ActionSheetGroup`, `ActionSheetHeader`, `ActionSheetTrigger`

### Command (`command`)

Spotlight: the cmd-K command palette.

Exports: `Command`, `CommandDialog`, `CommandEmpty`, `CommandGroup`, `CommandInput`, `CommandItem`, `CommandList`, `CommandSeparator`, `CommandShortcut`

### Dialog (`dialog`)

The iOS alert with hairline-separated actions. SwiftUI counterpart: `.alert(_:isPresented:)`.

Exports: `Dialog`, `DialogAction`, `DialogClose`, `DialogContent`, `DialogDescription`, `DialogFooter`, `DialogHeader`, `DialogOverlay`, `DialogPortal`, `DialogTitle`, `DialogTrigger`

### Hover Card (`hover-card`)

A hover preview panel on thick material.

Exports: `HoverCard`, `HoverCardContent`, `HoverCardTrigger`

### Popover (`popover`)

A blurred material panel anchored to a control. SwiftUI counterpart: `.popover(isPresented:)`.

Exports: `Popover`, `PopoverAnchor`, `PopoverContent`, `PopoverTrigger`

### Sheet (`sheet`)

The iOS bottom sheet with a grabber. SwiftUI counterpart: `.sheet(isPresented:)`.

Exports: `Sheet`, `SheetClose`, `SheetContent`, `SheetDescription`, `SheetFooter`, `SheetHeader`, `SheetOverlay`, `SheetPortal`, `SheetTitle`, `SheetTrigger`

### Toast (`toast`)

iOS notification banners; call toast() from anywhere.

Exports: `toast`, `Toaster`

### Tooltip (`tooltip`)

The macOS help tag. SwiftUI counterpart: `.help(_:)`.

Exports: `Tooltip`, `TooltipContent`, `TooltipProvider`, `TooltipTrigger`

## Menus & navigation

### Context Menu (`context-menu`)

The macOS right-click menu. SwiftUI counterpart: `.contextMenu { ... }`.

Exports: `ContextMenu`, `ContextMenuCheckboxItem`, `ContextMenuContent`, `ContextMenuGroup`, `ContextMenuItem`, `ContextMenuLabel`, `ContextMenuPortal`, `ContextMenuRadioGroup`, `ContextMenuRadioItem`, `ContextMenuSeparator`, `ContextMenuShortcut`, `ContextMenuSub`, `ContextMenuSubContent`, `ContextMenuSubTrigger`, `ContextMenuTrigger`

### Dropdown Menu (`dropdown-menu`)

The macOS pull-down menu on a blurred material. SwiftUI counterpart: `Menu`.

Exports: `DropdownMenu`, `DropdownMenuCheckboxItem`, `DropdownMenuContent`, `DropdownMenuGroup`, `DropdownMenuItem`, `DropdownMenuLabel`, `DropdownMenuPortal`, `DropdownMenuRadioGroup`, `DropdownMenuRadioItem`, `DropdownMenuSeparator`, `DropdownMenuShortcut`, `DropdownMenuSub`, `DropdownMenuSubContent`, `DropdownMenuSubTrigger`, `DropdownMenuTrigger`

### Menubar (`menubar`)

The macOS menu bar with material menus. SwiftUI counterpart: `.commands { CommandMenu(...) }`.

Exports: `Menubar`, `MenubarCheckboxItem`, `MenubarContent`, `MenubarGroup`, `MenubarItem`, `MenubarLabel`, `MenubarMenu`, `MenubarPortal`, `MenubarRadioGroup`, `MenubarRadioItem`, `MenubarSeparator`, `MenubarShortcut`, `MenubarSub`, `MenubarSubContent`, `MenubarSubTrigger`, `MenubarTrigger`

### Navigation Stack (`navigation-stack`)

Push/pop slide transitions with a back-button nav bar. SwiftUI counterpart: `NavigationStack + NavigationLink`.

Exports: `NavigationLink`, `NavigationStack`, `useNavigation`

### Sidebar (`sidebar`)

The macOS/iPadOS source list with accent selection. SwiftUI counterpart: `NavigationSplitView`.

Exports: `Sidebar`, `SidebarItem`, `SidebarProvider`, `SidebarSection`, `SidebarToggle`, `useSidebar`

### Tab Bar (`tab-bar`)

The iOS bottom tab bar on blurred material. SwiftUI counterpart: `TabView`.

Exports: `TabBar`, `TabBarContent`, `TabBarItem`, `TabBarList`

### Toolbar (`toolbar`)

The macOS window toolbar with icon buttons. SwiftUI counterpart: `.toolbar { ToolbarItem(...) }`.

Exports: `Toolbar`, `ToolbarButton`, `ToolbarSeparator`, `ToolbarSpacer`, `ToolbarTitle`

## Music

### Album Grid (`album-grid`)

The Apple Music library grid. SwiftUI counterpart: `LazyVGrid of artwork`.

Exports: `AlbumCard`, `AlbumGrid`

### Album Header (`album-header`)

Album artwork, red artist name, Play / Shuffle.

Exports: `AlbumHeader`

### Audio Player (`audio-player`)

Queue, transport, seek, volume — as a hook. SwiftUI counterpart: `MusicKit player`.

Exports: `AudioPlayerProvider`, `formatTime`, `useAudioPlayer`

### Lyrics View (`lyrics-view`)

Bold synced lyric lines that light up with playback. SwiftUI counterpart: `MusicKit lyrics`.

Exports: `LyricsView`

### Mini Player (`mini-player`)

The floating capsule above the tab bar.

Exports: `MiniPlayer`

### Now Playing (`now-playing`)

The full player with shrinking artwork.

Exports: `NowPlaying`

### Queue List (`queue-list`)

Up Next: current track pinned, upcoming below.

Exports: `QueueList`

### Track List (`track-list`)

Numbered rows with animated equalizer bars.

Exports: `EqualizerBars`, `TrackList`, `TrackRow`
