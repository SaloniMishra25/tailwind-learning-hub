export default function Typography() {
  return (
    <div className="p-6 space-y-10">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center">Typography Examples</h1>

      {/* SECTION 1 – FONT FAMILY */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Font Family</h2>

        <p className="font-sans">
          <span className="font-bold">font-sans:</span> The quick brown fox jumps over the lazy dog.
        </p>
        <p className="font-serif mt-3">
          <span className="font-bold">font-serif:</span> The quick brown fox jumps over the lazy dog.
        </p>
        <p className="font-mono mt-3">
          <span className="font-bold">font-mono:</span> The quick brown fox jumps over the lazy dog.
        </p>
      </section>

      {/* SECTION 2 – FONT SIZES */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Font Size</h2>

        <p className="text-xs"><b>text-xs:</b> Tiny text example.</p>
        <p className="text-sm"><b>text-sm:</b> Small text example.</p>
        <p className="text-base"><b>text-base:</b> Default size text example.</p>
        <p className="text-lg"><b>text-lg:</b> Large text example.</p>
        <p className="text-xl"><b>text-xl:</b> Extra large text example.</p>
        <p className="text-3xl"><b>text-3xl:</b> Very large text example.</p>
      </section>

      {/* SECTION 3 – FONT WEIGHT */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Font Weight</h2>

        <p className="font-thin"><b>font-thin:</b> Thin weight text.</p>
        <p className="font-light"><b>font-light:</b> Light weight text.</p>
        <p className="font-normal"><b>font-normal:</b> Normal weight text.</p>
        <p className="font-medium"><b>font-medium:</b> Medium weight text.</p>
        <p className="font-semibold"><b>font-semibold:</b> Semi-bold text.</p>
        <p className="font-bold"><b>font-bold:</b> Bold text.</p>
        <p className="font-extrabold"><b>font-extrabold:</b> Extra-bold text.</p>
      </section>

      {/* SECTION 4 – FONT STYLE */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Font Style</h2>

        <p className="italic"><b>italic:</b> This text is italic.</p>
        <p className="not-italic"><b>not-italic:</b> This text is normal.</p>
      </section>

      {/* SECTION 5 – LETTER SPACING */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Letter Spacing</h2>

        <p className="tracking-tight"><b>tracking-tight:</b> Tight spacing.</p>
        <p className="tracking-normal"><b>tracking-normal:</b> Normal spacing.</p>
        <p className="tracking-wide"><b>tracking-wide:</b> Wide spacing.</p>
      </section>

      {/* SECTION 6 – LINE HEIGHT */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Line Height</h2>

        <p className="leading-none"><b>leading-none:</b> Very tight line height.</p>
        <p className="leading-tight"><b>leading-tight:</b> Tight line height.</p>
        <p className="leading-normal"><b>leading-normal:</b> Normal line height.</p>
        <p className="leading-loose"><b>leading-loose:</b> Loose line height.</p>
      </section>

      {/* SECTION 7 – TEXT ALIGN */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Text Alignment</h2>

        <p className="text-left"><b>text-left:</b> Left aligned.</p>
        <p className="text-center"><b>text-center:</b> Center aligned.</p>
        <p className="text-right"><b>text-right:</b> Right aligned.</p>
      </section>

      {/* SECTION 8 – TEXT COLORS */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Text Colors</h2>

        <p className="text-red-500"><b>text-red-500:</b> Red text.</p>
        <p className="text-green-500"><b>text-green-500:</b> Green text.</p>
        <p className="text-blue-500"><b>text-blue-500:</b> Blue text.</p>
      </section>

      {/* SECTION 9 – TEXT DECORATION */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Text Decoration</h2>

        <p className="underline"><b>underline:</b> Underlined text.</p>
        <p className="line-through"><b>line-through:</b> Strikethrough text.</p>
        <p className="overline"><b>overline:</b> Overline text.</p>
        <p className="no-underline"><b>no-underline:</b> No decoration.</p>
      </section>

      {/* SECTION 10 – TEXT TRANSFORM */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Text Transform</h2>

        <p className="uppercase"><b>uppercase:</b> uppercase text</p>
        <p className="lowercase"><b>lowercase:</b> LOWERCASE TEXT</p>
        <p className="capitalize"><b>capitalize:</b> capitalize this sentence</p>
      </section>

      {/* SECTION 11 – TEXT OVERFLOW */}
      <section className="p-4 border rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Text Overflow</h2>

        <div className="w-40 truncate bg-gray-100 p-2">
          <b>truncate:</b> This is a long line of text that will truncate…
        </div>
      </section>

    </div>
  );
}
