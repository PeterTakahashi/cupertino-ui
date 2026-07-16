export type Locale = "en" | "ja" | "zh" | "ko" | "de" | "fr" | "ru";

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
  { code: "ko", label: "한국어" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "ru", label: "Русский" },
];

export type Dict = {
  nav: { docs: string; components: string; showcases: string };
  landing: {
    heroTitle1: string;
    heroTitle2: string;
    heroSub: string;
    getStarted: string;
    github: string;
    stats: string; // {n} components placeholder
    installTitle: string;
    installSub: string;
    p1t: string;
    p1b: string;
    p2t: string;
    p2b: string;
    p3t: string;
    p3b: string;
    footer: string;
  };
  sidebar: {
    gettingStarted: string;
    components: string;
    introduction: string;
    installation: string;
    theming: string;
    skills: string;
  };
  intro: {
    title: string;
    lead: string;
    whyTitle: string;
    whyP1: string;
    whyP2: string;
    componentsTitle: string;
  };
  install: {
    title: string;
    lead: string;
    s1: string;
    s1p: string;
    s2: string;
    s2p1: string;
    s2p2: string;
    s3: string;
    s3p: string;
  };
  theming: {
    title: string;
    lead: string;
    colors: string;
    colorsP: string;
    dark: string;
    darkP: string;
    accent: string;
    accentP: string;
    type: string;
    typeP: string;
    materials: string;
    materialsP: string;
  };
  component: {
    installation: string;
    source: string;
    themeNote1: string; // before link
    themeNoteLink: string;
    themeNote2: string; // after link
    swiftui: string;
  };
  gallery: {
    title: string;
    lead: string; // {n} placeholder
  };
  skills: {
    title: string;
    lead: string;
    whatTitle: string;
    whatBody: string;
    learnsTitle: string;
    learns: string[];
    installCliTitle: string;
    installCliBody: string;
    installUserTitle: string;
    installUserBody: string;
    contentsTitle: string;
    contentsBody: string;
  };
  /** Component one-line descriptions keyed by slug; falls back to English. */
  descriptions?: Record<string, string>;
};
