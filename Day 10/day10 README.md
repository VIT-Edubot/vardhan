# LaunchDarkly Employee Directory - Props and Component Composition

## Overview
This project enhances the **React-based Employee Dashboard** by introducing **props** and **component composition**. The application is modularized into reusable components, making it more flexible and maintainable. The focus is on passing data through props and composing smaller, reusable components to build a dynamic employee dashboard.

---

## Technical Stack
- React 18
- Vite
- CSS Modules
- Modern JavaScript (ES6+)

---

## Project Structure
```
react-employee-dashboard/
├── src/
│   ├── App.jsx               # Root component
│   ├── Header.jsx            # Static header component
│   ├── EmployeeDashboard.jsx # Manages employee list
│   ├── EmployeeCard.jsx      # Reusable employee card component
│   └── styles.css            # Global styles
└── package.json
```

---

## Components Implementation

### 1. **App Component (App.jsx)**
- Root component that renders the `EmployeeDashboard` and `Header` components.
- Provides the overall structure of the application.

### 2. **Header Component (Header.jsx)**
- Displays the static title "Employee Management System."
- Does not receive any props.
- Positioned at the top of the dashboard for consistent branding.

### 3. **EmployeeDashboard Component (EmployeeDashboard.jsx)**
- Manages the list of employees.
- Defines an array of employee objects with the following properties:
  - `id`
  - `name`
  - `position`
  - `department`
- Uses the `map()` function to render an `EmployeeCard` for each employee.
- Passes employee data to `EmployeeCard` via props.

### 4. **EmployeeCard Component (EmployeeCard.jsx)**
- Reusable component that displays individual employee details.
- Receives `name`, `position`, and `department` as props.
- Styled with borders, padding, and spacing for visual separation.
- Designed to be reusable for any employee data.

---

## Styling Approach
| Feature                | Implementation          |
|------------------------|-------------------------|
| **CSS Variables**      | Theme management       |
| **Flexbox Layout**     | Centered dashboard     |
| **Grid System**        | Employee card layout   |
| **Responsive Design**  | Media queries for mobile |

---

## Key Features
- **Props Usage**: Passes employee data from `EmployeeDashboard` to `EmployeeCard`.
- **Component Composition**: Combines smaller components to build a modular UI.
- **Reusable Components**: `EmployeeCard` can display any employee data passed via props.
- **Dynamic Rendering**: Uses `map()` to dynamically render employee cards.

---

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
cd react-employee-dashboard
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

### **Props Usage**
- Employee data is passed from `EmployeeDashboard` to `EmployeeCard` using props.
- Props are destructured in `EmployeeCard` for cleaner code.

### **Component Composition**
- The `EmployeeDashboard` component renders multiple `EmployeeCard` components.
- The `Header` component is included at the top of the dashboard for consistent branding.

---

## Challenges & Solutions
| Challenge                     | Solution                              |
|-------------------------------|---------------------------------------|
| **Managing Props**            | Used destructuring for clarity.      |
| **Dynamic Rendering**         | Used `map()` to loop through employees. |
| **Styling Consistency**       | Applied CSS variables for theming.   |
| **Component Reusability**     | Designed `EmployeeCard` to accept props dynamically. |

---

## Future Enhancements
- Add interactivity (e.g., edit, delete employees).
- Fetch employee data from an API.
- Implement state management with React hooks.
- Add animations for better user experience.

---

## Learning Outcomes
- Learned how to pass data between components using props.
- Understood the importance of component composition for modular design.
- Gained experience in building reusable components.
- Improved styling techniques with CSS variables and responsive design.

---

*Created as part of the LaunchDarkly frontend development training program.*