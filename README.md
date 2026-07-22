# cupertino-ui

SwiftUI's design language for the web. React components styled after Apple's
Human Interface Guidelines — the system color palette, the SF type scale,
translucent materials, hairline separators — distributed the shadcn way:
you install the source and own it.

**Docs & live demos:** https://cupertino-ui.baltoon.jp
(in English, 日本語, 中文, 한국어, Deutsch, Français, Русский)

**Not affiliated with Apple Inc.**

## What's inside

- **64 components** (`registry/cupertino-ui/`) — the full shadcn/ui surface
  reimagined for Apple HIG (Button, Switch, Slider, Segmented Control, List,
  Dialog, Sheet, Menus, Table, Command/Spotlight, Toast, …) plus
  SwiftUI-native pieces shadcn doesn't have: NavigationStack with push/pop
  slide transitions, Sidebar with the macOS floating panel + toggle, TabBar,
  ActionSheet, Gauge, Stepper, DatePicker, SearchField, Form — and an Apple
  Music suite (AudioPlayer hook with real playback, AlbumGrid/Header,
  TrackList with animated equalizer bars, MiniPlayer, NowPlaying, LyricsView
  with synced highlighting, QueueList)
- **Theme tokens** (`registry/theme.css`): Apple system colors with
  light/dark values, label hierarchy, fills, materials, HIG type scale with
  SF tracking, radii, shadows — all as Tailwind CSS v4 tokens, plus a `cn()`
  helper taught the custom type scale
- **Docs site** (Next.js App Router, fully static): live previews, install
  commands, and full source for every component; 7-language UI
- **Showcases** (`/showcases`): five small apps built purely from the
  components — Music (responsive iOS Apple Music + macOS Music with real,
  licensed audio), Mail, Reminders, Store, Fitness — each with mobile and
  desktop layouts
- **shadcn registry** (`registry.json` → `public/r/*.json`)

## Using the components

```bash
# 1. one-time: theme tokens (+ cn helper)
npx shadcn@latest add --overwrite https://cupertino-ui.baltoon.jp/r/theme.json
# import cupertino-ui-theme.css in your global stylesheet, after tailwindcss

# 2. any component
npx shadcn@latest add https://cupertino-ui.baltoon.jp/r/button.json
```

```tsx
import { Button } from "@/components/ui/button";

<Button variant="tinted">Continue</Button>;
```

## Development

```bash
npm install
npm run dev            # docs site at localhost:3000
npm run registry:build # rebuild public/r/*.json after editing registry/
npm run build          # registry + production build (fully static)
```

## Agent skill

`skills/cupertino-ui/` contains a [Claude Code skill](https://docs.anthropic.com/claude-code)
that teaches an AI agent how to install and compose these components. Install:

```bash
cp -r skills/cupertino-ui ~/.claude/skills/
```

## Sibling project

[mountainview-ui](https://github.com/PeterTakahashi/mountainview-ui) — the
same idea for Google's Material Design 3: https://mountainview-ui.baltoon.jp

## Credits

Sample audio tracks and cover photography in `/public/samples` are licensed
via Envato Elements; artist names are the original composers.

## License

MIT
