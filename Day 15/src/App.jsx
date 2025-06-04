export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyLogo</div>
        <nav className="space-x-4 hidden sm:block">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-grow p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Page</h1>
        <p className="text-gray-700 mb-6">
          This is a simple responsive page built using Tailwind CSS with React and Vite.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Click Me
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center text-sm p-4">
        © 2025 MyWebsite. All rights reserved.
      </footer>
    </div>
  );
}
