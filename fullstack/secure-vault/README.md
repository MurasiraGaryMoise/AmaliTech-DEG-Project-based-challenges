# SecureVault Dashboard

A high-performance File Explorer UI built for SecureVault Inc. — an enterprise cloud storage platform serving law firms and banks. The interface allows users to navigate deeply nested folder structures, inspect file metadata, and stay productive without a mouse.

---

## Live Demo

[https://amali-tech-deg-project-based-challe-chi.vercel.app/](https://amali-tech-deg-project-based-challe-chi.vercel.app/)

---

## Design File

[<!-- PASTE YOUR FIGMA/PENPOT LINK HERE (set to "Anyone with the link can view") -->](#)

---

## Setup Instructions

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone https://github.com/MurasiraGaryMoise/AmaliTech-DEG-Project-based-challenges
cd fullstack/secure-vault

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

To build for production:

```bash
npm run build
```

---

## Features

### Core

| Feature | Description |
|---|---|
| Recursive File Tree | Renders arbitrarily deep folder structures from `data.json` |
| Expand / Collapse | Click any folder to toggle its contents |
| File Selection | Click a file to select it — highlighted with a distinct visual state |
| Properties Panel | Displays the selected file's Name, Type, and Size |
| Keyboard Navigation | Full keyboard control without a mouse (see below) |

### Keyboard Shortcuts

| Key | Action |
|---|---|
| `↑` / `↓` | Move focus up/down through visible items |
| `→` | Expand focused folder |
| `←` | Collapse focused folder |
| `Enter` | Select focused file |

### Bonus: Search & Filter

A search bar in the sidebar filters the tree in real time. When a match is found inside a nested folder, those parent folders automatically expand to reveal the result.

---

## Recursive Strategy

The file tree is rendered by a single recursive component, `Sub_folder`, which calls itself for each child node:

```
Sub_folder
├── renders a folder or file row
└── if folder is open → maps children → <Sub_folder /> for each
```

Expand/collapse state is managed in the parent `Sidebar` component as a `Set` of open folder IDs (`openFolders`). This keeps the recursive component stateless and pure — it only reads props.

For keyboard navigation, a flat list of currently visible items is derived on each render using `getVisibleItems`, which walks the same tree structure respecting the `openFolders` set. Arrow keys move a `focusedIndex` integer through this flat list, which maps back to a `focusedId` passed down to each node.

---

## Wildcard Feature: Recently Viewed

**Feature:** A "Recently Viewed" panel that tracks the last 5 files a user opened, with one-click re-access.

**Why:** In a vault with deep folder hierarchies (e.g. `Legal > Active_Cases > Doe_vs_MegaCorp > Discovery_Phase > file.pdf`), returning to a previously opened file requires re-navigating the entire tree. For lawyers and bankers who repeatedly reference the same documents, this is a real friction point. Recently Viewed eliminates that cost with zero extra navigation.

**Business value:** Reduces time-to-file for repeat access, improving productivity for power users who are the primary audience of the platform.

---

## Tech Stack

- **Framework:** React 19 (Vite)
- **Icons:** `react-icons` (VSCode icon set)
- **Styling:** Custom CSS — no component libraries
- **Data:** Static `public/data.json`
