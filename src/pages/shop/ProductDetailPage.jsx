import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/context/CartContext";

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // In a real app, you'd fetch this data based on the id
  const product = {
    id: id,
    name: `Producto ${id}`,
    description:
      "Esta es una descripción detallada del producto. Aquí puedes encontrar información sobre sus características, beneficios, materiales y cualquier otro detalle relevante que los clientes necesiten saber antes de comprar. Nos esforzamos por ofrecer productos de la más alta calidad y un servicio excepcional.",
    price: (Math.random() * 100 + 10).toFixed(2),
    imageUrl: `https://picsum.photos/seed/${id}/600/400`,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="flex flex-col md:flex-row overflow-hidden shadow-sm bg-card border border-border">
        {/* Imagen */}
        <div className="md:w-1/2 bg-muted">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Información del producto */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <CardContent className="p-0">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="text-foreground/70 text-lg mb-6">
              {product.description}
            </p>

            <div className="flex items-center justify-between mb-6">
              <span className="text-3xl font-extrabold text-foreground/80">
                ${product.price}
              </span>
            </div>

            <Button
              size="lg"
              className="w-full"
              variant="secondary"
              onClick={() => addToCart(product)}
            >
              Añadir al Carrito
            </Button>
          </CardContent>

          {/* Detalles adicionales */}
          <div className="mt-8 border-t border-border pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Detalles Adicionales
            </h3>
            <ul className="list-disc list-inside text-foreground/70">
              <li>Envío rápido y seguro</li>
              <li>Garantía de satisfacción</li>
              <li>Soporte 24/7</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
