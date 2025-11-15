export default function GettingStarted() {
  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold text-gray-800">Getting Started</h1>

      <p className="text-lg text-gray-600">
        Follow these steps to create your Tailwind CSS + React + Vite project.
      </p>

      {/* STEP 1 */}
      <div className="p-6 border border-gray-300 rounded-xl bg-white">
        <h2 className="text-2xl font-semibold mb-2">1. Create Project</h2>
        <p className="text-gray-600 mb-3">Run this command:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
          <code>npm create vite@latest my-app --template react</code>
        </pre>
      </div>

      {/* STEP 2 */}
      <div className="p-6 border border-gray-300 rounded-xl bg-white">
        <h2 className="text-2xl font-semibold mb-2">2. Install Dependencies</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
          <code>cd my-app</code>
        </pre>
        <pre className="bg-gray-900 text-white p-4 rounded-lg mt-3">
          <code>npm install tailwindcss @tailwindcss/postcss postcss autoprefixer</code>
        </pre>
      </div>

      {/* STEP 3 */}
      <div className="p-6 border border-gray-300 rounded-xl bg-white">
        <h2 className="text-2xl font-semibold mb-2">3. Create Tailwind Files</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
          <code>npx tailwindcss init -p</code>
        </pre>
        <p className="mt-4 text-gray-600">
          Then open <b>tailwind.config.js</b> and add:
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`content: ["./index.html", "./src/**/*.{js,jsx}"],`}
        </pre>
      </div>

      {/* STEP 4 */}
      <div className="p-6 border border-gray-300 rounded-xl bg-white">
        <h2 className="text-2xl font-semibold mb-2">4. Add Tailwind to CSS</h2>
        <p className="text-gray-600 mb-3">Inside <b>src/index.css</b>:</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
{`@import "tailwindcss";`}
        </pre>
      </div>

      {/* STEP 5 */}
      <div className="p-6 border border-gray-300 rounded-xl bg-white">
        <h2 className="text-2xl font-semibold mb-2">5. Start Project</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-lg">
          <code>npm run dev</code>
        </pre>
      </div>

      <p className="text-gray-700 text-lg">
        You have successfully set up a Tailwind CSS + React project!  
        Use the sidebar to explore each topic in detail.
      </p>

    </div>
  );
}
