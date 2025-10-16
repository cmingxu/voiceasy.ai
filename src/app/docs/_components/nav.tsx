'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavItem = { label: string; href: string };

const overview: NavItem[] = [
  { label: 'Getting Started', href: '/docs' },
  { label: 'How to Call the API', href: '/docs/guides/call-api' },
];

const api: NavItem[] = [
  { label: 'Text to Speech', href: '/docs/api/text-to-speech' },
  { label: 'Tone Synthesis', href: '/docs/api/tone-synthesis' },
  { label: 'My Tones', href: '/docs/api/my-tones' },
];

const policy: NavItem[] = [
  { label: 'Rate Limits', href: '/docs/rate-limits' },
  { label: 'Pricing Plans', href: '/docs/pricing' },
];

function Section({ title, items }: { title: string; items: NavItem[] }) {
  const pathname = usePathname();
  return (
    <div className="mb-6">
      <div className="mb-2 font-medium text-foreground/80">{title}</div>
      <ul className="space-y-1">
        {items.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={
                  'block rounded px-2 py-1 hover:bg-muted ' +
                  (active ? 'bg-muted font-medium' : '')
                }
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function DocsNav() {
  return (
    <nav className="text-sm">
      <Section title="Overview" items={overview} />
      <Section title="API Reference" items={api} />
      <Section title="Policy" items={policy} />
    </nav>
  );
}