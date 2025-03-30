# LaunchDarkly Employee Directory - Advanced DOM Manipulation

## Overview
This project enhances the **LaunchDarkly Employee Directory** with **advanced DOM manipulation** features, including dynamic form handling, CRUD operations, and real-time UI updates.

---

### **1. Employee Data Management**
- Employee details stored as **array of objects**
- Enhanced with **CRUD operations**:
  - **Create**: Add new employees
  - **Read**: Display employee data
  - **Update**: Edit existing employees
  - **Delete**: Remove employees
  - **Toggle**: Update active status

### **2. Dynamic Form Interface**
- **Interactive form** for employee management:
  - Name input field
  - Position input field
  - Department input field
  - Dynamic submit button (Add/Update modes)

### **3. Enhanced Employee Cards**
- Dynamic display with **action buttons**:
  - Edit button
  - Delete button
  - Toggle Status button
- Real-time status updates
- Instant UI refresh on changes

### **4. Advanced Features**
| Feature | Description |
|---------|-------------|
| **Add Employee** | Create new employee records |
| **Edit Employee** | Modify existing employee data |
| **Delete Employee** | Remove employees with confirmation |
| **Filter Active** | Show only active employees |
| **Sort by Name** | Alphabetical sorting |

---

## Implementation Details

### **1. Form Management**
- Dynamic form state handling
- Toggle between Add/Edit modes
- Input validation
- Real-time updates

### **2. Event Handling**
- Form submission events
- Edit/Delete operations
- Status toggle functionality
- Dynamic event reattachment

### **3. DOM Manipulation**
- Dynamic card creation
- Real-time UI updates
- Form state management
- Event delegation

---

## Challenges & Solutions
| Challenge | Solution |
|-----------|----------|
| **Form State Management** | Implemented `editingEmployeeId` tracker |
| **Dynamic UI Updates** | Enhanced `displayEmployees()` function |
| **Event Delegation** | Improved `attachEventListeners()` |
| **Data Synchronization** | Real-time array and DOM updates |

---

## How to Run the Project
1. **Open `index.html` in a browser**
2. **Use the Employee Form**:
   - Add new employees
   - Edit existing employees
   - Delete employees
3. **Interact with Controls**:
   - Filter active employees
   - Sort by name
   - Toggle employee status
4. **Check browser console** (`F12` → Console) for operations log

---

## Future Enhancements
- Local storage integration
- Advanced form validation
- Search functionality
- Bulk operations
- Sorting by multiple criteria

---
