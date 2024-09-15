import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="fixed top-20">
      <h3 className="text-xl font-semibold">Components</h3>
      <ul className="list-disc pl-5 mt-4">
        <li>
          <NavLink
            to="/alert"
            className={({ isActive, isPending }) =>
              isPending ? "text-indigo-300" : isActive ? "text-indigo-500" : ""
            }
          >
            Alert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/button"
            className={({ isActive, isPending }) =>
              isPending ? "text-indigo-300" : isActive ? "text-indigo-500" : ""
            }
          >
            Button
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/card"
            className={({ isActive, isPending }) =>
              isPending ? "text-indigo-300" : isActive ? "text-indigo-500" : ""
            }
          >
            Card
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/form"
            className={({ isActive, isPending }) =>
              isPending ? "text-indigo-300" : isActive ? "text-indigo-500" : ""
            }
          >
            Form
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/table"
            className={({ isActive, isPending }) =>
              isPending ? "text-indigo-300" : isActive ? "text-indigo-500" : ""
            }
          >
            Table
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
