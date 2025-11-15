export default function Layout() {
  return (
    <div className="space-y-8 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Layout Utilities</h1>

      {/* Container */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Container</h2>
        <div className="container mx-auto p-4 bg-gray-100 rounded-lg">
          I am inside a <code>container</code> class. I am centered.
        </div>
      </section>

      {/* Display */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Display</h2>
        <div className="space-x-3">
          <span className="inline bg-blue-200 px-2 py-1">inline</span>
          <span className="block bg-blue-400 text-white px-2 py-1">block</span>
          <span className="inline-block bg-blue-600 text-white px-2 py-1">
            inline-block
          </span>
        </div>
      </section>

      {/* Position */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Position</h2>
        <div className="relative bg-gray-200 h-24 rounded-lg">
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">
            absolute
          </div>
        </div>
      </section>

    </div>
  );
}
