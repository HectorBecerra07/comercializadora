import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";

// Mock data for 500+ categories is not feasible, but we'll create a sizeable list to demonstrate functionality.
const allCategories = [
  "Tecnología", "Hogar", "Oficina", "Industrial", "Automotriz", "Jardinería",
  "Salud y Belleza", "Juguetes y Juegos", "Deportes", "Libros", "Música", "Películas",
  "Ropa y Accesorios", "Zapatos", "Joyería", "Electrónica de Consumo", "Computadoras",
  "Software", "Celulares", "Tablets", "Cámaras y Fotografía", "Audio y Video",
  "Muebles", "Decoración del Hogar", "Cocina y Comedor", "Ropa de Cama", "Baño",
  "Herramientas", "Iluminación", "Suministros de Oficina", "Mobiliario de Oficina",
  "Seguridad Industrial", "Materiales de Construcción", "Equipos Agrícolas",
  ...Array.from({ length: 50 }, (_, i) => `Categoría de Relleno ${i + 1}`) // Add 50 more generic categories
];
allCategories.sort();

export function ProductSidebar() {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const activeCategory = searchParams.get("category");

  const filteredCategories = allCategories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="lg:h-full lg:w-full lg:border-r">
        <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold">Categorías de Productos</h3>
            <Input
                type="search"
                placeholder="Buscar categoría..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="h-[60vh] overflow-y-auto">
                <ul className="space-y-1">
                    <li>
                        <Link
                            to="/products"
                            className={`block p-2 rounded-md text-sm transition-colors ${
                            !activeCategory
                                ? "bg-primary/10 text-primary font-semibold"
                                : "hover:bg-gray-100"
                            }`}
                        >
                            Todas las categorías
                        </Link>
                    </li>
                    {filteredCategories.map((category) => (
                    <li key={category}>
                        <Link
                        to={`/products?category=${encodeURIComponent(category)}`}
                        className={`block p-2 rounded-md text-sm transition-colors ${
                            activeCategory === category
                            ? "bg-primary/10 text-primary font-semibold"
                            : "hover:bg-gray-100"
                        }`}
                        >
                        {category}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </aside>
  );
}
