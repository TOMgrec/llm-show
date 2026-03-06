import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// In a real app, you'd fetch this list from your file system
const availableAgents = [
  { name: "Basic Agent (ReAct)", slug: "basic-agent", description: "A simple agent that follows the 'Reason -> Act' loop." },
  { name: "Agent with Tools", slug: "tool-agent", description: "An agent capable of using external tools." },
  { name: "Chat Agent", slug: "chat-agent", description: "A simple chat agent that can have a conversation with the user." },
  { name: "Reasoning Agent", slug: "reasoning-agent", description: "An agent that can reason about the world." },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
        <Hero />
        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Choisissez un type d'agent à explorer</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {availableAgents.map((agent) => (
              <Link href={`/agent/${agent.slug}`} key={agent.slug}>
                <div className="p-6 bg-accent rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{agent.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{agent.description}</p>
                  <div className="flex justify-end">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
