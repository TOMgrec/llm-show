import { motion } from "framer-motion";
import { User, BrainCircuit, Wrench, Bot, Binary, FileText, Copy, Check, Terminal, FileJson2, Braces } from "lucide-react";
import { useState } from "react";

// This is a bit of a hack to map icon strings from JSON to actual components
const iconComponents: { [key: string]: React.ElementType } = {
  User,
  BrainCircuit,
  Wrench,
  Bot,
  Binary,
  FileText,
  Terminal,
  FileJson2,
  Braces
};

type StepProps = {
  name: string;
  icon: string;
  color: string;
  code: string;
  // explanation is no longer needed here
};

type Props = {
  step: StepProps;
};

export function StepBox({ step }: Props) {
  const [copied, setCopied] = useState(false);
  const Icon = iconComponents[step.icon] || FileText;

  const handleCopy = () => {
    navigator.clipboard.writeText(step.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className={`bg-background border-l-4 rounded-lg p-4 ${step.color}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={16} />
          <h3 className="font-bold text-sm">{step.name}</h3>
        </div>
        <button onClick={handleCopy} className="p-2 rounded hover:bg-accent">
          {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
        </button>
      </div>
      <pre className="bg-muted text-muted-foreground rounded p-3 text-sm overflow-x-auto">
        <code>{step.code}</code>
      </pre>
    </motion.div>
  );
}
