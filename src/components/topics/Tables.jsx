export default function Table() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Tables</h1>

      <table className="min-w-full border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Role</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">Saloni</td>
            <td className="border p-2">22</td>
            <td className="border p-2">Developer</td>
          </tr>

          <tr className="bg-gray-50">
            <td className="border p-2">Rahul</td>
            <td className="border p-2">23</td>
            <td className="border p-2">Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
