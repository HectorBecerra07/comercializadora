import { Link } from "react-router-dom";
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
import { ShoppingCart } from "lucide-react";

export function ProductsPage() {
  const { addToCart } = useCart();
  const products = Array.from({ length: 9 }, (_, i) => ({
    id: `${i + 1}`,
    name: `Producto de Ejemplo ${i + 1}`,
    description: `Breve descripción del producto de ejemplo ${i + 1}.`,
    price: (Math.random() * 100 + 10).toFixed(2),
    imageUrl: `https://picsum.photos/seed/product${i + 1}/400/300`,
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-foreground">
        Nuestros Productos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col bg-card border border-border shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <CardHeader>
              <CardTitle className="text-foreground">
                {product.name}
              </CardTitle>
              <CardDescription className="text-foreground/70">
                {product.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow">
              <p className="text-2xl font-bold text-foreground/80">
                ${product.price}
              </p>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button asChild variant="secondary">
                <Link to={`/products/${product.id}`}>Ver Detalles</Link>
              </Button>
              <Button onClick={() => addToCart(product)}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Agregar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
