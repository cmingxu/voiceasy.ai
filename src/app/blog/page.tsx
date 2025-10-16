import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-6">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Blogs</h1>
      <p className="text-muted-foreground">
        Insights and product updates on voice generation.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Link
          href="/blog/index-tts2"
          className="group block rounded-lg border overflow-hidden transition hover:shadow-md"
        >
          <div className="aspect-[16/9] w-full overflow-hidden bg-muted">
            <Image
              src="/index-tts2.jpeg"
              alt="Index TTS 2 cover"
              width={800}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-4 space-y-1">
            <div className="text-lg font-semibold group-hover:underline">
              Index TTS 2: Tone‑Controlled, Stream‑Ready Text‑to‑Speech
            </div>
            <p className="text-sm text-muted-foreground">
              Announcing multi‑tone control, easy voice cloning, and real‑time streaming.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}