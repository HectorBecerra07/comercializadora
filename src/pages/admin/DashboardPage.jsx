import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card.jsx";
import { Badge } from "../../components/ui/badge.jsx";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-emerald-400 mb-6">
        Dashboard Comercializadora MAXDAR{" "}
        <Badge variant="outline" className="text-slate-300 border-slate-700">
          Admin
        </Badge>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-xl text-slate-200">Ventas del día</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-emerald-500">$2,450</p>
            <p className="text-slate-400">+15% respecto ayer</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-xl text-slate-200">Órdenes pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-yellow-500">12</p>
            <p className="text-slate-400">Total de 8 entregas</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-xl text-slate-200">Productos con stock bajo</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-red-500">5</p>
            <p className="text-slate-400">¡Necesitan reabastecimiento!</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card className="bg-slate-900/70 border-slate-800">
          <CardHeader>
            <CardTitle className="text-xl text-slate-200">Actividad reciente</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 text-slate-300">
              <li>Pedido #1001 enviado por Juan Pérez</li>
              <li>Nuevo producto "Televisor Smart" agregado por María García</li>
              <li>Stock de "Laptop Gamer" actualizado (20 unidades)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;