import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button.jsx";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-950 p-6 shadow-lg flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold mb-8 text-emerald-500">MAXDAR</div>
          <nav>
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-md transition-colors ${
                      isActive
                        ? "bg-emerald-700 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/admin/productos"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-md transition-colors ${
                      isActive
                        ? "bg-emerald-700 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }`
                  }
                >
                  Productos
                </NavLink>
              </li>
              {/* Add more admin links here */}
            </ul>
          </nav>
        </div>
        <Button onClick={handleLogout} variant="outline" className="w-full">
          Cerrar sesión
        </Button>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
