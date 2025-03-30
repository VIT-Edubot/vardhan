# LaunchDarkly Employee Directory - JavaScript Enhancement

## Overview
This project enhances the **LaunchDarkly Employee Directory** by leveraging **arrays, objects, basic DOM manipulation, and higher-order functions**. The system dynamically displays employee data, allows filtering of active employees, sorts employees alphabetically, and enables toggling of employee status.

---


### **1. Employee Data Management (Arrays & Objects)**
- Employee details are stored as an **array of objects**.
- Each employee object includes:
  - `id`, `name`, `position`, `department`, and `isActive` status.

### **2. Dynamic Employee Display (DOM Manipulation)**
- JavaScript dynamically creates and appends **employee cards** to the web page.
- Each card displays **name, position, department, and active status**.

### **3. Higher-Order Functions for Data Processing**
| Function | Purpose |
|----------|---------|
| **`filter()`** | Filters and displays **only active employees**. |
| **`sort()`** | Sorts employees **alphabetically by name**. |
| **`map()`** | Creates an array of employee names and logs it in the console. |

### **4. Toggle Active/Inactive Status (Event Handling)**
- Each employee card has a **"Toggle Status"** button.
- Clicking the button updates the **isActive** property.
- The UI updates instantly to reflect the new status.

### **5. Interactive Controls**
- **"Show Active Employees"** → Displays only active employees.
- **"Sort by Name"** → Arranges employees alphabetically.
- **"Toggle Status" Button** → Changes employee status dynamically.

---

## How It Works
1. **Employee data is stored** in an array of objects.
2. **On page load**, JavaScript populates the **employee list** dynamically.
3. Users can:
   - **Filter active employees** (using `filter()`).
   - **Sort employees alphabetically** (using `sort()`).
   - **Toggle employee status** (using event listeners).
4. **Updated data is reflected instantly** on the web page.

---

## Challenges & Solutions
| Challenge | Solution |
|-----------|----------|
| Ensuring the **UI updates after toggling status** | Used `displayEmployees()` to refresh the DOM dynamically. |
| Keeping **event listeners active** after DOM updates | Used `attachToggleEvent()` to reassign listeners. |
| Sorting employees **without modifying the original order** | Used `sort()` method directly on the `employees` array. |

---


## How to Run the Project
1. **Open `index.html` in a browser.**
2. **Interact with the buttons**:
   - Click **"Show Active Employees"** → Filters employees.
   - Click **"Sort by Name"** → Sorts employees alphabetically.
   - Click **"Toggle Status"** → Changes employee status dynamically.
3. **Check the browser console (`F12` → Console Tab)** for logged employee names.

---
