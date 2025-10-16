"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import AuroraBackground from "@/components/aurora-background";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 space-y-24">
      {/* Hero */}
      <section className="relative text-center space-y-6">
        <AuroraBackground />
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Badge variant="secondary">voiceasy.ai</Badge>
          <Badge>AI Voice Platform</Badge>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          Human‑like AI Voice Agents and Voice Changer
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
          Automate calls, transform voices in real time, clone voices, and generate studio‑quality text‑to‑speech — built for speed and scale.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <a href="mailto:cming.xu@gmail.com?subject=Start%20voiceasy.ai&body=I%20want%20to%20start%20with%20voiceasy.ai">Start Talking</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="mailto:cming.xu@gmail.com?subject=Contact%20voiceasy.ai&body=Hi%20there,%20let’s%20chat%20about%20voiceasy.ai">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Feature grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Voice Agents</CardTitle>
              <CardDescription>
                Human‑like phone agents that automate inbound/outbound calls and scheduling.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Reduce missed calls and manual work with end‑to‑end conversations.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" asChild>
                <a href="mailto:cming.xu@gmail.com?subject=Voice%20Agents%20Demo">Start</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Speak Every Language</CardTitle>
              <CardDescription>
                Localize voices to any accent or language in real time.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expand globally with natural multi‑lingual TTS and voice agents.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary" asChild>
                <a href="mailto:cming.xu@gmail.com?subject=Localization%20Support">Contact</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Real‑time Voice Changer</CardTitle>
              <CardDescription>
                Instantly switch between thousands of voices for gaming and streaming.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Low‑latency transformation with lifelike quality and noise removal.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" asChild>
                <a href="mailto:cming.xu@gmail.com?subject=Voice%20Changer">Start</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clone & Customize Voices</CardTitle>
              <CardDescription>
                Create unique, lifelike voices from short audio samples.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Build brand‑consistent voices for products and experiences.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary" asChild>
                <a href="mailto:cming.xu@gmail.com?subject=Voice%20Cloning">Contact</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Text to Speech</CardTitle>
              <CardDescription>
                Studio‑quality TTS at enterprise scale with low latency.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Handle unlimited content securely on‑premise or in the cloud.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" asChild>
                <a href="mailto:cming.xu@gmail.com?subject=TTS%20Capabilities">Start</a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Developers</CardTitle>
              <CardDescription>
                Build with TypeScript and Python SDKs and low‑latency APIs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Integrate voice agents, TTS, and voice changer into any stack.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="secondary" asChild>
                <a href="mailto:cming.xu@gmail.com?subject=Developer%20Access">Contact</a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Developer tabs */}
      <section className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center">
          Build with voiceasy.ai
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Designed for low latency, enterprise compliance, and easy scaling.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Quick Start</CardTitle>
            <CardDescription>SDK examples in TypeScript and Python</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="ts" className="w-full">
              <TabsList>
                <TabsTrigger value="ts">TypeScript</TabsTrigger>
                <TabsTrigger value="py">Python</TabsTrigger>
              </TabsList>
              <TabsContent value="ts">
                <pre className="rounded-md bg-muted p-4 text-sm overflow-auto">
{`import { VoiceAgent } from "@voiceasy/sdk";

const agent = new VoiceAgent({ apiKey: process.env.VOICEASY_API_KEY });
await agent.call({ to: "+1-555-0100", prompt: "Answer and schedule a demo" });`}
                </pre>
              </TabsContent>
              <TabsContent value="py">
                <pre className="rounded-md bg-muted p-4 text-sm overflow-auto">
{`from voiceasy import VoiceAgent

agent = VoiceAgent(api_key="${'{'}VOICEASY_API_KEY{'}'}")
agent.call(to="+1-555-0100", prompt="Answer and schedule a demo")`}
                </pre>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Compliance */}
      <section className="text-center space-y-3">
        <h3 className="text-xl font-semibold">Enterprise Ready</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Fully compliant and deployable on‑premise or in the cloud. Integrate seamlessly into your stack.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild>
            <a href="mailto:cming.xu@gmail.com?subject=Enterprise%20Deployment">Start</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="mailto:cming.xu@gmail.com?subject=Enterprise%20Questions">Contact</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
