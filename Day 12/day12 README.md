# React User Dashboard - Managing Side Effects with useEffect

## Overview
This project implements a **React-based User Dashboard** that fetches user data from an API, displays it dynamically, and handles side effects such as timers using React's `useEffect` hook. The goal is to manage asynchronous data and side effects effectively while ensuring proper cleanup.

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
│   ├── UserList.jsx          # Fetches and displays user data
│   ├── styles.css            # Styling for the user list and search input
└── package.json
```

---

## Features

### 1. **Data Fetching**
- Fetches user data from a mock API (`https://jsonplaceholder.typicode.com/users`) when the component mounts.
- Displays a loading message while data is being fetched.
- Handles errors gracefully and displays an error message if the fetch fails.

### 2. **Search Functionality**
- Allows users to search for specific users by name using a search input field.
- Filters the displayed user list dynamically as the user types.

### 3. **Side Effects**
- Updates the document title every 5 seconds to show the number of users fetched.
- Cleans up the timer when the component unmounts to avoid memory leaks.

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

### **useEffect for Data Fetching**
- Fetches user data from the API when the component mounts.
- Updates the `users` state with the fetched data.
- Handles loading and error states.

### **useEffect for Side Effects**
- Sets up a timer to update the document title every 5 seconds.
- Cleans up the timer when the component unmounts.

### **Search Functionality**
- Filters the user list based on the `search` state.
- Updates dynamically as the user types in the search input field.

---

## Challenges & Solutions
| Challenge                               | Solution                                                           |
|-----------------------------------------|--------------------------------------------------------------------|
| **Handling API Errors**                 | Used `try-catch` to handle fetch errors gracefully.                |
| **Cleaning Up Timers**                  | Used the cleanup function in `useEffect` to clear timers.          |
| **Dynamic Filtering**                   | Implemented search functionality using `filter()` on the user list.|

---

## Future Enhancements
- Add pagination for large datasets.
- Fetch data from a real API with authentication.
- Add user details modal for more information.
- Improve accessibility and keyboard navigation.

---

## Learning Outcomes
- Learned how to use `useEffect` for data fetching and side effects.
- Understood how to clean up side effects to avoid memory leaks.
- Gained experience in managing asynchronous data in React.
- Improved skills in building dynamic and interactive user interfaces.

---

*Created as part of the LaunchDarkly frontend development training program.*

