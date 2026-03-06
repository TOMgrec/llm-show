export interface StepDefinition {
  nickname: string;
  name: string;
  explanation: string;
  icon: string;
  color: string;
  possible_next_steps: string[];
}

export interface ExampleStep {
  step_nickname: string;
  content: string;
}

export interface Example {
  name: string;
  sequence: ExampleStep[];
}

export interface Agent {
  agent_type_name: string;
  description: string;
  steps_definitions: StepDefinition[];
  examples: Example[];
}
