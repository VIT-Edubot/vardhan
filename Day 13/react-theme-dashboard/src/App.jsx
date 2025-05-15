import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import UserList from "./UserList";
import "./styles.css";

function AppContent() {
  const { theme } = useContext(ThemeContext); // Get current theme

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <UserList />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
