import fs from "node:fs";
import path from "node:path";

import { SkillsContent } from "@/components/site/skills-content";

export const metadata = {
  title: "Skills",
  description: "Teach your AI agent to build with cupertino-ui.",
};

export default function SkillsPage() {
  const read = (...p: string[]) =>
    fs.readFileSync(path.join(process.cwd(), ...p), "utf8").trim();

  return (
    <SkillsContent
      skillSource={read("skills", "cupertino-ui", "SKILL.md")}
      catalogSource={read("skills", "cupertino-ui", "references", "components.md")}
    />
  );
}
