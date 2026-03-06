# LLM Agent Visualizer

This interactive web application aims to visually explain the complex inner workings of Large Language Model (LLM) agents. By providing an engaging, step-by-step visualization of agent processes and contextual explanations, it serves as an educational tool for understanding AI agent behavior.

## ✨ Features

*   **Explore Agent Types:** Discover and interact with various LLM agent architectures, including:
    *   Basic Agent (ReAct loop)
    *   Agent with Tools (e.g., web search, calculator)
    *   [Add other agent types as they are developed]
*   **Interactive Step-by-Step Visualization:** Witness the agent's thought process unfold in real-time with dynamic, color-coded diagrams.
*   **Detailed Explanations:** Understand the purpose of each step with easily toggled, in-depth explanations powered by MDX.
*   **Example Scenarios:** Learn through concrete examples like "Weather in Paris" or "Capital of France," demonstrating agent capabilities.
*   **Code Snippets:** View the actual code or tool calls executed at each step, with a convenient copy-to-clipboard feature.
*   **Theming:** Supports both a modern dark mode and a clear light mode for a comfortable viewing experience.

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18 or later recommended)
*   npm or yarn package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Theo-Faure/llm-show.git
    cd llm-show
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```

    The application will be available at `http://localhost:3001` (or the port specified in your `.env` file).

## 🏗️ Project Structure

```
llm-show/
├── public/             # Static assets (images, etc.)
├── src/
│   ├── app/
│   │   ├── agent/[agentName]/
│   │   │   └── page.tsx             # Dynamic route for agent details
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Header.tsx      # Application header with theme toggle & GitHub link
│   │   │   ├── Hero.tsx        # Landing page hero section
│   │   │   ├── InteractivePanel.tsx # Controls for agent step navigation
│   │   │   ├── LevelsSection.tsx    # Displays agent description, graph, and step explanations
│   │   │   ├── FlowDiagram.tsx      # Renders agent process graphs (React Flow)
│   │   │   ├── StepBox.tsx          # Displays individual agent steps
│   │   │   └── MdxExplanation.tsx   # Dynamically loads and renders MDX content
│   │   ├── globals.css           # Global styles and theme definitions (CSS variables)
│   │   └── layout.tsx            # Root layout
│   ├── lib/
│   │   ├── agents/
│   │   │   ├── basic-agent/
│   │   │   │   ├── agent.json    # Agent configuration
│   │   │   │   └── steps/        # MDX files for step explanations
│   │   │   ├── tool-agent/       # Another agent definition
│   │   │   └── ...               # Other agent types
│   │   ├── types.ts              # Shared TypeScript types
│   │   └── ...
│   ├── pages/            # (If using Pages Router - app directory is preferred in Next.js App Router)
│   └── ...
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
├── AGENTS.md           # Guidelines for AI agents contribution
├── PLAN.md             # Project development plan
├── STYLE.md            # UI/UX and aesthetic guidelines
└── README.md           # This file
```

## 📚 Core Concepts

### Agent Definitions (`agent.json`)

Each agent type is defined in a `src/lib/agents/[agentName]/agent.json` file. This JSON contains:

*   `agent_type_name`: Display name of the agent.
*   `description`: General explanation of its capabilities.
*   `steps_definitions`: An array defining each step in the workflow:
    *   `nickname`: Unique identifier for the step.
    *   `name`: Human-readable display name.
    *   `explanation`: Relative path to the MDX file for detailed explanation (e.g., `"steps/reasoning.mdx"`).
    *   `icon`: Name of the `lucide-react` icon to display.
    *   `color`: Tailwind CSS class for the border color (e.g., `"border-blue-500"`).
    *   `possible_next_steps`: Array of `nickname`s for valid subsequent steps.
*   `examples`: Demonstrations of agent usage, including example scenarios and their step-by-step sequences with content.

### Step Explanations (MDX Files)

Detailed explanations are stored in `.mdx` files within `src/lib/agents/[agentName]/steps/`. These are dynamically loaded for performance.

### Graph Visualization (`FlowDiagram.tsx`)

Uses `reactflow` to render agent workflows. Nodes and edges are dynamically generated from `agent.json` definitions. Currently, node colors are hardcoded based on step activity, but this is planned to use `step.color` definitions for better customization.

### Interactive Panel (`InteractivePanel.tsx`)

Provides user controls (Prev, Next, Reset) to navigate through agent steps. Displays executed steps using `StepBox` components and allows toggling detailed explanations.

## 🛠️ Build, Lint, and Test Commands

*   **Build:**
    ```bash
    npm run build
    ```
    (Builds the application for production using Next.js optimizations.)

*   **Lint:**
    ```bash
    npm run lint
    ```
    (Runs ESLint to check for code quality and style issues.)

*   **Test:**
    ```bash
    npm test
    ```
    (Note: A testing framework like Jest is not yet configured. This command would run tests once added.)

## 🤝 Contributing

Contributions are welcome! Please adhere to the guidelines in `AGENTS.md` for code style and conventions. For issues or suggestions, feel free to open an issue or a pull request on GitHub.

---

*Last updated: [Insert Date Here]*