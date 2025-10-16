export default function TextToSpeechPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Text to Speech</h2>
        <p className="text-sm text-muted-foreground">
          Convert plain text into natural-sounding speech in various formats.
        </p>
      </header>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Endpoint</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs">{`POST https://api.voiceasy.ai/v1/tts`}</pre>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Request Body</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`{
  "text": "Hello, world",
  "voice_id": "en-female-1",
  "language": "en-US",
  "format": "mp3",
  "sample_rate": 44100,
  "tone_id": "friendly",
  "speed": 1.0,
  "pitch": 0
}`}</pre>
        <ul className="list-disc pl-5 text-sm">
          <li><code className="font-mono">voice_id</code>: choose a base voice.</li>
          <li><code className="font-mono">tone_id</code>: optional tone/style to apply.</li>
          <li><code className="font-mono">format</code>: <code className="font-mono">mp3</code> | <code className="font-mono">wav</code> | <code className="font-mono">ogg</code>.</li>
          <li><code className="font-mono">sample_rate</code>: e.g. 44100 or 48000.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Response</h3>
        <p className="text-sm">Binary audio stream in requested format.</p>
        <pre className="rounded-md border bg-muted p-3 text-xs">{`Content-Type: audio/mpeg`}</pre>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Example</h3>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`curl -X POST https://api.voiceasy.ai/v1/tts \
  -H "Authorization: Bearer $VOICEASY_API_KEY" \
  -H "Content-Type": "application/json" \
  -d '{ "text": "Voiceasy demo", "voice_id": "en-female-1", "format": "mp3" }' \
  -o speech.mp3`}</pre>
      </section>
    </article>
  );
}