import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Index TTS 2 — Faster, Tonal, Stream‑Ready TTS",
  description:
    "Announcing Index TTS 2: multi‑tone control, easy voice cloning, real‑time streaming, and studio‑quality output.",
  keywords: [
    "IndexTTS2",
    "Zero-shot TTS",
    "Duration control",
    "Emotion TTS",
    "Voice Cloning",
    "Streaming TTS"
  ],
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
  alternates: {
    canonical: "/blog/index-tts2",
  },
};

export default function IndexTTS2Post() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://voiceasy.ai";
  const canonicalUrl = `${baseUrl}/blog/index-tts2`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Index TTS 2 — Faster, Tonal, Stream‑Ready TTS",
    description:
      "Announcing Index TTS 2: multi‑tone control, easy voice cloning, real‑time streaming, and studio‑quality output.",
    image: [`${baseUrl}/index-tts2.jpeg`],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    author: {
      "@type": "Organization",
      name: "voiceasy.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "voiceasy.ai",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
  };
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <Script id="index-tts2-ld-json" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
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
  -H "Content-Type: application/json" \
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

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Background and team</h2>
        <p className="text-sm text-muted-foreground">
          IndexTTS2 is developed by the <span className="font-medium">Index Team</span>, with public materials and releases hosted on GitHub.
          The project highlights controllable, expressive, zero‑shot TTS, and is associated with the bilibili indextts initiative. Official updates and releases are published via the core repository.
        </p>
        <div className="text-sm">
          Sources: <a className="underline" href="https://github.com/index-tts/index-tts" target="_blank" rel="noopener noreferrer">index-tts/index-tts</a>
          {" "}• <a className="underline" href="https://index-tts.github.io/index-tts2.github.io/" target="_blank" rel="noopener noreferrer">IndexTTS2 demo page</a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Technical highlights</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>
            <span className="font-medium">Autoregressive duration control</span>: two generation modes — precise token‑count duration and natural autoregressive duration — to enable audio‑visual sync and flexible prosody.
            <span className="ml-1">[</span><a className="underline" href="https://github.com/index-tts/index-tts" target="_blank" rel="noopener noreferrer">repo</a><span>]</span>
          </li>
          <li>
            <span className="font-medium">Emotion/timbre disentanglement</span>: independent control over timbre and emotion (style prompt), improving emotional fidelity without degrading pronunciation.
            <span className="ml-1">[</span><a className="underline" href="https://index-tts.github.io/index-tts2.github.io/" target="_blank" rel="noopener noreferrer">demo</a><span>]</span>
          </li>
          <li>
            <span className="font-medium">GPT latents & training strategy</span>: GPT latent representations and a three‑stage training paradigm to stabilize speech in highly expressive deliveries.
            <span className="ml-1">[</span><a className="underline" href="https://github.com/index-tts/index-tts" target="_blank" rel="noopener noreferrer">repo</a><span>]</span>
          </li>
          <li>
            <span className="font-medium">Soft instruction via text</span>: fine‑tuned Qwen3 enables natural‑language control of emotion and delivery without complex SSML.
            <span className="ml-1">[</span><a className="underline" href="https://github.com/index-tts/index-tts" target="_blank" rel="noopener noreferrer">repo</a><span>]</span>
          </li>
          <li>
            <span className="font-medium">Ecosystem integrations</span>: community nodes and hosted endpoints, including ComfyUI workflows and serverless inference on fal.ai.
            <span className="ml-1">[</span><a className="underline" href="https://comfy.icu/node/IndexTTS2EmotionTextNode" target="_blank" rel="noopener noreferrer">ComfyUI</a> • <a className="underline" href="https://fal.ai/models/fal-ai/index-tts-2/text-to-speech" target="_blank" rel="noopener noreferrer">fal.ai</a><span>]</span>
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Architecture at a glance</h2>
        <p className="text-sm text-muted-foreground">High‑level overview of IndexTTS2 components and data flow.</p>
        <div className="rounded-lg overflow-hidden border bg-muted/30">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src="/index-tts2-architecture.png"
              alt="Index TTS 2 architecture diagram"
              fill
              sizes="(min-width: 768px) 700px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">Diagram is illustrative; refer to official docs for implementation specifics.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">How it compares</h2>
        <p className="text-sm text-muted-foreground">
          Compared to typical zero‑shot or cloned TTS systems, IndexTTS2 emphasizes precise duration control and disentangled emotion/timbre, while maintaining naturalness. Many commercial systems focus on voice cloning and SSML‑style controls; open‑source systems often excel in zero‑shot timbre but lack easy duration control. IndexTTS2’s design targets dubbing, interactive tooling, and high‑expressivity use cases.
        </p>
        <ul className="list-disc pl-5 text-sm">
          <li><span className="font-medium">Precise duration</span>: explicit token control for sync‑critical scenarios.</li>
          <li><span className="font-medium">Expressive emotion</span>: natural‑language prompts vs. SSML handcrafting.</li>
          <li><span className="font-medium">Zero‑shot timbre</span>: reconstructs target timbre with separate style prompts.</li>
          <li><span className="font-medium">Streaming potential</span>: designed for low‑latency and real‑time pipelines.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">TTS trends to watch</h2>
        <ul className="list-disc pl-5 text-sm">
          <li>Duration‑aware autoregressive TTS for dubbing and sync‑sensitive media.</li>
          <li>Text‑driven emotion control replacing bespoke SSML.
          </li>
          <li>Multi‑modal prosody prompts (audio + text) for refined delivery.</li>
          <li>High‑quality streaming for assistants, creative tools, and live content.</li>
          <li>On‑device and efficient inference with modern vocoders.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold">Roadmap and future plans</h2>
        <p className="text-sm text-muted-foreground">
          Public materials indicate ongoing releases and planned enablement of certain controls. Expect continued improvements across duration control, stability under expressive styles, and developer tooling.
        </p>
        <ul className="list-disc pl-5 text-sm">
          <li>Enable full duration control features across hosted endpoints.</li>
          <li>Broaden language coverage and style presets.</li>
          <li>Iterate training data and latency optimizations for streaming.</li>
          <li>Expand ecosystem integrations and SDKs.
          </li>
        </ul>
        <div className="text-sm">
          Source: <a className="underline" href="https://github.com/index-tts/index-tts" target="_blank" rel="noopener noreferrer">index-tts/index-tts</a>
        </div>
      </section>

      <footer className="pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          Ready to build? Check the <Link className="underline" href="/docs/api/text-to-speech">Text to Speech API</Link> and the
          <Link className="underline ml-1" href="/docs/guides/call-api">API guide</Link> to get started.
        </p>
        <div className="mt-2 text-xs text-muted-foreground">
          References: <a className="underline" href="https://github.com/index-tts/index-tts" target="_blank" rel="noopener noreferrer">GitHub</a> •
          <a className="underline ml-1" href="https://index-tts.github.io/index-tts2.github.io/" target="_blank" rel="noopener noreferrer">Demo</a> •
          <a className="underline ml-1" href="https://comfy.icu/node/IndexTTS2EmotionTextNode" target="_blank" rel="noopener noreferrer">ComfyUI Node</a> •
          <a className="underline ml-1" href="https://fal.ai/models/fal-ai/index-tts-2/text-to-speech" target="_blank" rel="noopener noreferrer">fal.ai Model</a>
        </div>
      </footer>
    </article>
  );
}