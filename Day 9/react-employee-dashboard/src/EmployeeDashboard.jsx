import React from "react";
import "./styles.css";

const employees = [
  { 
    id: 1,
    name: "Rajesh Kumar",
    position: "Senior Software Engineer",
    department: "Engineering"
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Product Manager",
    department: "Product"
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "UX Designer",
    department: "Design"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    position: "DevOps Engineer",
    department: "Infrastructure"
  },
  {
    id: 5,
    name: "Karthik Iyer",
    position: "QA Lead",
    department: "Quality Assurance"
  }
];

function EmployeeDashboard() {
  return (
    <div className="dashboard">
      <h2>Employee List</h2>
      <div className="employee-grid">
        {employees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <h3>{employee.name}</h3>
            <div className="employee-details">
              <p><strong>Position:</strong> {employee.position}</p>
              <p><strong>Department:</strong> {employee.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
