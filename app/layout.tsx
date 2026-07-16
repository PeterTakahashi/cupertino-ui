import type { Metadata } from "next";
import "./globals.css";

import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    default: "cupertino-ui — SwiftUI-flavored components for the web",
    template: "%s — cupertino-ui",
  },
  description:
    "Open-source React components with Apple's design language. Built on Tailwind CSS and Radix. Install with the shadcn CLI, then own the code.",
};

const themeInit = `
try {
  const stored = localStorage.getItem("theme");
  const dark = stored ? stored === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  if (dark) document.documentElement.classList.add("dark");
} catch {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
