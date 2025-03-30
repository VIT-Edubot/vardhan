# Feedback Form - LaunchDarkly Assignment

## Overview
This project involves redesigning the feedback form page for the LaunchDarkly employee portal using CSS Flexbox for a responsive and flexible layout. The goal is to ensure the form is visually appealing and functional on both desktop and mobile devices.

## Approach
1. **Flexbox Layout:** 
    - The form and its container use `display: flex` to provide a flexible, responsive design.
    - Elements are arranged in a column using `flex-direction: column` and spaced using `gap: 15px`.

2. **Responsive Design with Media Queries:** 
    - For screens smaller than 768px, the layout adapts using media queries.
    - Elements are made to span 100% width to ensure mobile-friendliness.

3. **Styling Enhancements:** 
    - A modern design approach with centered elements, clean input styles, and a prominent submit button.
    - Hover effects on the submit button enhance interactivity.

## Challenges and Solutions
- **Challenge:** Maintaining consistent spacing and alignment across screen sizes.
- **Solution:** Utilized Flexbox properties like `justify-content`, `align-items`, and `gap` for consistency.

- **Challenge:** Making the form fully responsive.
- **Solution:** Used media queries to adjust the layout for mobile devices, ensuring full-width inputs and simplified navigation.

## How to Run
1. Open `feedback_form.html` in a browser.
2. Ensure `styles.css` is in the same directory for proper styling.
