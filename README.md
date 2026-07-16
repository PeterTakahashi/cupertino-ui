# apple-ui

SwiftUI's design language for the web. React components styled after Apple's
Human Interface Guidelines — the system color palette, the SF type scale,
translucent materials, hairline separators — distributed the shadcn way:
you install the source and own it.

**Not affiliated with Apple Inc.**

## What's inside

- **24 components** (`registry/apple-ui/`): Button, Switch, Slider, Segmented
  Control, Checkbox, Radio Group, Input, Textarea, Select, Badge, Card, List
  (iOS Settings style), Dialog (iOS alert), Sheet, Dropdown Menu, Popover,
  Tooltip, Progress, Spinner, Separator, Avatar, Skeleton, Label, Stepper
- **Theme tokens** (`registry/theme.css`): Apple system colors with light/dark
  values, label hierarchy, fills, materials, HIG type scale with SF tracking,
  radii, and shadows — all as Tailwind CSS v4 tokens
- **Docs site** (Next.js App Router): live previews, install commands, and
  full source for every component
- **shadcn registry** (`registry.json` → `public/r/*.json`): components are
  installable with the shadcn CLI

## Using the components

```bash
# 1. one-time: theme tokens
npx shadcn@latest add https://<your-deployment>/r/theme.json
# import apple-ui-theme.css in your global stylesheet, after tailwindcss

# 2. any component
npx shadcn@latest add https://<your-deployment>/r/button.json
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
npm run build          # production build (fully static)
```

## Deploying

The site is a static Next.js app — import the repo in
[Vercel](https://vercel.com/new) and deploy with defaults. Set
`NEXT_PUBLIC_SITE_URL` to the production URL so the docs render correct
`npx shadcn add` commands.

## License

MIT
