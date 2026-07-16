import type { Dict } from "../types";

export const en: Dict = {
  nav: { docs: "Docs", components: "Components", showcases: "Showcases" },
  landing: {
    heroTitle1: "SwiftUI's design language.",
    heroTitle2: "Your React codebase.",
    heroSub:
      "Apple HIG–accurate components on Tailwind CSS and Radix. Installed as source with the shadcn CLI — you own every line.",
    getStarted: "Get Started",
    github: "GitHub",
    stats: "{n} components · light & dark · MIT license",
    installTitle: "Install like shadcn/ui",
    installSub:
      "No package to depend on. The CLI copies the component source into your project, styled with Apple's system tokens.",
    p1t: "HIG-accurate tokens",
    p1b: "The real system palette, label hierarchy, SF type scale with exact tracking, hairline separators, and translucent materials.",
    p2t: "Own the code",
    p2b: "Components are files in your repo, not a dependency. Restyle a switch or rebuild a sheet without fighting a library.",
    p3t: "Light and dark, free",
    p3b: "Every token has light and dark values, just like UIKit's dynamic colors. Toggle one class and everything follows.",
    footer:
      "cupertino-ui — an independent open-source project, not affiliated with Apple Inc.",
  },
  sidebar: {
    gettingStarted: "Getting Started",
    components: "Components",
    introduction: "Introduction",
    installation: "Installation",
    theming: "Theming",
    skills: "Skills",
  },
  intro: {
    title: "Introduction",
    lead: "cupertino-ui brings Apple's design language to the web: React components styled after SwiftUI on iOS and macOS, distributed the shadcn way — you install the source and own it.",
    whyTitle: "Why",
    whyP1:
      "SwiftUI apps look and feel right because they inherit decades of refinement: the SF type scale, the system color palette with its label hierarchy, translucent materials, hairline separators, and controls with exact, familiar proportions. cupertino-ui reproduces those decisions as Tailwind CSS tokens and Radix-based components.",
    whyP2:
      "Like shadcn/ui, this is not a package you depend on. Each component is a file the CLI copies into your project. Change anything.",
    componentsTitle: "Components",
  },
  install: {
    title: "Installation",
    lead: "Works in any React project with Tailwind CSS v4. Next.js shown here.",
    s1: "1. Set up shadcn",
    s1p: "If your project doesn't have a components.json yet:",
    s2: "2. Add the theme tokens",
    s2p1: "The components read Apple's system colors, type scale, and materials from CSS tokens. Install them once:",
    s2p2: "This places cupertino-ui-theme.css in your project root. Import it in your global stylesheet, after Tailwind:",
    s3: "3. Add components",
    s3p: "The source lands in components/ui/. It's yours now — edit it freely.",
  },
  theming: {
    title: "Theming",
    lead: "Every token is a CSS variable, so restyling is an override away.",
    colors: "System colors",
    colorsP:
      "The full HIG palette, with separate light and dark values. Use them as Tailwind colors: bg-blue, text-secondary-label, bg-fill-tertiary.",
    dark: "Dark mode",
    darkP:
      "Toggle the dark class on <html>. All tokens swap to their dark values — components need no changes.",
    accent: "Changing the accent",
    accentP:
      "Components tint with --system-blue by default. Point it at another system color (or your brand color) to re-tint everything:",
    type: "Type scale",
    typeP:
      "The SF text styles ship as utilities — each with the HIG size, line height, and SF tracking.",
    materials: "Materials",
    materialsP:
      "Translucent blur layers matching SwiftUI's materials: material-ultrathin, material-thin, material-regular, material-thick.",
  },
  component: {
    installation: "Installation",
    source: "Source",
    themeNote1: "Requires the theme tokens — see ",
    themeNoteLink: "Installation",
    themeNote2: " if this is your first component.",
    swiftui: "SwiftUI",
  },
  gallery: {
    title: "Components",
    lead: "All {n} components, live. Everything below is interactive — click a title for install instructions and source.",
  },
  skills: {
    "title": "Skills",
    "lead": "Teach your AI agent to build with cupertino-ui.",
    "whatTitle": "What is a skill?",
    "whatBody": "A skill is a set of instructions an AI coding agent (like Claude Code) loads when it works on a matching task. The cupertino-ui skill teaches the agent how to set up the theme, which tokens and conventions make UIs feel like Apple software, how to compose the components, and which pitfalls to avoid — so you can say “make an Apple-style settings screen” and get idiomatic results.",
    "learnsTitle": "What the agent learns",
    "learns": [
      "Setup order: shadcn init → theme tokens → components, and why the theme must come first",
      "The semantic tokens: label hierarchy, fills, grouped backgrounds, SF type scale, materials",
      "HIG conventions: hairline separators, cursor-default controls, press feedback, dark mode",
      "Composition patterns: settings lists, NavigationStack push flows, macOS window shells, audio playback",
      "Known pitfalls, like the tailwind-merge class-collision issue and the top-edge backdrop-filter bug"
    ],
    "installCliTitle": "Install into a project (recommended)",
    "installCliBody": "Installs the skill files into .claude/skills/cupertino-ui/ in your repo, so every agent session in the project picks it up:",
    "installUserTitle": "Install for your user account",
    "installUserBody": "To make the skill available in every project, copy it into your home directory instead:",
    "contentsTitle": "What's inside",
    "contentsBody": "Two files: SKILL.md (setup, tokens, conventions, patterns, pitfalls) and references/components.md (the full catalog of all components with exports and links). The full source is below."
  },
};
