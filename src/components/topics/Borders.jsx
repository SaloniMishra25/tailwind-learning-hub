export default function Borders() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-4xl font-bold text-center">Border Utilities</h1>

      {/* BORDER WIDTH */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Border Width</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-black p-2 text-center">border</div>
          <div className="border-2 border-black p-2 text-center">border-2</div>
          <div className="border-4 border-black p-2 text-center">border-4</div>
          <div className="border-8 border-black p-2 text-center">border-8</div>
        </div>
      </section>

      {/* BORDER COLOR */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Border Colors</h2>

        <div className="flex gap-4">
          <div className="border-4 border-red-500 w-24 h-16 rounded-md flex items-center justify-center text-xs">
            red
          </div>
          <div className="border-4 border-green-500 w-24 h-16 rounded-md flex items-center justify-center text-xs">
            green
          </div>
          <div className="border-4 border-blue-500 w-24 h-16 rounded-md flex items-center justify-center text-xs">
            blue
          </div>
          <div className="border-4 border-purple-500 w-24 h-16 rounded-md flex items-center justify-center text-xs">
            purple
          </div>
        </div>
      </section>

      {/* BORDER RADIUS */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Border Radius</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="border rounded-none p-4">rounded-none</div>
          <div className="border rounded-sm p-4">rounded-sm</div>
          <div className="border rounded-md p-4">rounded-md</div>
          <div className="border rounded-lg p-4">rounded-lg</div>
          <div className="border rounded-xl p-4">rounded-xl</div>
          <div className="border rounded-2xl p-4">rounded-2xl</div>
          <div className="border rounded-full p-4">rounded-full</div>
        </div>
      </section>

      {/* INDIVIDUAL BORDERS */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Individual Sides</h2>

        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="border-t-4 border-black p-4">border-t-4</div>
          <div className="border-r-4 border-black p-4">border-r-4</div>
          <div className="border-b-4 border-black p-4">border-b-4</div>
          <div className="border-l-4 border-black p-4">border-l-4</div>
        </div>
      </section>

      {/* DIVIDER & SPLIT */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Divide (Between Elements)</h2>

        <div className="border rounded-lg divide-y divide-gray-500">
          <p className="p-3">Item 1</p>
          <p className="p-3">Item 2</p>
          <p className="p-3">Item 3</p>
        </div>
      </section>

      {/* OUTLINE */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Outline</h2>

        <button className="p-2 border rounded-md outline outline-2 outline-blue-500">
          outline-blue-500
        </button>

        <button className="p-2 border rounded-md outline outline-offset-4 outline-red-500 ml-4">
          outline-offset-4
        </button>
      </section>

      {/* RING */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Ring (Special Border)</h2>

        <div className="flex gap-6">
          <div className="w-16 h-16 bg-white rounded-full ring-2 ring-blue-500"></div>
          <div className="w-16 h-16 bg-white rounded-full ring-4 ring-purple-500"></div>
          <div className="w-16 h-16 bg-white rounded-full ring-8 ring-red-500"></div>
        </div>
      </section>

      {/* BORDER STYLE */}
      <section className="p-4 border rounded-xl space-y-4">
        <h2 className="text-2xl font-semibold">Border Style</h2>

        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="border border-solid p-4">border-solid</div>
          <div className="border border-dashed p-4">border-dashed</div>
          <div className="border border-dotted p-4">border-dotted</div>
          <div className="border border-double p-4">border-double</div>
        </div>
      </section>

    </div>
  );
}

