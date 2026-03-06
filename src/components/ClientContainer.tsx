"use client";

import { useState } from "react";
import { InteractivePanel } from "./InteractivePanel";
import { LevelsSection } from "./LevelsSection";
import { Agent } from "@/lib/types";

export function ClientContainer({ agent, agentName }: { agent: Agent, agentName: string }) {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <InteractivePanel 
        currentStep={currentStep} 
        setCurrentStep={setCurrentStep}
        agent={agent}
      />
      <LevelsSection 
        currentStep={currentStep} 
        agent={agent}
        agentName={agentName}
      />
    </>
  );
}
