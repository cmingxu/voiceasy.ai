import type { Metadata } from "next";
import Link from "next/link";
import { DocsNav } from "./_components/nav";

export const metadata: Metadata = {
  title: "Documentation — voiceasy.ai",
  description:
    "Build with voiceasy.ai APIs for AI voice generation, multiple voice tones, easy voice cloning, and Text-to-Speech.",
  keywords: [
    "Voice Generator Docs",
    "Voice Cloning Docs",
    "Multiple Voice Tones",
    "Tone Synthesis",
    "Text to Speech",
    "Developer API"
  ],
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Documentation</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Guides and API reference for voiceasy.ai: text-to-speech, tone synthesis,
          and managing custom tones.
        </p>
      </div>

      <div className="md:grid md:grid-cols-[220px_1fr] md:gap-8">
        <aside className="mb-8 md:mb-0">
          <DocsNav />
        </aside>

        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}