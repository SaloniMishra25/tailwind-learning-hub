export default function FlexboxGrid() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Flexbox & Grid</h1>

      {/* Flexbox */}
      <section>
        <h2 className="text-xl font-semibold">Flexbox</h2>
        <div className="flex space-x-4 bg-gray-100 p-4 rounded-lg">
          <div className="bg-blue-400 text-white p-3 rounded">1</div>
          <div className="bg-blue-500 text-white p-3 rounded">2</div>
          <div className="bg-blue-600 text-white p-3 rounded">3</div>
        </div>
      </section>

      {/* Grid */}
      <section>
        <h2 className="text-xl font-semibold">Grid Layout</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-400 p-3 text-white rounded">A</div>
          <div className="bg-green-500 p-3 text-white rounded">B</div>
          <div className="bg-green-600 p-3 text-white rounded">C</div>
        </div>
      </section>

    </div>
  );
}
