# User Feedback Form - JavaScript Enhancement

## Overview
This project enhances the existing **User Feedback Form** with JavaScript functionality, adding validation, form submission handling, and score calculation. The JavaScript code ensures correct user input and provides real-time feedback.

## Features
- **Form Validation:**
  - Checks if the name field is empty.
  - Ensures the email contains `@` for basic validation.
  - Ensures a satisfaction option (Yes/No) is selected.
  - Displays error messages in the console and alerts the user if validation fails.

- **Score Calculation:**
  - Simulates user ratings for three features (each rated between 1-5).
  - Calculates the **total score** and **average rating**.
  - Displays the computed values in the console and an alert.

- **Debugging & Logging:**
  - Uses `console.log()` to output user inputs and validation errors.
  - Helps identify issues by logging validation failures in the browser console.

## Files Included
1. **`feedback_form.html`** – The feedback form with a **navigation bar**.
2. **`styles.css`** – The updated styling with a **top-positioned navbar**.
3. **`feedback.js`** – JavaScript file handling validation, logging, and calculations.
4. **`README.md`** – Documentation explaining the project and its functionality.

## How It Works
1. Open `feedback_form.html` in a browser.
2. Fill in the **name**, **email**, and **satisfaction** fields.
3. Click the **Submit** button.
4. If validation fails, an alert will notify the user.
5. If validation succeeds, the system logs:
   - User details (Name, Email, Satisfaction)
   - Feature ratings and calculated average score
6. The **average rating** is displayed in an alert.

## JavaScript Functionality
- **`validateForm(event)`**: Prevents invalid form submission, performs checks, and logs errors.
- **`calculateTotalScore()`**: Generates three feature ratings, computes **total** and **average** scores.
- **`console.log()` Debugging**: Helps developers track inputs, calculations, and validation failures.

## Installation & Usage
1. Clone the repository or download the files.
2. Open `feedback_form.html` in a browser.
3. Inspect the console using `F12` (Developer Tools → Console) for logs.
4. Submit the form to trigger validation and score calculation.

## Challenges & Solutions
- **Challenge:** Handling empty inputs effectively.
  - **Solution:** Used `.trim()` to remove whitespace before validation.
  
- **Challenge:** Ensuring users select a satisfaction option.
  - **Solution:** Checked for a selected radio button before proceeding.

- **Challenge:** Providing meaningful error messages.
  - **Solution:** Used `alert()` for user feedback and `console.error()` for debugging.


