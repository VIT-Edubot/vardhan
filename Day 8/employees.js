// employees.js

// Employee data as an array of objects
const employees = [
    { id: 4, name: "Deepthi", position: "HR Manager", department: "Human Resources", isActive: false },
    { id: 1, name: "Anjali", position: "Software Engineer", department: "Development", isActive: true },
    { id: 3, name: "Charmi", position: "Designer", department: "UI/UX", isActive: true },
    { id: 2, name: "Bhargavi", position: "Product Manager", department: "Product", isActive: false },
    { id: 5, name: "Esha", position: "DevOps Engineer", department: "Infrastructure", isActive: true }
];

let editingEmployeeId = null;

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
            <div class="card-actions">
                <button class="toggle-status" data-id="${employee.id}">Toggle Status</button>
                <button class="edit-btn" data-id="${employee.id}">Edit</button>
                <button class="delete-btn" data-id="${employee.id}">Delete</button>
            </div>
        `;

        employeeList.appendChild(employeeDiv);
    });

    attachEventListeners(); // Attach event listener after creating elements
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

// Form submission handler
const employeeForm = document.getElementById('employee-form');
const submitBtn = document.getElementById('submit-btn');

employeeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const position = document.getElementById('position').value;
    const department = document.getElementById('department').value;

    if (editingEmployeeId) {
        // Update existing employee
        const employeeIndex = employees.findIndex(emp => emp.id === editingEmployeeId);
        if (employeeIndex !== -1) {
            employees[employeeIndex] = {
                ...employees[employeeIndex],
                name,
                position,
                department
            };
        }
        editingEmployeeId = null;
        submitBtn.textContent = 'Add Employee';
    } else {
        // Add new employee
        const newEmployee = {
            id: Date.now(), // Using timestamp as unique ID
            name,
            position,
            department,
            isActive: true
        };
        employees.push(newEmployee);
    }

    employeeForm.reset();
    displayEmployees(employees);
});

// Edit functionality
function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        document.getElementById('name').value = employee.name;
        document.getElementById('position').value = employee.position;
        document.getElementById('department').value = employee.department;
        editingEmployeeId = id;
        submitBtn.textContent = 'Update Employee';
    }
}

// Delete functionality
function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        displayEmployees(employees);
    }
}

// Update event listeners
function attachEventListeners() {
    // Existing toggle status listeners
    attachToggleEvent();
    
    // Edit button listeners
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            editEmployee(id);
        });
    });

    // Delete button listeners
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            if (confirm('Are you sure you want to delete this employee?')) {
                deleteEmployee(id);
            }
        });
    });
}

// Initial display of employees
displayEmployees(employees);
logEmployeeNames();
