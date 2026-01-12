import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const categories = [
  {
    name: "Tecnología",
    imageUrl: "https://picsum.photos/seed/tech/600/400",
    path: "/products?category=tecnologia",
  },
  {
    name: "Oficina",
    imageUrl: "https://picsum.photos/seed/office/600/400",
    path: "/products?category=oficina",
  },
  {
    name: "Industrial",
    imageUrl: "https://picsum.photos/seed/industrial/600/400",
    path: "/products?category=industrial",
  },
  {
    name: "Hogar",
    imageUrl: "https://picsum.photos/seed/home/600/400",
    path: "/products?category=hogar",
  },
];

export function CategorySection() {
  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Explora Nuestras Categorías
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link to={category.path} key={category.name}>
              <Card className="overflow-hidden group relative">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
