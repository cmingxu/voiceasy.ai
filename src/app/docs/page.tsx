export default function DocsIndexPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <p className="text-sm text-muted-foreground">
          Welcome to the voiceasy.ai docs. Build with AI voice generation, multiple voice tones, easy voice cloning, and TTS APIs.
        </p>
      </header>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Quick Links</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>
            Read the guide: <a className="underline" href="/docs/guides/call-api">How to Call the API</a>
          </li>
          <li>
            API reference: <a className="underline" href="/docs/api/text-to-speech">Text to Speech</a>
          </li>
          <li>
            API reference: <a className="underline" href="/docs/api/tone-synthesis">Tone Synthesis</a>
          </li>
          <li>
            Manage tones: <a className="underline" href="/docs/api/my-tones">My Tones</a>
          </li>
          <li>
            Pricing details: <a className="underline" href="/docs/pricing">Pricing</a>
          </li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Next Steps</h3>
        <p className="text-sm">
          Grab your API key, check the examples, and start building.
        </p>
      </section>
    </article>
  );
}