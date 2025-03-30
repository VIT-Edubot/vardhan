# LaunchDarkly Feedback Form Styling

## Project Overview
This project enhances the feedback form created in the previous assignment by applying CSS styling to improve readability, layout, and responsiveness. The form is structured using semantic HTML and is styled with CSS to align with LaunchDarkly's design principles.

## File Structure
- feedback_form.html - The main HTML file containing the feedback form.
- styles.css - The external CSS file that styles the feedback form.

## Styling Techniques Used
1. *Typography:*
   - Applied a modern, web-safe font (Arial, sans-serif) for better readability.
   - Styled headings (h1, h2) with different font sizes and weights.

2. *Layout & Spacing:*
   - Used margin and padding to create appropriate spacing between elements.
   - Ensured form elements are evenly spaced and aligned for clarity.

3. *Form Styling:*
   - Input fields (text, email, textarea) have consistent padding, borders, and background colors.
   - Radio buttons (Yes, No) are displayed inline using display: flex; align-items: center; gap: 10px;.
   - The submit button is styled for better visibility and usability.

4. *Box Model Adjustments:*
   - Applied box-sizing: border-box; to ensure padding and borders do not overflow container widths.
   - Set a maximum width for the form to prevent excessive stretching on larger screens.

5. *Responsive Design:*
   - Used media queries to adjust form elements for smaller screens.
   - Ensured inputs stack vertically on mobile devices for better usability.

6. *Media Embedding:*
   - Centered the embedded video and audio elements.
   - Ensured they are responsive and do not exceed their container width.

## Challenges & Solutions
- *Radio Button Alignment:* Initially, the radio buttons appeared too far apart. This was fixed using a flexbox layout with a gap property.
- *Textarea Overflow:* The additional comments field was crossing the article boundary. This was resolved by setting width: 100%; max-width: 100%;.
- *Centering Media Elements:* The video and audio elements were aligned to the center using display: block; margin: auto;.

## Conclusion
This project demonstrates the use of CSS for structuring and enhancing a web form, ensuring accessibility, usability, and responsiveness.

