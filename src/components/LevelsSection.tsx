"use client";

import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { MarkerType } from "reactflow";
import { Agent } from "@/lib/types";
import { Lightbulb, LightbulbOff } from "lucide-react";
import { MdxExplanation } from "./MdxExplanation";

type Props = {
  currentStep: number;
  agent: Agent;
  agentName: string;
};

export function LevelsSection({ currentStep, agent, agentName }: Props) {
  const [isExplanationVisible, setIsExplanationVisible] = useState(true);

  const FlowDiagram = useMemo(() => dynamic(() => import("./FlowDiagram").then((mod) => mod.FlowDiagram), {
    ssr: false,
  }), []);

  const flow = {
    nodes: agent.steps_definitions.map((step, index) => ({
      id: step.nickname,
      data: { label: step.name },
      position: { x: 150, y: index * 90 + 5 },
      type: index === 0 ? 'input' : (index === agent.steps_definitions.length -1 ? 'output' : 'default')
    })),
    edges: agent.steps_definitions.flatMap(step => 
      step.possible_next_steps.map(nextStep => ({
        id: `${step.nickname}-${nextStep}`,
        source: step.nickname,
        target: nextStep,
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed },
      }))
    ),
  };
  
  const currentStepIndex = currentStep > 0 ? currentStep - 1 : 0;
  const currentStepDefinition = agent.steps_definitions[currentStepIndex];

  return (
    <div className="w-full max-w-6xl mx-auto my-12">
      <div className="p-6 bg-accent rounded-lg shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold">{agent.agent_type_name}</h2>
          <button 
            onClick={() => setIsExplanationVisible(!isExplanationVisible)}
            className="p-2 rounded-md hover:bg-background/50 transition-colors"
            title="Toggle Explanations"
          >
            {isExplanationVisible ? <LightbulbOff size={20} /> : <Lightbulb size={20} />}
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="w-full min-h-[500px] rounded-lg border bg-background shadow-inner">
            <FlowDiagram flow={flow} currentStep={currentStep} stepNicknames={agent.steps_definitions.map(s => s.nickname)} />
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div>
              <h3 className="text-xl font-bold text-foreground">About this Agent</h3>
              <p className="text-sm text-foreground">{agent.description}</p>
            </div>

            <hr className="my-6 border-border" />

            <AnimatePresence>
              {isExplanationVisible && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h4 className="font-bold text-lg mb-2 text-foreground">Step Explanation: <span className="text-primary">{currentStepDefinition?.name || "..."}</span></h4>
                  <div className="text-sm text-foreground">
                    {currentStepDefinition && <MdxExplanation agentName={agentName} stepNickname={currentStepDefinition.nickname} />}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
