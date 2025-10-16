import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Analytics } from "@vercel/analytics/next"
import Logo from "@/components/logo";
import { PhoneCall, Mic, AudioLines, GraduationCap, Megaphone, Accessibility } from "lucide-react";
import Footer from "@/components/footer";


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
    default: "voiceasy.ai — AI Voice Generator, Multiple Voice Tones, Easy Voice Cloning",
    template: "%s | voiceasy.ai",
  },
  description:
    "Generate lifelike voices with multiple tones and easy voice cloning. Real-time streaming, studio-quality TTS, and developer-friendly APIs.",
  keywords: [
    "AI Voice Generator",
    "Voice Generator",
    "Voice Cloning",
    "Easy Voice Cloning",
    "Multiple Voice Tones",
    "Tone Synthesis",
    "Text to Speech",
    "TTS",
    "Real-time Voice",
    "Streaming Voice",
    "AI Voices",
    "Voice AI"
  ],
  openGraph: {
    title: "voiceasy.ai — AI Voice Generator & Voice Cloning",
    description:
      "Generate lifelike voices with multiple tones, easy cloning, real-time streaming, and studio-quality TTS.",
    url: "https://voiceasy.ai",
    siteName: "voiceasy.ai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "voiceasy.ai — AI Voice Generator & Voice Cloning",
    description:
      "Generate lifelike voices with multiple tones, easy cloning, real-time streaming, and studio-quality TTS.",
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
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-6 w-6" />
              <span className="font-semibold text-xl tracking-tight">voiceasy.ai</span>
            </Link>
            <nav className="flex items-center gap-4">
              <div className="relative group">
                <Link
                  href="/use-cases/ai-voice-agents"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Use Cases
                </Link>
                <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-[480px] rounded-xl border bg-popover text-popover-foreground shadow-xl opacity-0 scale-95 origin-top transition-all duration-150 group-hover:opacity-100 group-hover:scale-100">
                  <div className="relative">
                    <div className="pointer-events-none absolute -inset-2 rounded-2xl bg-gradient-to-b from-foreground/5 to-transparent blur-xl" />
                    <div className="relative border-b px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground">Explore Use Cases</div>
                    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 p-3">
                      <Link href="/use-cases/ai-voice-agents" className="flex items-start gap-3 rounded-md px-3 py-2 transition hover:bg-muted hover:shadow-sm">
                        <PhoneCall className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">AI Voice Agents for Support</div>
                          <p className="text-xs text-muted-foreground">Automate inbound support calls with human-like agents.</p>
                        </div>
                      </Link>
                      <Link href="/use-cases/voice-changer-streaming" className="flex items-start gap-3 rounded-md px-3 py-2 transition hover:bg-muted hover:shadow-sm">
                        <Mic className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Voice Generator for Streaming</div>
                          <p className="text-xs text-muted-foreground">Generate or transform voices live on streams and video calls.</p>
                        </div>
                      </Link>
                      <Link href="/use-cases/studio-tts" className="flex items-start gap-3 rounded-md px-3 py-2 transition hover:bg-muted hover:shadow-sm">
                        <AudioLines className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Studio TTS for Podcasts & Videos</div>
                          <p className="text-xs text-muted-foreground">Generate narration with studio-quality text-to-speech.</p>
                        </div>
                      </Link>
                      <Link href="/use-cases/training-education" className="flex items-start gap-3 rounded-md px-3 py-2 transition hover:bg-muted hover:shadow-sm">
                        <GraduationCap className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Training & Education Narration</div>
                          <p className="text-xs text-muted-foreground">Create lessons and multilingual course audio at scale.</p>
                        </div>
                      </Link>
                      <Link href="/use-cases/call-center-automation" className="flex items-start gap-3 rounded-md px-3 py-2 transition hover:bg-muted hover:shadow-sm">
                        <Megaphone className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Call Center Automation</div>
                          <p className="text-xs text-muted-foreground">Run outbound campaigns with intelligent voice agents.</p>
                        </div>
                      </Link>
                      <Link href="/use-cases/accessibility-reader" className="flex items-start gap-3 rounded-md px-3 py-2 transition hover:bg-muted hover:shadow-sm">
                        <Accessibility className="h-4 w-4 mt-0.5 text-muted-foreground" />
                        <div>
                          <div className="text-sm font-medium">Accessibility Reading Assistant</div>
                          <p className="text-xs text-muted-foreground">Assistive reading for websites, documents, and apps.</p>
                        </div>
                      </Link>
                    </div>
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
        <Footer />
        <Analytics/>
      </body>
    </html>
  );
}
