import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://voiceasy.ai";

const now = new Date();

function makeEntry(
  path: string,
  changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] = "monthly",
  priority = 0.7
): MetadataRoute.Sitemap[0] {
  return {
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    makeEntry("/", "monthly", 1.0),
    makeEntry("/pricing", "monthly", 0.8),

    // Docs
    makeEntry("/docs", "weekly", 0.9),
    makeEntry("/docs/guides/call-api", "weekly", 0.85),
    makeEntry("/docs/api/text-to-speech", "monthly", 0.8),
    makeEntry("/docs/api/tone-synthesis", "monthly", 0.8),
    makeEntry("/docs/api/my-tones", "monthly", 0.8),
    makeEntry("/docs/pricing", "monthly", 0.75),

    // Blog
    makeEntry("/blog", "weekly", 0.7),
    makeEntry("/blog/index-tts2", "weekly", 0.75),

    // Use cases
    makeEntry("/use-cases/ai-voice-agents", "monthly", 0.6),
    makeEntry("/use-cases/voice-changer-streaming", "monthly", 0.6),
    makeEntry("/use-cases/studio-tts", "monthly", 0.6),
    makeEntry("/use-cases/training-education", "monthly", 0.6),
    makeEntry("/use-cases/call-center-automation", "monthly", 0.6),
    makeEntry("/use-cases/accessibility-reader", "monthly", 0.6),
  ];
}