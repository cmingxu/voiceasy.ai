const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://voiceasy.ai";

function escapeHtml(str: string): string {
  return str.replace(/[<>&'\"]/g, (c) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  }[c] as string));
}

type Post = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  image?: string;
};

const posts: Post[] = [
  {
    slug: "index-tts2",
    title: "Index TTS 2 — Faster, Tonal, Stream‑Ready TTS",
    description:
      "Announcing Index TTS 2: multi‑tone control, easy voice cloning, real‑time streaming, and studio‑quality output.",
    pubDate: new Date().toUTCString(),
    image: "/index-tts2.jpeg",
  },
];

function generateXml(): string {
  const items = posts
    .map((p) => `
    <item>
      <title>${escapeHtml(p.title)}</title>
      <link>${baseUrl}/blog/${p.slug}</link>
      <guid>${baseUrl}/blog/${p.slug}</guid>
      <pubDate>${p.pubDate}</pubDate>
      <description><![CDATA[${p.description}]]></description>
      ${p.image ? `<enclosure url="${baseUrl}${p.image}" type="image/jpeg" />` : ""}
    </item>`)
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>voiceasy.ai Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Updates on AI voice, TTS, cloning, and streaming.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;
}

export async function GET() {
  const xml = generateXml();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=1800, stale-while-revalidate",
    },
  });
}