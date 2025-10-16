export default function MyTonesPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">My Tones</h2>
        <p className="text-sm text-muted-foreground">
          Create, list, and manage tones used to style your speech synthesis.
        </p>
      </header>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Endpoints</h3>
        <ul className="list-disc pl-5 text-sm">
          <li><code className="font-mono">GET /v1/tones</code> — List tones</li>
          <li><code className="font-mono">POST /v1/tones</code> — Create tone</li>
          <li><code className="font-mono">GET /v1/tones/:id</code> — Retrieve tone</li>
          <li><code className="font-mono">PATCH /v1/tones/:id</code> — Update tone</li>
          <li><code className="font-mono">DELETE /v1/tones/:id</code> — Delete tone</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Tone Object</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`{
  "id": "promo-energetic",
  "name": "Promo Energetic",
  "style": {
    "emphasis": "high",
    "pauses": "natural",
    "intonation": "uplifting"
  },
  "created_at": "2025-01-01T00:00:00Z"
}`}</pre>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Create Tone</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`curl -X POST https://api.voiceasy.ai/v1/tones \
  -H "Authorization: Bearer $VOICEASY_API_KEY" \
  -H "Content-Type": "application/json" \
  -d '{
    "id": "promo-energetic",
    "name": "Promo Energetic",
    "style": { "emphasis": "high", "pauses": "natural", "intonation": "uplifting" }
  }'`}</pre>
      </section>
    </article>
  );
}