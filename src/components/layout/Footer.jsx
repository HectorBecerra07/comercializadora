
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Marca y Redes Sociales */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Comercializadora</h3>
            <p className="text-gray-400">
              Tu socio confiable para productos de calidad y soluciones
              integrales.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navegación</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Inicio</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white">Productos</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">Sobre Nosotros</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Términos de Servicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Suscríbete al Boletín</h4>
            <p className="text-gray-400">
              Recibe ofertas y novedades directamente en tu correo.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit">Suscribir</Button>
            </div>
          </div>
        </div>

        {/* Barra inferior de Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Comercializadora. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
