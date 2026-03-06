# STYLE.md

This document outlines the UI, UX, and aesthetic guidelines for the LLM Agent Visualizer application.

## 1. Core Philosophy: "Show, Then Tell"

The user experience is guided by a simple principle: **Show** the magic first, then **Tell** how it works.

-   **Initial Engagement (Show):** The user is immediately presented with the interactive prompt panel. They can play with it and see the fascinating text transformations without needing any prior context. This creates curiosity and engagement from the first second.
-   **Deeper Understanding (Tell):** As the user scrolls down, they are presented with clear, digestible explanations ("Levels") that break down the concepts behind what they just witnessed. This reinforces learning by connecting it to their direct experience.

## 2. Aesthetic & Theme

-   **Theme:** A clean, modern "dark mode" aesthetic is the default. This creates a focused, technical feel that lets the highlighted text and diagrams stand out.
-   **Color Palette:**
    -   **Background:** Dark gray (`#111827`).
    -   **Text:** White/light-gray for body text.
    -   **Accents:** Vibrant colors (blues, purples, greens, oranges) for highlighting specific parts of the agent's process.
-   **Typography:**
    -   **Body Text:** A clean, sans-serif font (e.g., Inter).
    -   **Code/Technical Text:** A monospace font to enhance readability.

## 3. Layout & Structure

-   **Overall Layout:** A single-page, vertical scrolling experience. The user scrolls down to progress through the "levels" of complexity, creating a linear, story-like flow.
-   **Header:** A thin, sticky navigation bar that remains visible but unobtrusive.
-   **Interactive Sandbox:** This is the first section the user sees. It's dominated by the main interactive panel.
-   **Educational "Levels":** Below the sandbox, a series of sections explain the concepts. On wider screens, these use a two-column layout: text on one side, visualization on the other. On mobile, they stack vertically.

## 4. UI Component Details

### Interactive Panel

-   **Look & Feel:** A large, card-like element with soft shadows and rounded corners to lift it off the page.
-   **Input:** A spacious text area with an inviting placeholder and a prominent "Send" button.
-   **Display:** The area where the step-by-step transformation is displayed. Each step animates in sequentially using a "cascade" or "waterfall" effect (powered by Framer Motion).
-   **Semantic Highlighting:** Text is color-coded to differentiate between steps:
    -   **Agent Thought:** Muted, italicized color.
    -   **Tool Call:** Vibrant color for the tool name, another for its parameters.
    -   **Tool Output:** A neutral, distinct color.
    -   **Final Answer:** A clear, bold color to signify completion.

### Flow Diagrams

-   **Look & Feel:** Interactive node-based diagrams (powered by React Flow).
-   **Interactivity:** Users can pan, zoom, and drag nodes. Edges are animated to show the flow of information.
-   **Consistency:** The color scheme used in the diagrams matches the semantic highlighting in the interactive panel to create a cohesive visual language.
