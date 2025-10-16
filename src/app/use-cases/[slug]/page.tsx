interface Params { slug: string }

const registry: Record<string, { title: string; description: string }> = {
  "ai-voice-agents": {
    title: "AI Voice Agents for Support",
    description: "Automate inbound support calls with human-like agents that resolve issues and escalate when needed.",
  },
  "voice-changer-streaming": {
    title: "Voice Changer for Streaming",
    description: "Change your voice in real-time on streams and calls with low latency and high quality.",
  },
  "studio-tts": {
    title: "Studio TTS for Podcasts & Videos",
    description: "Generate narration with studio-quality text-to-speech for podcasts, videos, and shorts.",
  },
  "training-education": {
    title: "Training & Education Narration",
    description: "Create lessons and multilingual course audio at scale with tone control and customization.",
  },
  "call-center-automation": {
    title: "Call Center Automation",
    description: "Run outbound campaigns and handle inbound queries with intelligent voice agents and analytics.",
  },
  "accessibility-reader": {
    title: "Accessibility Reading Assistant",
    description: "Provide assistive reading of websites, documents, and applications for improved accessibility.",
  },
};

export default function UseCasePage({ params }: { params: Params }) {
  const meta = registry[params.slug];
  const title = meta?.title ?? "Use Case";
  const description = meta?.description ?? "This use case is coming soon.";
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-4">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-6 text-sm text-muted-foreground">
        <p>
          Want to implement this? Check out the <a className="underline" href="/docs">documentation</a> or
          <a className="underline ml-1" href="mailto:cming.xu@gmail.com?subject=voiceasy.ai%20Use%20Case">contact us</a>.
        </p>
      </div>
    </div>
  );
}