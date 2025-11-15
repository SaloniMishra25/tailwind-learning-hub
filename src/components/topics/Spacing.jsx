export default function Spacing() {
  return (
    <div className="space-y-8 p-6">

      {/* Section Title */}
      <h1 className="text-3xl font-bold text-gray-800">Spacing Utilities</h1>
      <p className="text-gray-600">
        Tailwind provides margin (<b>m</b>) and padding (<b>p</b>) utilities to control spacing.
      </p>

      {/* Margin Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Margin Examples</h2>

        <div className="bg-gray-100 p-4 rounded-lg space-y-4">

          <div className="bg-blue-100 p-3">
            <div className="bg-blue-500 text-white p-2 w-fit m-0">m-0</div>
          </div>

          <div className="bg-blue-100 p-3">
            <div className="bg-blue-500 text-white p-2 w-fit m-4">m-4 (16px)</div>
          </div>

          <div className="bg-blue-100 p-3">
            <div className="bg-blue-500 text-white p-2 w-fit mx-auto">mx-auto (centered)</div>
          </div>

        </div>
      </section>

      {/* Padding Examples */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Padding Examples</h2>

        <div className="bg-gray-100 p-4 rounded-lg space-y-4">

          <div className="bg-green-500 text-white p-2 w-fit">p-2</div>
          <div className="bg-green-500 text-white p-4 w-fit">p-4</div>
          <div className="bg-green-500 text-white px-6 py-2 w-fit">
            px-6 py-2 (horizontal & vertical)
          </div>

        </div>
      </section>

    </div>
  );
}
