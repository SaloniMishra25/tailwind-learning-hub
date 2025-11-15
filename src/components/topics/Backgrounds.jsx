export default function Backgrounds() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-4xl font-bold text-center">Background Utilities</h1>

      {/* BACKGROUND COLOR */}
      <section className="p-4 border rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Background Colors</h2>

        <div className="flex gap-4">
          <div className="w-24 h-16 bg-red-400 rounded-md flex items-center justify-center text-white">
            red-400
          </div>
          <div className="w-24 h-16 bg-green-400 rounded-md flex items-center justify-center text-white">
            green-400
          </div>
          <div className="w-24 h-16 bg-blue-400 rounded-md flex items-center justify-center text-white">
            blue-400
          </div>
        </div>
      </section>

      {/* BACKGROUND IMAGE */}
      <section className="p-4 border rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Background Image</h2>

        <div
          className="h-40 bg-cover bg-center rounded-xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=60')",
          }}
        >
          <p className="text-white bg-black bg-opacity-40 p-2 rounded-b-xl">
            bg-cover bg-center
          </p>
        </div>

        <div
          className="h-40 bg-contain bg-no-repeat rounded-xl border"
          style={{
            backgroundImage:
              "url('https://tailwindcss.com/img/card-top.jpg')",
          }}
        ></div>
      </section>

      {/* BACKGROUND SIZE */}
      <section className="p-4 border rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Background Size</h2>

        <div className="space-y-4">
          <div
            className="h-32 bg-auto bg-no-repeat border rounded-lg"
            style={{
              backgroundImage: "url('https://tailwindcss.com/img/card-top.jpg')",
            }}
          >
            <p className="bg-white bg-opacity-70 w-fit p-1">bg-auto</p>
          </div>

          <div
            className="h-32 bg-cover border rounded-lg"
            style={{
              backgroundImage: "url('https://tailwindcss.com/img/card-top.jpg')",
            }}
          >
            <p className="bg-white bg-opacity-70 w-fit p-1">bg-cover</p>
          </div>

          <div
            className="h-32 bg-contain bg-no-repeat border rounded-lg"
            style={{
              backgroundImage: "url('https://tailwindcss.com/img/card-top.jpg')",
            }}
          >
            <p className="bg-white bg-opacity-70 w-fit p-1">bg-contain</p>
          </div>
        </div>
      </section>

      {/* BACKGROUND POSITION */}
      <section className="p-4 border rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Background Position</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div
            className="h-32 bg-[url('https://tailwindcss.com/img/card-top.jpg')] bg-left bg-cover rounded-lg border"
          >
            <p className="bg-white bg-opacity-70 w-fit p-1 ml-1">bg-left</p>
          </div>

          <div
            className="h-32 bg-[url('https://tailwindcss.com/img/card-top.jpg')] bg-center bg-cover rounded-lg border"
          >
            <p className="bg-white bg-opacity-70 w-fit p-1 ml-1">bg-center</p>
          </div>

          <div
            className="h-32 bg-[url('https://tailwindcss.com/img/card-top.jpg')] bg-right bg-cover rounded-lg border"
          >
            <p className="bg-white bg-opacity-70 w-fit p-1 ml-1">bg-right</p>
          </div>
        </div>
      </section>

      {/* BACKGROUND REPEAT */}
      <section className="p-4 border rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Background Repeat</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div
            className="h-32 bg-repeat border rounded-lg"
            style={{
              backgroundImage:
                "url('https://tailwindcss.com/img/tailwind-logo.svg')",
            }}
          >
            <p className="bg-white bg-opacity-70 w-fit p-1 ml-1">bg-repeat</p>
          </div>

          <div
            className="h-32 bg-no-repeat border rounded-lg"
            style={{
              backgroundImage:
                "url('https://tailwindcss.com/img/tailwind-logo.svg')",
            }}
          >
            <p className="bg-white bg-opacity-70 w-fit p-1 ml-1">bg-no-repeat</p>
          </div>

          <div
            className="h-32 bg-repeat-x border rounded-lg"
            style={{
              backgroundImage:
                "url('https://tailwindcss.com/img/tailwind-logo.svg')",
            }}
          >
            <p className="bg-white bg-opacity-70 w-fit p-1 ml-1">bg-repeat-x</p>
          </div>

          <div
            className="h-32 bg-repeat-y border rounded-lg"
            style={{
              backgroundImage:
                "url('https://tailwindcss.com/img/tailwind-logo.svg')",
            }}
          >
            <p className="bg-white bg-opacity-70 w-fit p-1 ml-1">bg-repeat-y</p>
          </div>
        </div>
      </section>

      {/* BACKGROUND ATTACHMENT */}
      <section className="p-4 border rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Background Attachment</h2>

        <div
          className="h-48 bg-fixed bg-cover rounded-lg border"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=60')",
          }}
        >
          <p className="bg-white bg-opacity-60 w-fit p-1">bg-fixed</p>
        </div>
      </section>

      {/* BACKGROUND CLIP */}
      <section className="p-4 border rounded-xl space-y-3">
        <h2 className="text-2xl font-semibold">Background Clip</h2>

        <div className="p-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-3xl font-bold">
          bg-clip-text example
        </div>

        <div className="border-4 border-purple-500 p-4 bg-purple-300 bg-clip-border">
          bg-clip-border box
        </div>

        <div className="border-4 border-red-500 p-4 bg-red-300 bg-clip-content">
          bg-clip-content box
        </div>
      </section>

    </div>
  );
}
