// --- Server-side ---
import { Header } from "@/components/Header";
import { Agent } from "@/lib/types";
import fs from "fs";
import path from "path";
import { ClientContainer } from "@/components/ClientContainer";
import { Hero } from "@/components/Hero";

export async function generateStaticParams() {
  const agentsDir = path.join(process.cwd(), "src/lib/agents");
  const agentSlugs = fs.readdirSync(agentsDir).filter(p => !p.endsWith('.json'));
  return agentSlugs.map((slug) => ({ agentName: slug }));
}

async function getAgentData(agentName: string): Promise<Agent> {
  const filePath = path.join(process.cwd(), `src/lib/agents/${agentName}/agent.json`);
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

export default async function AgentPage({ params }: { params: Promise<{ agentName: string }> }) {
  const { agentName } = await params;
  const agentData = await getAgentData(agentName);
  
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
        <Hero />
        <ClientContainer agent={agentData} agentName={agentName} />
      </main>
    </>
  );
}
