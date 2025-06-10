# React Router DOM - Feature Management Dashboard (Day 17)

This project demonstrates how to use **React Router DOM** to build a multi-page **feature management dashboard**. It is built using **Vite** and React, and allows users to navigate between different pages without full-page reloads.

---

## 🚀 Project Structure

- `Home.jsx`: Displays links to feature dashboards with dynamic IDs.
- `About.jsx`: Provides information about the dashboard.
- `Dashboard.jsx`: Displays feature data dynamically using the URL parameter.
- `App.jsx`: Contains route definitions and navigation links.
- `main.jsx`: Sets up the React app with `BrowserRouter`.

---

## 🛠️ Technologies Used

- React
- Vite
- React Router DOM

---

## 📦 Installation & Running Locally

1. **Clone or download** this project folder.

2. **Navigate** into the project directory:
   ```bash
   cd "Day 17"
````

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser** and visit:

   ```
   http://localhost:5173
   ```

---

## 🔗 Page Routes & Features

| Route            | Description                                    |
| ---------------- | ---------------------------------------------- |
| `/`              | Home page with dynamic dashboard links         |
| `/about`         | About page with project info                   |
| `/dashboard/:id` | Dashboard that shows feature data for given ID |

---

## 📚 React Router DOM Concepts Used

* `BrowserRouter`: Wraps the app to enable routing.
* `Routes` & `Route`: Define paths and render specific components.
* `Link`: Navigates between pages without reloading.
* `useParams`: Extracts dynamic `id` from the URL in the dashboard.

---

## 🎯 Learning Outcomes

* Set up routing in a React project using React Router DOM.
* Create navigation using `Link` components.
* Handle dynamic routing using URL parameters with `useParams`.
* Build a smooth single-page application with multiple routes.

---


