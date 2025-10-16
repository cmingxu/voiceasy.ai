export default function RateLimitsPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Rate Limits</h2>
        <p className="text-sm text-muted-foreground">
          Fair usage limits to keep the platform responsive for everyone.
        </p>
      </header>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Default Limits</h3>
        <ul className="list-disc pl-5 text-sm">
          <li>Free: 60 requests / minute, 5 concurrent jobs</li>
          <li>Pro: 300 requests / minute, 20 concurrent jobs</li>
          <li>Enterprise: negotiable limits</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Bursting & Backoff</h3>
        <p className="text-sm">We allow short bursts; sustained excess returns 429 with retry hints.</p>
        <pre className="rounded-md border bg-muted p-3 text-xs">{`HTTP/1.1 429 Too Many Requests
Retry-After: 3`}</pre>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Monitoring</h3>
        <p className="text-sm">Track usage in your dashboard. Contact us for temporary increases.</p>
      </section>
    </article>
  );
}