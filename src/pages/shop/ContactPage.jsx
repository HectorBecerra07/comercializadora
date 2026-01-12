import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
        Contáctanos
      </h1>

      <div className="max-w-3xl mx-auto bg-card shadow-sm rounded-lg p-8 border border-border">
        
        <p className="text-lg text-foreground/70 mb-6 text-center">
          ¿Tienes alguna pregunta, comentario o necesitas asistencia? No dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
        </p>

        <form className="space-y-6">
          <div>
            <Label htmlFor="name">Nombre Completo</Label>
            <Input id="name" type="text" placeholder="Tu nombre" />
          </div>

          <div>
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="tu@ejemplo.com" />
          </div>

          <div>
            <Label htmlFor="subject">Asunto</Label>
            <Input id="subject" type="text" placeholder="Asunto del mensaje" />
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              rows={5}
              placeholder="Escribe tu mensaje aquí..."
            />
          </div>

          <Button type="submit" className="w-full" variant="secondary">
            Enviar Mensaje
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Información de Contacto
          </h2>

          <p className="text-foreground/70">
            <strong className="text-foreground">Dirección:</strong> Calle Ficticia 123, Ciudad Ficticia, País Ficticio
          </p>

          <p className="text-foreground/70">
            <strong className="text-foreground">Teléfono:</strong> +1 (555) 123-4567
          </p>

          <p className="text-foreground/70">
            <strong className="text-foreground">Email:</strong> info@comercializadora.com
          </p>
        </div>

      </div>
    </div>
  );
}
