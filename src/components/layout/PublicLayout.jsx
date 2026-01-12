import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import { Button } from "../ui/button.jsx";

const PublicLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="text-xl font-semibold tracking-tight">
              Comercializadora
            </span>
            <span className="text-xl font-semibold tracking-tight text-emerald-600">
              MAXDAR
            </span>
          </Link>

          <Button
            size="sm"
            className="bg-emerald-600 hover:bg-emerald-500 text-white"
            onClick={() => navigate("/login")}
          >
            Panel admin
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-10">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Comercializadora MAXDAR. Todos los
          derechos reservados.
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
