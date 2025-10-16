import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voiceasy.ai"),
  title: {
    default: "voiceasy.ai — AI Voice Agents, Voice Changer, TTS",
    template: "%s | voiceasy.ai",
  },
  description:
    "Deploy human-like AI voice agents, real-time voice changing, voice cloning, and studio-quality text to speech.",
  openGraph: {
    title: "voiceasy.ai",
    description:
      "AI voice agents for calls, real-time voice changer, cloning, and enterprise-grade TTS.",
    url: "https://voiceasy.ai",
    siteName: "voiceasy.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "voiceasy.ai",
    description:
      "AI voice agents for calls, real-time voice changer, cloning, and enterprise-grade TTS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> 
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-xl tracking-tight">
              voiceasy.ai
            </Link>
            <nav className="flex items-center gap-4">
              <div className="relative group">
                <Link
                  href="/use-cases/ai-voice-agents"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Use Cases
                </Link>
                <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[420px] rounded-lg border bg-popover text-popover-foreground shadow-lg opacity-0 scale-95 origin-top transition-all duration-150 group-hover:opacity-100 group-hover:scale-100">
                  <div className="grid grid-cols-1 gap-2 p-3">
                    <Link href="/use-cases/ai-voice-agents" className="block rounded-md px-3 py-2 hover:bg-muted">
                      <div className="text-sm font-medium">AI Voice Agents for Support</div>
                      <p className="text-xs text-muted-foreground">Automate inbound support calls with human-like agents.</p>
                    </Link>
                    <Link href="/use-cases/voice-changer-streaming" className="block rounded-md px-3 py-2 hover:bg-muted">
                      <div className="text-sm font-medium">Voice Changer for Streaming</div>
                      <p className="text-xs text-muted-foreground">Change your voice live on streams and video calls.</p>
                    </Link>
                    <Link href="/use-cases/studio-tts" className="block rounded-md px-3 py-2 hover:bg-muted">
                      <div className="text-sm font-medium">Studio TTS for Podcasts & Videos</div>
                      <p className="text-xs text-muted-foreground">Generate narration with studio-quality text-to-speech.</p>
                    </Link>
                    <Link href="/use-cases/training-education" className="block rounded-md px-3 py-2 hover:bg-muted">
                      <div className="text-sm font-medium">Training & Education Narration</div>
                      <p className="text-xs text-muted-foreground">Create lessons and multilingual course audio at scale.</p>
                    </Link>
                    <Link href="/use-cases/call-center-automation" className="block rounded-md px-3 py-2 hover:bg-muted">
                      <div className="text-sm font-medium">Call Center Automation</div>
                      <p className="text-xs text-muted-foreground">Run outbound campaigns with intelligent voice agents.</p>
                    </Link>
                    <Link href="/use-cases/accessibility-reader" className="block rounded-md px-3 py-2 hover:bg-muted">
                      <div className="text-sm font-medium">Accessibility Reading Assistant</div>
                      <p className="text-xs text-muted-foreground">Assistive reading for websites, documents, and apps.</p>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blogs
              </Link>
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                Documentation
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Button asChild>
                <a href="mailto:cming.xu@gmail.com?subject=Start%20voiceasy.ai&body=Hi%20there,%20I’d%20like%20to%20start%20with%20voiceasy.ai.">Start</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="mailto:cming.xu@gmail.com?subject=Contact%20voiceasy.ai&body=Hi%20there,%20I’d%20like%20to%20get%20in%20touch.">Contact</a>
              </Button>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-muted-foreground">
            © {new Date().getFullYear()} voiceasy.ai. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
