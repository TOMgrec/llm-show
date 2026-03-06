"use client";

import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

type Flow = {
  nodes: any[];
  edges: any[];
};

type Props = {
  flow: Flow;
  currentStep: number;
  stepNicknames: string[];
};

export function FlowDiagram({ flow, currentStep, stepNicknames }: Props) {
  const nodes = flow.nodes.map((node) => {
    const nodeIndex = stepNicknames.indexOf(node.id);
    const isActive = currentStep > nodeIndex;

    return {
      ...node,
      style: {
        ...node.style,
        background: isActive ? "#0284c7" : "#1e293b",
        color: 'white',
      },
    };
  });

  return (
    <ReactFlow nodes={nodes} edges={flow.edges} fitView>
      <Controls />
      <Background />
    </ReactFlow>
  );
}
