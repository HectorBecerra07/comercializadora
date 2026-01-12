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
import { ShoppingCart, Truck, ShieldCheck, Clock } from "lucide-react";
import { CategorySection } from "@/components/home/CategorySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export function HomePage() {
  const { addToCart } = useCart();
  const featuredProducts = [
    {
      id: "1",
      name: "Producto Destacado 1",
      description:
        "Descubre la innovación y calidad en nuestro producto estrella.",
      price: "49.99",
      imageUrl: "https://picsum.photos/seed/product1/400/300",
    },
    {
      id: "2",
      name: "Producto Destacado 2",
      description:
        "Experimenta la diferencia con esta elección popular entre nuestros clientes.",
      price: "75.00",
      imageUrl: "https://picsum.photos/seed/product2/400/300",
    },
    {
      id: "3",
      name: "Producto Destacado 3",
      description: "Diseño elegante y funcionalidad superior, todo en uno.",
      price: "120.50",
      imageUrl: "https://picsum.photos/seed/product3/400/300",
    },
  ];

  const features = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Envío Rápido y Confiable",
      description:
        "Recibe tus productos en la puerta de tu casa en tiempo récord.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Calidad Garantizada",
      description:
        "Seleccionamos solo los mejores productos para asegurar tu satisfacción.",
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Soporte 24/7",
      description:
        "Nuestro equipo de soporte está disponible para ayudarte en cualquier momento.",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50/50">
      {/* Hero Section */}
      <section
        className="relative w-full h-[550px] bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "url('/img/logistica.avif')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Soluciones Integrales para tu Negocio
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Descubre productos de alta calidad diseñados para potenciar tu
            crecimiento y eficiencia.
          </p>
          <Button asChild size="lg" className="px-8 py-3 text-lg">
            <Link to="/products">Explorar Productos</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
<section className="w-full bg-gray-50 py-16 md:py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2">
          Selección recomendada
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
          Productos destacados
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl">
          Los favoritos de nuestros clientes por su rendimiento, calidad y
          relación costo-beneficio. Perfectos para impulsar tu operación.
        </p>
      </div>

      <Button asChild variant="outline" className="self-center md:self-end">
        <Link to="/products">Ver todo el catálogo</Link>
      </Button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.map((product) => (
        <Card
          key={product.id}
          className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Imagen */}
          <div className="relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-primary text-white px-2.5 py-0.5 text-[11px] font-medium shadow-sm">
              Destacado
            </span>
          </div>

          {/* Contenido */}
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">
              {product.name}
            </CardTitle>
            <CardDescription className="text-sm text-gray-600 line-clamp-2">
              {product.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex-grow flex flex-col justify-between pb-3">
            <div className="flex items-baseline justify-between mb-2">
              <p className="text-2xl font-bold text-gray-900">
                ${product.price}
              </p>
              <p className="text-xs text-gray-500">
                Precio antes de impuestos
              </p>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Envío en 24–72 hrs</span>
              <span>Stock disponible</span>
            </div>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex gap-2 bg-gray-50 px-4 py-3">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="w-full border-gray-300"
            >
              <Link to={`/products/${product.id}`}>Ver detalles</Link>
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
  </div>
</section>

    <CategorySection />

  {/* Features Section */}
<section className="w-full bg-white py-20 border-t border-b">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
      ¿Por Qué Elegirnos?
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-primary/10 p-4 rounded-full mb-4">
            {feature.icon}
          </div>

          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            {feature.title}
          </h3>

          <p className="text-gray-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

    <TestimonialsSection />

      {/* Call to Action Section */}
      <section className="w-full bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">
            Encuentra Todo lo que Necesitas
          </h2>
          <p className="text-xl mb-8">
            Tenemos una amplia gama de productos esperando por ti.
          </p>
          <Button
            asChild
            size="lg"
            className="px-10 py-4 text-lg bg-white text-gray-800 hover:bg-gray-200"
            variant="default"
          >
            <Link to="/products">Comprar Ahora</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
