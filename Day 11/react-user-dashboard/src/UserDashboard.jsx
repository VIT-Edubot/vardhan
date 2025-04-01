import { useState, useEffect } from "react";
import "./styles.css";

const UserDashboard = () => {
  // Load theme from localStorage or default to "light"
  const savedTheme = localStorage.getItem("theme") || "light";

  // State variables
  const [name, setName] = useState("John Doe");
  const [status, setStatus] = useState(true); // true = Active, false = Inactive
  const [theme, setTheme] = useState(savedTheme);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`dashboard ${theme}`}>
      <h1>User Dashboard</h1>
      
      {/* User Name */}
      <div className="section">
        <label>Change Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <h2>Name: {name}</h2>
      </div>

      {/* User Status */}
      <div className="section">
        <button onClick={() => setStatus(!status)}>
          {status ? "Set Inactive" : "Set Active"}
        </button>
        <p>Status: {status ? "Active" : "Inactive"}</p>
        {!status && <p className="inactive-msg">Your account is currently inactive. Please update your status.</p>}
      </div>

      {/* Theme Toggle */}
      <div className="section">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
