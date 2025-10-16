import Link from "next/link";
import Logo from "@/components/logo";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-3">
              <Logo className="h-8 w-8" />
              <span className="text-2xl font-semibold tracking-tight">voiceasy.ai</span>
            </Link>
            <div className="flex items-center gap-3 text-muted-foreground">
              <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
            <div>
              <div className="mb-3 font-medium">About</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Who We Are</a></li>
                <li><a href="#" className="hover:text-foreground">Branding Guidelines</a></li>
                <li><a href="#" className="hover:text-foreground">Supported Apps</a></li>
                <li><a href="mailto:cming.xu@gmail.com?subject=voiceasy.ai%20Support" className="hover:text-foreground">Support</a></li>
                <li><Link href="/blog" className="hover:text-foreground">Blogs</Link></li>
              </ul>
            </div>

            <div>
              <div className="mb-3 font-medium">Solutions</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/use-cases/ai-voice-agents" className="hover:text-foreground">Use Cases</Link></li>
                <li><Link href="/use-cases/ai-voice-agents" className="hover:text-foreground">Conversational AI</Link></li>
                <li><Link href="/docs" className="hover:text-foreground">API</Link></li>
                <li><a href="#" className="hover:text-foreground">Publishing</a></li>
                <li><Link href="/use-cases/studio-tts" className="hover:text-foreground">Media &amp; Entertainment</Link></li>
              </ul>
            </div>

            <div>
              <div className="mb-3 font-medium">Info</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/docs" className="hover:text-foreground">Resource Hub</Link></li>
                <li><Link href="/docs/guides/call-api" className="hover:text-foreground">FAQ</Link></li>
                <li><a href="#" className="hover:text-foreground">Is it safe?</a></li>
                <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground">Refund Policy</a></li>
                <li><a href="#" className="hover:text-foreground">DMCA</a></li>
              </ul>
            </div>

            <div>
              <div className="mb-3 font-medium">Online Audio Tools</div>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/docs/api/text-to-speech" className="hover:text-foreground">Text to Speech</Link></li>
                <li><Link href="/use-cases/voice-changer-streaming" className="hover:text-foreground">Online Voice Generator</Link></li>
                <li><a href="#" className="hover:text-foreground">Online Vocal Remover</a></li>
                <li><a href="#" className="hover:text-foreground">Online Echo Remover</a></li>
                <li><a href="#" className="hover:text-foreground">Online Audio Enhancer</a></li>
                <li><a href="#" className="hover:text-foreground">AI Stem Splitter</a></li>
                <li><a href="#" className="hover:text-foreground">Song &amp; Key BPM Finder</a></li>
                <li><a href="#" className="hover:text-foreground">Online Reverb Remover</a></li>
                <li><a href="#" className="hover:text-foreground">Online Audio Converter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} voiceasy.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}