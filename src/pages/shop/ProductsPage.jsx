import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Filter } from "lucide-react";
import { ProductSidebar } from "@/components/products/ProductSidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Mock Data Enhancement
const categories = ["Tecnología", "Hogar", "Oficina", "Industrial", "Automotriz", "Jardinería", "Salud y Belleza", "Juguetes y Juegos", "Deportes"];
const allProducts = Array.from({ length: 120 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Producto ${i + 1}`,
  description: `Descripción del producto de ejemplo ${i + 1}.`,
  price: (Math.random() * 200 + 20).toFixed(2),
  category: categories[i % categories.length],
  imageUrl: `https://picsum.photos/seed/product${i + 1}/400/300`,
}));

const PRODUCTS_PER_PAGE = 12;

export function ProductsPage() {
  const { addToCart } = useCart();
  const [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const selectedCategory = searchParams.get("category");

  const filteredProducts = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts;

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  
  // Reset to page 1 when category changes
  useState(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-foreground">
          {selectedCategory || "Todos los Productos"}
        </h1>
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" /> Filtros
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    <ProductSidebar />
                </SheetContent>
            </Sheet>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <ProductSidebar />
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
            {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {paginatedProducts.map((product) => (
                    <Card
                        key={product.id}
                        className="group flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* Imagen */}
                        <div className="relative">
                            <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Contenido */}
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base font-semibold text-gray-900 line-clamp-1">
                            {product.name}
                            </CardTitle>
                            <CardDescription className="text-xs">{product.category}</CardDescription>
                        </CardHeader>

                        <CardContent className="flex-grow flex items-end">
                            <p className="text-xl font-bold text-gray-900">
                                ${product.price}
                            </p>
                        </CardContent>

                        {/* Footer */}
                        <CardFooter className="flex gap-2 bg-gray-50/70 p-2">
                            <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="w-full"
                            >
                            <Link to={`/products/${product.id}`}>Detalles</Link>
                            </Button>
                            <Button
                            size="sm"
                            className="w-full"
                            onClick={() => addToCart(product)}
                            >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Agregar
                            </Button>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-muted-foreground">No se encontraron productos en esta categoría.</p>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-12">
                    <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                    >
                    Anterior
                    </Button>
                    <span className="text-sm text-muted-foreground">
                    Página {currentPage} de {totalPages}
                    </span>
                    <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    >
                    Siguiente
                    </Button>
                </div>
            )}
        </div>
      </div>
    </div>
  );
}
