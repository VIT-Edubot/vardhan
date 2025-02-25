# Feedback Form - LaunchDarkly

## Structure and Organization
The `feedback_form.html` file is structured using semantic HTML elements for readability and accessibility:

- **Header (`<header>`)**: Displays the title "User Feedback Form."
- **Navigation (`<nav>`)**: Includes links to different sections of the employee portal.
- **Feedback Form (`<section>`, `<article>`)**: Contains the following elements:
  - **Text Input**: User's name (`<input type="text">`)
  - **Email Input**: User's email (`<input type="email">`)
  - **Radio Buttons**: User satisfaction (`Yes` or `No`)
  - **Dropdown (`<select>`)**: Choice of preferred feature
  - **Textarea (`<textarea>`)**: Additional comments
  - **Submit Button (`<button type="submit">`)**: Submits the form
- **Media Embedding**:
  - **Video (`<video>`)**: Placeholder tutorial video
  - **Audio (`<audio>`)**: System update sound
- **Footer (`<footer>`)**: Copyright notice

## Challenges and Solutions

- **Form Validation**: Used `required` attributes for essential fields to ensure data submission.
- **Proper Labeling**: Ensured each input field has a corresponding `<label>` for accessibility.
- **Semantic HTML**: Used `<section>`, `<article>`, `<header>`, and `<footer>` for better structure.
- **Media Support**: Included fallback text for browsers that do not support `<video>` and `<audio>`.

