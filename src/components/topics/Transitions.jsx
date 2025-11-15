export default function Transitions() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Transitions</h1>

      <div className="space-x-4 flex">

        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105">
          Hover Me
        </button>

        <button className="px-6 py-2 bg-green-500 text-white rounded-lg transition duration-500 hover:rotate-3">
          Smooth Rotate
        </button>

      </div>
    </div>
  );
}
