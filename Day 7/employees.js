// employees.js

// Employee data as an array of objects
const employees = [
    { id: 4, name: "Deepthi", position: "HR Manager", department: "Human Resources", isActive: false },
    { id: 1, name: "Anjali", position: "Software Engineer", department: "Development", isActive: true },
    { id: 3, name: "Charmi", position: "Designer", department: "UI/UX", isActive: true },
    { id: 2, name: "Bhargavi", position: "Product Manager", department: "Product", isActive: false },
    { id: 5, name: "Esha", position: "DevOps Engineer", department: "Infrastructure", isActive: true }
];

// Function to display employees in the DOM
function displayEmployees(employeeArray) {
    const employeeList = document.getElementById("employee-list");
    employeeList.innerHTML = ""; // Clear the existing list

    employeeArray.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("employee-card");

        employeeDiv.innerHTML = `
            <h3>${employee.name}</h3>
            <p><strong>Position:</strong> ${employee.position}</p>
            <p><strong>Department:</strong> ${employee.department}</p>
            <p><strong>Status:</strong> <span class="status">${employee.isActive ? "Active" : "Inactive"}</span></p>
            <button class="toggle-status" data-id="${employee.id}">Toggle Status</button>
        `;

        employeeList.appendChild(employeeDiv);
    });

    attachToggleEvent(); // Attach event listener after creating elements
}

// Function to toggle employee status
function toggleStatus(event) {
    if (event.target.classList.contains("toggle-status")) {
        const employeeId = parseInt(event.target.getAttribute("data-id"));
        const employee = employees.find(emp => emp.id === employeeId);
        
        if (employee) {
            employee.isActive = !employee.isActive; // Toggle active status
            displayEmployees(employees); // Re-render employee list
        }
    }
}

// Function to filter active employees
function showActiveEmployees() {
    const activeEmployees = employees.filter(emp => emp.isActive);
    displayEmployees(activeEmployees);
}

// Function to sort employees by name
function sortEmployeesByName() {
    employees.sort((a, b) => a.name.localeCompare(b.name));
    displayEmployees(employees);
}

// Function to create an array of employee names using map()
function logEmployeeNames() {
    const employeeNames = employees.map(emp => emp.name);
    console.log("Employee Names:", employeeNames);
}

// Attach event listeners to buttons
document.getElementById("show-active").addEventListener("click", showActiveEmployees);
document.getElementById("sort-employees").addEventListener("click", sortEmployeesByName);

// Attach event listeners for toggle buttons dynamically
function attachToggleEvent() {
    document.querySelectorAll(".toggle-status").forEach(button => {
        button.addEventListener("click", toggleStatus);
    });
}

// Initial display of employees
displayEmployees(employees);
logEmployeeNames();
