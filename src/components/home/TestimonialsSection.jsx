import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ana García",
    title: "Gerente de Compras",
    quote: "La calidad de los productos y la eficiencia en la entrega han superado nuestras expectativas. Totalmente recomendados.",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    title: "Jefe de Operaciones",
    quote: "Un servicio al cliente excepcional y una plataforma muy fácil de usar. Han optimizado nuestra cadena de suministro.",
    avatar: "https://i.pravatar.cc/150?img=2",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    title: "Emprendedora",
    quote: "Encontré todo lo que necesitaba para mi nuevo negocio en un solo lugar. ¡Una solución integral y confiable!",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
];

const renderStars = (rating) => {
  return (
    <div className="flex gap-0.5 text-yellow-500">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-5 w-5 fill-current" />
      ))}
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="text-left">
              <CardHeader>
                {renderStars(testimonial.rating)}
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-foreground/80">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
