import React from "react";
import "./styles.css";

function EmployeeCard({ name, position, department }) {
  return (
    <div className="employee-card">
      <h3>{name}</h3>
      <div className="employee-details">
        <p><strong>Position:</strong> {position}</p>
        <p><strong>Department:</strong> {department}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;