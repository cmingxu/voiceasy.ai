export default function ToneSynthesisPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Tone Synthesis</h2>
        <p className="text-sm text-muted-foreground">
          Apply styles and tones to control prosody, emphasis, and delivery.
        </p>
      </header>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Endpoint</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs">{`POST https://api.voiceasy.ai/v1/tone/synthesize`}</pre>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Request Body</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`{
  "text": "Launch announcement",
  "voice_id": "en-male-2",
  "tone_id": "promo-energetic",
  "style": {
    "emphasis": "high",
    "pauses": "natural",
    "intonation": "uplifting"
  },
  "format": "mp3"
}`}</pre>
        <ul className="list-disc pl-5 text-sm">
          <li><code className="font-mono">tone_id</code>: a reusable tone/config that influences delivery.</li>
          <li><code className="font-mono">style</code>: inline overrides for emphasis, pauses, intonation.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Response</h3>
        <p className="text-sm">Binary audio stream in requested format.</p>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Example</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`curl -X POST https://api.voiceasy.ai/v1/tone/synthesize \
  -H "Authorization: Bearer $VOICEASY_API_KEY" \
  -H "Content-Type": "application/json" \
  -d '{
    "text": "Launch announcement",
    "voice_id": "en-male-2",
    "tone_id": "promo-energetic",
    "format": "mp3"
  }' -o promo.mp3`}</pre>
      </section>
    </article>
  );
}