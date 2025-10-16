import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Pricing — voiceasy.ai",
  description: "Simple, transparent pricing for AI voice generation, multiple tones, and easy voice cloning.",
  keywords: [
    "Voice Generator Pricing",
    "AI Voice Pricing",
    "Voice Cloning Pricing",
    "TTS Pricing",
    "Tone Synthesis Pricing"
  ],
};

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Pricing</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Free Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Free</span>
              <Badge variant="outline">$0 / mo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Up to 500k characters / month</li>
              <li>60 requests / minute</li>
              <li>Standard voices</li>
              <li>Basic tones</li>
              <li>Community support</li>
            </ul>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button asChild>
              <Link href="mailto:cming.xu@gmail.com?subject=voiceasy.ai%20Free%20Plan">Choose Free</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Starter Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Starter</span>
              <Badge variant="outline">$9 / mo</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>2M characters / month</li>
              <li>120 requests / minute</li>
              <li>All standard voices</li>
              <li>Up to 5 custom tones</li>
              <li>Batch synthesis (up to 50 jobs)</li>
            </ul>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button asChild>
              <Link href="mailto:cming.xu@gmail.com?subject=voiceasy.ai%20Starter%20Plan">Choose Starter</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="ring-1 ring-ring/20">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Pro</span>
              <div className="flex items-center gap-2">
                <Badge>Most Popular</Badge>
                <Badge variant="outline">$29 / mo</Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>10M characters / month</li>
              <li>300 requests / minute</li>
              <li>Priority rendering</li>
              <li>Advanced tone synthesis</li>
              <li>API keys and usage analytics</li>
            </ul>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button asChild>
              <Link href="mailto:cming.xu@gmail.com?subject=voiceasy.ai%20Pro%20Plan">Choose Pro</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Enterprise</span>
              <Badge variant="outline">Custom</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>Unlimited or pooled usage</li>
              <li>Dedicated support and SLA</li>
              <li>SSO, RBAC, and audit logs</li>
              <li>Custom voices and on-prem options</li>
              <li>Compliance: SOC2/ISO style</li>
            </ul>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button asChild>
              <Link href="mailto:cming.xu@gmail.com?subject=voiceasy.ai%20Enterprise%20Plan">Contact Sales</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}