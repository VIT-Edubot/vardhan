# React User Dashboard - State Management with useState

## Overview
This project implements a **React-based User Dashboard** that allows users to dynamically update their name, toggle their status (Active/Inactive), and switch between Light and Dark themes. The goal is to manage component state using React's `useState` hook, providing a responsive and interactive user experience.

---

## Technical Stack
- React 18
- Vite
- CSS Modules
- Modern JavaScript (ES6+)

---

## Project Structure
```
react-user-dashboard/
├── src/
│   ├── App.jsx               # Root component
│   ├── UserDashboard.jsx     # Main dashboard component
│   ├── styles.css            # Styling for the dashboard and theme
└── package.json
```

---

## Components Implementation

### 1. **App Component (App.jsx)**
- Root component that renders the `UserDashboard` component.
- Provides the overall structure of the application.

### 2. **UserDashboard Component (UserDashboard.jsx)**
- Manages user interactions and state using `useState`.
- Contains three primary states:
  - `name`: Stores the user's name (default: "John Doe").
  - `status`: Boolean state for Active/Inactive status.
  - `theme`: Stores light/dark mode preference and persists it in `localStorage`.
- Provides UI elements for:
  - Changing the name dynamically via an input field.
  - Toggling the user status.
  - Switching between light and dark themes.

---

## Styling Approach
| Feature                | Implementation          |
|------------------------|-------------------------|
| **CSS Variables**      | Theme management       |
| **Flexbox Layout**     | Centered dashboard     |
| **Responsive Design**  | Media queries for mobile |
| **Dynamic Theming**    | Light/Dark mode styling |

---

## Key Features
- **State Management**: Uses `useState` to manage `name`, `status`, and `theme`.
- **Dynamic UI Updates**: Changes in state immediately reflect on the UI.
- **User Interaction Handling**: Input fields and buttons update state dynamically.
- **Theme Persistence**: Saves and retrieves the theme preference from `localStorage`.

---

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd react-user-dashboard
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

### **State Management (`useState`)**
- `name`: Stores the user's name.
- `status`: Boolean for Active/Inactive status.
- `theme`: Stores light/dark mode preference (persists in `localStorage`).

### **Handling User Interactions**
- The input field updates the `name` state dynamically.
- The status toggle button switches between Active and Inactive.
- The theme toggle button switches between Light and Dark mode.

---

## Challenges & Solutions
| Challenge                                     | Solution                                                 |
|-----------------------------------------------|----------------------------------------------------------|
| **Ensuring `localStorage` updates correctly** | Used `useEffect` to track theme changes.                 |
| **Applying conditional styling**              | Dynamically adjusted CSS classes based on theme.         |
| **Maintaining component reactivity**          | Leveraged `useState` to trigger re-renders.              |

---

## Future Enhancements
- Add an avatar upload feature.
- Introduce API integration to fetch and update user data.
- Implement global state management using `useContext` or Redux.
- Improve accessibility and keyboard navigation.

---

## Learning Outcomes
- Gained experience in managing local state using `useState`.
- Understood how to handle user interactions dynamically.
- Learned to persist theme preference using `localStorage`.
- Developed a modular and reusable component structure.

---

*Created as part of the LaunchDarkly frontend development training program.*

