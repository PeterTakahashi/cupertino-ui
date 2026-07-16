---
name: cupertino-ui
description: >
  How to install and build UIs with cupertino-ui — the shadcn-style React
  component library that reproduces Apple's Human Interface Guidelines
  (SwiftUI look-and-feel) on Tailwind CSS v4 + Radix. Use this skill whenever
  the user mentions cupertino-ui, wants Apple/iOS/macOS-style UI in React or
  Next.js, asks for SwiftUI-like components on the web (switches, segmented
  controls, sheets, inset-grouped lists, sidebars, tab bars, navigation
  push transitions, Apple Music-style players), or is adding components from
  the cupertino-ui registry — even if they just say "make it feel like an
  Apple app" without naming the library.
---

# cupertino-ui

cupertino-ui distributes Apple-HIG React components the shadcn way: the CLI
copies the component **source** into the user's project (`components/ui/`),
where it can be edited freely. There is no runtime package to depend on.
Docs and live demos: https://cupertino-ui-rho.vercel.app

## Setup (once per project)

Requirements: React 18+/Next.js and **Tailwind CSS v4** (the tokens use
`@theme`/`@utility`, which do not exist in v3).

```bash
# 1. shadcn plumbing, if the project has no components.json yet
npx shadcn@latest init

# 2. theme tokens + cn() helper — REQUIRED before any component
npx shadcn@latest add https://cupertino-ui-rho.vercel.app/r/theme.json
npm install tw-animate-css
```

Then import the theme in the global stylesheet, after Tailwind:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "../cupertino-ui-theme.css";
```

Every component looks broken without step 2 — the classes reference tokens
(`bg-blue`, `text-label`, `material-thick`, `text-body`) that only exist once
the theme CSS is loaded.

## Adding components

```bash
npx shadcn@latest add https://cupertino-ui-rho.vercel.app/r/<name>.json
# e.g. button, switch, list, navigation-stack, now-playing …
```

```tsx
import { Button } from "@/components/ui/button";

<Button variant="tinted">Continue</Button>
```

For the full catalog (61 components) with exports, key props, and usage
snippets, read [references/components.md](references/components.md). Skim its
table of contents and read only the sections you need.

## Design tokens — use these, not raw hex

Colors follow Apple's semantic system and adapt to dark mode automatically:

| Purpose | Classes |
|---|---|
| Accent / system colors | `bg-blue text-blue` (also `red green orange yellow teal cyan mint indigo purple pink brown`, `gray`–`gray-6`) |
| Text hierarchy | `text-label`, `text-secondary-label`, `text-tertiary-label`, `text-quaternary-label` |
| Fills (controls, platters) | `bg-fill`, `bg-fill-secondary`, `bg-fill-tertiary`, `bg-fill-quaternary` |
| Backgrounds | `bg-background`, `bg-secondary-background`; grouped screens: `bg-grouped`, `bg-grouped-secondary` |
| Materials (blur) | `material-ultrathin` / `-thin` / `-regular` / `-thick` |

Type scale = SF text styles with correct tracking: `text-large-title`,
`text-title-1/2/3`, `text-headline`, `text-body`, `text-callout`,
`text-subheadline`, `text-footnote`, `text-caption-1/2`. Prefer these over
`text-sm`/`text-lg` — they carry HIG size, line-height, and letter-spacing.

Radii tokens (7/10/12/16/20 px): `rounded-[var(--radius-control)]`,
`--radius-field`, `--radius-card`, `--radius-group`, `--radius-sheet`.
Shadows: `shadow-[var(--shadow-card)]`, `--shadow-menu`, `--shadow-window`.

Dark mode is class-based: toggle `dark` on `<html>`. All tokens swap
automatically; never write `dark:` overrides for token-based colors.

To re-tint the whole UI, override one variable:

```css
:root, .dark { --system-blue: var(--system-indigo); } /* or a brand color */
```

## Conventions that make it feel like Apple

- **Hairlines, not borders.** Separators are 0.5px shadows:
  `shadow-[0_0.5px_0_0_var(--separator)]` (or inset ring variants). A 1px
  `border` immediately looks non-Apple.
- **`cursor-default select-none`** on buttons and controls — macOS controls
  don't show a pointer cursor.
- Focus rings: `focus-visible:ring-[3px] focus-visible:ring-blue/40`.
- Press feedback: `active:scale-[0.97]` / `active:opacity-*` rather than
  color-only changes.
- Grouped screens (Settings-style) sit on `bg-grouped` with
  `bg-grouped-secondary` cards; content screens use `bg-background`.

## Composition patterns

**iOS settings screen** — `List` + rows with controls:

```tsx
<List header="Connectivity" footer="Explanatory footnote.">
  <ListItem icon={<Wifi />} detail={<Switch defaultChecked />}>Wi-Fi</ListItem>
  <ListItem icon={<Bluetooth />} detail="On" chevron onClick={...}>Bluetooth</ListItem>
</List>
```

**Push navigation without routing** — `NavigationStack` renders SwiftUI-style
slide transitions and a back-button nav bar entirely client-side:

```tsx
<NavigationStack title="Settings">
  <List>
    <NavigationLink title="Wi-Fi" icon={<Wifi />} destination={<WifiScreen />} />
  </List>
</NavigationStack>
```

**macOS window shell** — toolbar + collapsible floating sidebar:

```tsx
<SidebarProvider selected={sel} onSelect={setSel}>
  <Toolbar><SidebarToggle /><ToolbarTitle>Files</ToolbarTitle></Toolbar>
  <div className="flex min-h-0 flex-1">
    <Sidebar><SidebarSection title="Favorites">…</SidebarSection></Sidebar>
    <main>…</main>
  </div>
</SidebarProvider>
```

**Audio / Apple Music UIs** — wrap once in `AudioPlayerProvider`; every music
component (`MiniPlayer`, `NowPlaying`, `TrackList`, `LyricsView`, `QueueList`)
reads the same `useAudioPlayer()` context. Use `load(queue)` to prepare a
queue and `play(queue, i)` only from a user gesture — **never autoplay**.

**Toasts** — render `<Toaster />` once, then call
`toast({ title, description, icon, iconColor })` from anywhere.

## Pitfalls

- Install `theme.json` **first**; it also ships the project's `cn()` helper,
  whose `extendTailwindMerge` config knows the custom type-scale classes.
  Replacing it with a plain `twMerge` silently drops color classes when they
  meet type classes (e.g. `text-body` deleting `text-blue`).
- Don't apply `material-*` utilities to sticky/fixed bars at the very top of
  the viewport — Chrome mis-renders `backdrop-filter: saturate()` at the top
  edge. Use `bg-background/80 backdrop-blur-xl` there instead.
- Components assume `tw-animate-css` is imported (enter/exit + accordion
  keyframes).
- Prefer platform idiom when choosing components: iOS surfaces use `Sheet`
  (bottom) / `ActionSheet` / `Dialog` (alert); macOS surfaces use
  `DropdownMenu`, `ContextMenu`, `Popover`, `Toolbar`, `Menubar`.
