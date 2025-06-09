# React ShadCN Modal Demo

## Overview

This project demonstrates how to integrate **ShadCN** pre-built UI components (Modal and Button) into a React application, styled with Tailwind CSS. The assignment focuses on building a responsive modal dialog with header, body, and footer, and managing its state using React hooks. The modal is fully accessible and customizable using Tailwind utility classes.

---

## 🚀 Setup Instructions

### 1. Create and Initialize the Project

```bash
npm create vite@latest react-shadcn-demo --template react
cd react-shadcn-demo
npm install
```

### 2. Install Dependencies

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npm install @shadcn/ui
```

### 3. Configure Tailwind CSS

Generate the `tailwind.config.js` and `postcss.config.js` files:

```bash
npx tailwindcss init -p
```

Update your `tailwind.config.js` file to include the paths to your template files and add the ShadCN UI components path:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 4. Add Tailwind CSS Directives

Add the Tailwind CSS directives to your main CSS file (e.g., `src/index.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Start the Development Server

```bash
npm run dev
```

---

## 📁 Project Structure

```
react-shadcn-demo
├── node_modules
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Button.tsx
│   │   └── Modal.tsx
│   └── index.tsx
├── index.html
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## 🧩 Components

### 1. Button

The `Button` component is a customizable button using ShadCN's button component. It accepts props for `variant`, `size`, and `onClick` handler.

**Example Usage:**

```tsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### 2. Modal

The `Modal` component is a responsive modal dialog that supports accessibility out of the box. It accepts props for `isOpen`, `onClose`, `title`, and `children`.

**Example Usage:**

```tsx
<Modal isOpen={isModalOpen} onClose={closeModal} title="My Modal">
  <p>This is the modal body content.</p>
</Modal>
```

---

## 🎨 Customization

Both the `Button` and `Modal` components can be easily customized using Tailwind CSS utility classes. You can extend the default styles or override them as needed.

---

## ⚙️ Configuration

Ensure that your development environment is set up with the necessary tools and dependencies. This includes Node.js, npm, and a code editor like Visual Studio Code.

---

## 🚧 Troubleshooting

If you encounter any issues during setup or development, consider the following steps:

1. Ensure all dependencies are correctly installed.
2. Check the browser console for any runtime errors.
3. Refer to the documentation for Vite, React, Tailwind CSS, and ShadCN for specific configuration or usage questions.

---

## 📚 References

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation)
- [ShadCN UI Documentation](https://ui.shadcn.com/docs/introduction)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make the necessary changes and commit them.
4. Push your branch and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👀 Acknowledgments

- Inspired by the need for accessible and customizable UI components in React applications.
- Leveraging Tailwind CSS for rapid UI development and design consistency.