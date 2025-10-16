export default function PricingPage() {
  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold">Pricing Plans</h2>
        <p className="text-sm text-muted-foreground">
          Simple, predictable pricing for creators and teams.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Free</h3>
          <p className="mt-1 text-sm text-muted-foreground">$0 / month</p>
          <ul className="mt-3 list-disc pl-5 text-sm">
            <li>Up to 500,000 characters/month</li>
            <li>60 req/min</li>
            <li>Standard voices</li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Pro</h3>
          <p className="mt-1 text-sm text-muted-foreground">$29 / month</p>
          <ul className="mt-3 list-disc pl-5 text-sm">
            <li>10M characters/month</li>
            <li>300 req/min</li>
            <li>Priority rendering</li>
            <li>Advanced tones</li>
          </ul>
        </div>

        <div className="rounded-lg border p-4">
          <h3 className="text-lg font-medium">Enterprise</h3>
          <p className="mt-1 text-sm text-muted-foreground">Custom</p>
          <ul className="mt-3 list-disc pl-5 text-sm">
            <li>Unlimited or pooled usage</li>
            <li>SLA and support</li>
            <li>Custom voices and on-prem options</li>
          </ul>
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-xl font-medium">Overages</h3>
        <p className="text-sm">Per-character overage at $0.50 per 100k characters on Pro.</p>
      </section>
    </article>
  );
}