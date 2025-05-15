# React Theme Dashboard - Optimizing Component Performance and State Management

## Overview
This project implements a **React-based Theme Dashboard** that includes a theme toggle (light/dark mode), a user list filter, and optimized component rendering using `useContext`, `useMemo`, and `useCallback`.

---

## Technical Stack
- React 18
- Vite
- CSS Modules
- Modern JavaScript (ES6+)

---

## Project Structure
```
react-theme-dashboard/
├── src/
│   ├── App.jsx               # Main component
│   ├── ThemeContext.jsx      # Global theme context
│   ├── UserList.jsx          # User list with filtering and theme toggle
│   ├── styles.css            # Styling for light/dark themes
└── package.json
```

---

## Features

### 1. **Global Theme Management**
- Uses `useContext` to manage the global theme state.
- Provides a `toggleTheme` function to switch between light and dark modes.

### 2. **Optimized List Filtering**
- Filters the user list based on a search term.
- Uses `useMemo` to memoize the filtered list, avoiding unnecessary recalculations.

### 3. **Memoized Event Handlers**
- Uses `useCallback` to memoize the search input handler, preventing unnecessary re-renders of child components.

---

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd react-theme-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the browser at `http://localhost:5173`.

---

## Implementation Details

### **useContext for Theme Management**
- The `ThemeContext` provides the `theme` and `toggleTheme` functions.
- The `App` component uses the `theme` to apply light or dark styles globally.

### **useMemo for List Filtering**
- The filtered user list is memoized using `useMemo`.
- The list is recalculated only when the search term changes.

### **useCallback for Event Handlers**
- The search input handler is memoized using `useCallback`.
- Prevents unnecessary re-renders of child components that depend on this handler.

---

## Challenges & Solutions
| Challenge                                     | Solution                                                 |
|-----------------------------------------------|----------------------------------------------------------|
| **Managing Global State**                     | Used `useContext` for centralized theme management.      |
| **Optimizing List Filtering**                 | Used `useMemo` to avoid recalculating the filtered list. |
| **Preventing Unnecessary Re-renders**         | Used `useCallback` to memoize event handlers.            |

---

## Future Enhancements
- Add more UI elements that react to theme changes (e.g., sidebar, footer).
- Fetch user data from an API instead of using mock data.
- Add animations for smoother theme transitions.

---

## Learning Outcomes
- Learned how to use `useContext` for global state management.
- Gained experience in optimizing performance with `useMemo` and `useCallback`.
- Improved understanding of React performance best practices.

---

*Created as part of the LaunchDarkly frontend development training program.*

