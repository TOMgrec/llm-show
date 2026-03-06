export function Hero() {
  return (
    <div className="text-center my-12">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
        Visually Understand LLM Agents
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        This interactive application is designed to help you understand the inner workings of Large Language Model (LLM) agents.
        You can select a scenario, and then step through the agent's thought process to see how it arrives at its final answer.
      </p>
    </div>
  );
}
