"use client";

import { useState, useEffect } from "react";
import { StepBox } from "./StepBox";
import { AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { Agent } from "@/lib/types";

type Props = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  agent: Agent;
};

export function InteractivePanel({ currentStep, setCurrentStep, agent }: Props) {
  const [activeExample, setActiveExample] = useState(agent.examples[0]);

  useEffect(() => {
    const randomExample = agent.examples[Math.floor(Math.random() * agent.examples.length)];
    setActiveExample(randomExample);
  }, [agent]);

  const handleNext = () => {
    if (currentStep < activeExample.sequence.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    const randomExample = agent.examples[Math.floor(Math.random() * agent.examples.length)];
    setActiveExample(randomExample);
    setCurrentStep(1);
  };
  
  useEffect(() => {
    setCurrentStep(1);
  }, [agent, activeExample, setCurrentStep]);

  return (
    <div className="w-full max-w-3xl mx-auto my-12">
      <div className="bg-accent rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-accent-foreground mb-2">
          Watch the Agent Think
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          Example: <span className="font-semibold">{activeExample.name}</span>
        </p>

        <div className="space-y-4">
          <AnimatePresence>
            {activeExample.sequence.slice(0, currentStep).map((step, index) => {
              const definition = agent.steps_definitions.find(d => d.nickname === step.step_nickname);
              if (!definition) return null;
              
              const stepWithDefinition = { ...definition, code: step.content };

              return <StepBox key={index} step={stepWithDefinition} />;
            })}
          </AnimatePresence>
        </div>

        <div className="flex gap-2 justify-center mt-6">
          <button onClick={handlePrev} disabled={currentStep === 1} className="px-4 py-2 bg-background rounded disabled:opacity-50 flex items-center gap-2">
            <ArrowLeft size={16} /> Prev
          </button>
          <button onClick={handleNext} disabled={currentStep === activeExample.sequence.length} className="px-4 py-2 bg-background rounded disabled:opacity-50 flex items-center gap-2">
            Next <ArrowRight size={16} />
          </button>
          <button onClick={handleReset} className="px-4 py-2 bg-background rounded flex items-center gap-2">
            <RotateCcw size={16} /> Reset
          </button>
        </div>
      </div>
    </div>
  );
}