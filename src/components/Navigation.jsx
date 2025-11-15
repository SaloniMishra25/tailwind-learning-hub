import { NavLink } from "react-router-dom";

export default function Navigation() {
  const links = [
    { name: "Getting Started", path: "/" },
    { name: "Typography", path: "/typography" },
    { name: "Background", path: "/background" },
    { name: "Borders", path: "/borders" },
    { name: "Spacing", path: "/spacing" },
    { name: "Layout", path: "/layout" },
    { name: "Effects", path: "/effects" },
    { name: "Transitions", path: "/transitions" },
    { name: "Transforms & Animation", path: "/transform" },
    { name: "Flexbox & Grid", path: "/flexgrid" },
    { name: "Tables", path: "/table" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed left-0 top-0 p-5 space-y-6">
      <h1 className="text-2xl font-bold">Tailwind Guide</h1>

      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
