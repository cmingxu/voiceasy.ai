import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Index TTS 2 — Faster, Tonal, Stream‑Ready TTS",
  description:
    "Announcing Index TTS 2: multi‑tone control, easy voice cloning, real‑time streaming, and studio‑quality output.",
  openGraph: {
    title: "Index TTS 2",
    description:
      "Multi‑tone control, easy voice cloning, real‑time streaming, and studio‑quality TTS.",
    images: [{ url: "/index-tts2.jpeg", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Index TTS 2",
    description:
      "Multi‑tone control, easy voice cloning, real‑time streaming, and studio‑quality TTS.",
    images: ["/index-tts2.jpeg"],
  },
};

export default function IndexTTS2Post() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Index TTS 2: Tone‑Controlled, Stream‑Ready Text‑to‑Speech</h1>
        <p className="text-muted-foreground">
          Today we’re introducing Index TTS 2 — a major upgrade to our text‑to‑speech engine that brings multiple voice tones, easy voice cloning, and
          real‑time streaming to developers and creators.
        </p>
        <div className="rounded-lg overflow-hidden border bg-muted/30">
          <Image
            src="/index-tts2.jpeg"
            alt="Index TTS 2 cover"
            width={1200}
            height={630}
            priority
            className="w-full h-auto object-cover"
          />
        </div>
      </header>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">What’s new</h2>
        <ul className="list-disc pl-5 text-sm">
          <li><span className="font-medium">Multiple voice tones</span> via Tone Synthesis for precise delivery and style.</li>
          <li><span className="font-medium">Easy voice cloning</span> from short samples with simple controls.</li>
          <li><span className="font-medium">Real‑time streaming</span> with low latency for interactive apps.</li>
          <li><span className="font-medium">Studio‑quality output</span> with robust noise removal and consistency.</li>
          <li><span className="font-medium">Developer‑friendly APIs</span> with straightforward JSON requests.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Quick start</h2>
        <p className="text-sm text-muted-foreground">Generate speech with a voice and optional tone:</p>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`curl -X POST https://api.voiceasy.ai/v1/tts \
  -H "Authorization: Bearer $VOICEASY_API_KEY" \
  -H "Content-Type": "application/json" \
  -d '{
    "text": "Introducing Index TTS 2",
    "voice_id": "en-female-1",
    "tone_id": "promo-energetic",
    "format": "mp3",
    "sample_rate": 44100
  }' -o index-tts2.mp3`}</pre>
        <p className="text-sm text-muted-foreground">Prefer a calmer delivery? Switch the <code className="font-mono">tone_id</code> to <code className="font-mono">friendly</code> or your own custom tone.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Tone control and cloning</h2>
        <p className="text-sm text-muted-foreground">
          Use Tone Synthesis to control emphasis, pauses, and intonation, then clone voices from short samples to build brand‑consistent audio across products.
        </p>
        <div className="text-sm">
          Learn more: <Link className="underline" href="/docs/api/tone-synthesis">Tone Synthesis</Link> ·
          <Link className="underline ml-1" href="/docs/api/my-tones">My Tones</Link>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Streaming for interactive experiences</h2>
        <p className="text-sm text-muted-foreground">
          Index TTS 2 is designed for real‑time scenarios — from live assistance to creative tools — with low‑latency streaming and consistent audio quality.
        </p>
      </section>

      <footer className="pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          Ready to build? Check the <Link className="underline" href="/docs/api/text-to-speech">Text to Speech API</Link> and the
          <Link className="underline ml-1" href="/docs/guides/call-api">API guide</Link> to get started.
        </p>
      </footer>
    </article>
  );
}