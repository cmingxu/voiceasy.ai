export default function CallApiGuidePage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">How to Call the API</h2>
        <p className="text-sm text-muted-foreground">
          Send authenticated requests to voiceasy.ai endpoints using curl, Node, or Python.
        </p>
      </header>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Authentication</h3>
        <p className="text-sm">Get an API key from your dashboard and include it:</p>
        <pre className="rounded-md border bg-muted p-3 text-xs">{`Authorization: Bearer YOUR_API_KEY`}</pre>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Example: Text to Speech</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="mb-2 text-xs font-medium text-muted-foreground">curl</div>
            <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`curl -X POST https://api.voiceasy.ai/v1/tts \
  -H "Authorization: Bearer $VOICEASY_API_KEY" \
  -H "Content-Type": "application/json" \
  -d '{
    "text": "Welcome to voiceasy.ai",
    "voice_id": "en-male-2",
    "format": "wav",
    "sample_rate": 48000
  }' -o speech.wav`}</pre>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium text-muted-foreground">Node</div>
            <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`const res = await fetch("https://api.voiceasy.ai/v1/tts", {
  method: "POST",
  headers: {
    Authorization: ` + "`Bearer ${process.env.VOICEASY_API_KEY}`" + `,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ text: "Welcome to voiceasy.ai", voice_id: "en-male-2", format: "wav" }),
});
const buf = Buffer.from(await res.arrayBuffer());
await import("node:fs").then(fs => fs.writeFileSync("speech.wav", buf));`}</pre>
          </div>
          <div>
            <div className="mb-2 text-xs font-medium text-muted-foreground">Python</div>
            <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`import requests
res = requests.post(
  "https://api.voiceasy.ai/v1/tts",
  headers={"Authorization": f"Bearer {os.environ['VOICEASY_API_KEY']}", "Content-Type": "application/json"},
  json={"text": "Welcome to voiceasy.ai", "voice_id": "en-male-2", "format": "wav"}
)
open("speech.wav", "wb").write(res.content)`}</pre>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-xl font-medium">Error Handling</h3>
        <p className="text-sm">Standard JSON errors with <code className="font-mono">code</code> and <code className="font-mono">message</code> fields.</p>
        <pre className="rounded-md border bg-muted p-3 text-xs overflow-x-auto">{`{
  "error": { "code": "invalid_request", "message": "voice_id not found" }
}`}</pre>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Next Steps</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>Choose a voice and synthesize speech via <a className="underline" href="/docs/api/text-to-speech">Text to Speech</a>.</li>
          <li>Create tones and generate speech with style via <a className="underline" href="/docs/api/tone-synthesis">Tone Synthesis</a>.</li>
          <li>Manage your tones via <a className="underline" href="/docs/api/my-tones">My Tones</a>.</li>
        </ul>
      </section>
    </article>
  );
}