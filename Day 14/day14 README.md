# React Input Watch Form - useRef, useEffect, and useWatch Hook

## Overview

This project implements a **React-based Input Form** where you:

* Store persistent values using `useRef`
* Track input changes using a custom watch effect with `useEffect`
* Observe value changes using a `useWatch` hook
* Focus the input field via DOM manipulation using `useRef`

Developed as part of LaunchDarkly's frontend training to deepen understanding of hooks and state tracking in React.

---

## Technical Stack

* React 18
* Vite
* JavaScript (ES6+)

---

## Project Structure

```
react-watch-effect-demo/
├── src/
│   ├── NameForm.jsx        # useRef for persistent input storage
│   ├── WatchEffect.jsx     # Custom watch effect with useEffect
│   ├── WatchInput.jsx      # useWatch hook to track input changes
│   ├── FocusInput.jsx      # Focus input field using useRef
│   └── App.jsx             # Combines all components (optional)
└── README.md
```

---

## Features

### 1. **Persistent Input Values with useRef**

* `useRef` stores the initial input value and persists it across renders.
* DOM access enables referencing input after submission.

### 2. **Custom Watch Effect with useEffect**

* Tracks `inputValue` changes with `useEffect`.
* Logs or displays the new value whenever it updates.

### 3. **useWatch Hook for Input Monitoring**

* Custom hook to track and return the latest value of a specific state.
* Helps isolate and observe changes efficiently.

### 4. **Focus Input with useRef**

* Button click focuses the input field using DOM manipulation via `useRef`.

### 5. **Bonus: Combined Demo Page**

* All features integrated into a single page:

  * Input persistence
  * Input tracking
  * DOM focus
  * Watched value display

---

## Setup Instructions

1. Create and initialize the project:

```bash
npm create vite@latest react-watch-effect-demo --template react
cd react-watch-effect-demo
npm install
npm run dev
```

2. Open in browser:

```
http://localhost:5173
```

---

## Challenges & Solutions

| Challenge                        | Solution                                                |
| -------------------------------- | ------------------------------------------------------- |
| Persisting input across renders  | Used `useRef` to store non-reactive persistent values.  |
| Watching and responding to input | Used `useEffect` to build a custom watch mechanism.     |
| Tracking specific state changes  | Created a custom `useWatch` hook.                       |
| DOM manipulation for focus       | Leveraged `useRef` to directly focus the input element. |

---

## Learning Outcomes

* Gained practical experience with `useRef` for persistent references.
* Built custom watch behavior with `useEffect` for tracking changes.
* Implemented a `useWatch` hook for fine-grained state observation.
* Manipulated the DOM directly using `useRef` without triggering re-renders.

---

## Submission Files

* `src/NameForm.jsx` - Input form with useRef.
* `src/WatchEffect.jsx` - Custom effect watching input changes.
* `src/WatchInput.jsx` - useWatch hook monitoring specific state.
* `src/FocusInput.jsx` - Button-controlled input focusing via useRef.
* `README.md` - Documentation of implementation and learnings.


