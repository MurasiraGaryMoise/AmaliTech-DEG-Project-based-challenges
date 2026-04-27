# SupportFlow Visual Builder

A visual decision tree editor for building and previewing automated customer support chat flows. Built with React and Vite — no flowchart libraries, no UI frameworks.

**[Live Demo](https://amali-tech-deg-project-based-challe-theta.vercel.app/)** · **[Design File](#)**

---

## Overview

SupportFlow Visual Builder lets support teams manage their chatbot conversation flows visually. Instead of editing a spreadsheet, users can see their entire flow as a connected flowchart, edit questions in real time, and test the bot experience instantly — all in the browser.

---

## Features

### Visual Flow Editor
Nodes are rendered on a scrollable canvas using absolute positioning based on their coordinates in the flow data. Parent and child nodes are connected by smooth bezier curves drawn with SVG — built from scratch without any graph or flowchart libraries.

### Node Editor
Clicking any node opens an edit panel on the right sidebar. Changes to the question text reflect immediately on the canvas. The panel stays visible at all times — when no node is selected, it shows a prompt to select one.

### Preview Mode
The Play button switches the app into a full-screen chat interface. The bot starts at the first node and the user can select answers to traverse the flow. A Restart button appears when a leaf node (end of conversation) is reached.

### Export
When changes have been made to the flow, an Export button becomes active in the navbar. Clicking it downloads the current state of the flow as a `flow_data.json` file, ready to hand off to a developer or save for later.

---

## Wildcard Feature — Export

The Export feature was chosen because it closes the most critical gap in any editor tool: the ability to save your work. Without it, every change a manager makes is lost on page refresh. With it, SupportFlow becomes a complete authoring tool — a non-technical manager can update the flow, export the result, and hand a production-ready JSON file directly to a developer. No spreadsheets, no back-and-forth.

The Export button is intentionally disabled until a change is made, so it is always clear whether the current state has been modified from the original.

---

## Tech Stack

- **React** — UI and state management
- **Vite** — build tool and dev server
- **Plain CSS** — all styling, no component libraries
- **SVG** — connector lines drawn manually using bezier curves

---

## Design System

The visual language of the tool is documented in the design file linked below. It covers the canvas, node card variants, connector styles, and color semantics for each node type.

**[View Design File](#)**

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar/         # Top bar with mode toggle and export
│   ├── Canvas/         # Scrollable canvas, manages node refs
│   ├── NodeCard/       # Individual node card with type styling
│   ├── SvgConnectors/  # Bezier curve lines between nodes
│   ├── EditPanel/      # Right sidebar node editor
│   └── PreviewChat/    # Full-screen chat interface
├── App.jsx             # Root state and layout
└── flow_data.json      # Source flow data
```

---

## Constraints Met

- No flowchart or graph libraries (`react-flow`, `jsPlumb`, `mermaid.js`)
- No UI component libraries (`Bootstrap`, `Material UI`, `Chakra UI`)
- SVG connector lines and coordinate logic built from scratch
- All state managed in-memory — no backend required
