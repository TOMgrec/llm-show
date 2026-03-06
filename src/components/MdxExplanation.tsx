"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

type Props = {
  agentName: string;
  stepNickname: string;
};

export function MdxExplanation({ agentName, stepNickname }: Props) {
  const [Content, setContent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    const loadMdx = async () => {
      const MdxComponent = dynamic(() => 
        import(`@/lib/agents/${agentName}/steps/${stepNickname}.mdx`)
      );
      setContent(() => MdxComponent);
    };

    if (agentName && stepNickname) {
      loadMdx();
    }
  }, [agentName, stepNickname]);

  if (!Content) {
    return (
      <div className="flex items-center gap-2">
        <Loader2 className="animate-spin" size={16} />
        <span>Loading explanation...</span>
      </div>
    );
  }

  return <Content />;
}
