export default function TransformAnimation() {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Transforms & Animation</h1>

      {/* Transform */}
      <section>
        <h2 className="text-xl font-semibold">Transforms</h2>
        <div className="flex space-x-6">
          <div className="w-24 h-24 bg-purple-500 text-white flex items-center justify-center transform hover:scale-110 transition">
            Scale
          </div>

          <div className="w-24 h-24 bg-teal-500 text-white flex items-center justify-center transform hover:rotate-6 transition">
            Rotate
          </div>
        </div>
      </section>

      {/* Animation */}
      <section>
        <h2 className="text-xl font-semibold">Animations</h2>
        <div className="flex space-x-6">
          <div className="w-24 h-24 bg-pink-500 animate-bounce text-white flex items-center justify-center rounded-lg">
            Bounce
          </div>
          <div className="w-24 h-24 bg-yellow-500 animate-spin rounded-full"></div>
        </div>
      </section>
    </div>
  );
}
