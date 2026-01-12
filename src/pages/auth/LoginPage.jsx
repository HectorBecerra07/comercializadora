import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card.jsx";
import { Label } from "../../components/ui/label.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Button } from "../../components/ui/button.jsx";
import { login } from "../../api/auth.js";

const LoginPage = () => {
  // 👇 Credenciales por defecto
  const [email, setEmail] = useState("rivehect5@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (err) {
      // err puede ser string o un objeto
      const msg =
        typeof err === "string"
          ? err
          : err.message || err.error || "Credenciales inválidas";
      setError(msg);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-slate-50">
      <Card className="w-[360px] bg-white border-slate-200 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-slate-900">
            Iniciar sesión en{" "}
            <span className="text-emerald-600 font-semibold">MAXDAR</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-slate-800">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-slate-300 text-slate-900"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password" className="text-slate-800">
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white border-slate-300 text-slate-900"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white"
            >
              Entrar
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
