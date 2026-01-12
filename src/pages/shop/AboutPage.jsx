export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      
      <h1 className="text-4xl font-bold text-foreground mb-6 text-center">
        Sobre Nosotros
      </h1>
      
      <div className="bg-card shadow-sm border border-border rounded-lg p-8 mb-8">
        <p className="text-lg text-foreground/70 leading-relaxed">
          Bienvenido a Comercializadora, tu destino principal para productos de alta calidad y un servicio excepcional. Fundada en [Año de Fundación], nuestra misión ha sido siempre ofrecer a nuestros clientes una experiencia de compra inigualable, combinando innovación, diseño y funcionalidad en cada artículo que ofrecemos.
        </p>
        
        <p className="text-lg text-foreground/70 leading-relaxed mt-4">
          Creemos firmemente en la transparencia, la integridad y la satisfacción del cliente. Cada producto en nuestro catálogo es cuidadosamente seleccionado y probado para asegurar que cumple con los más altos estándares de calidad. Nos apasiona lo que hacemos y estamos comprometidos a construir relaciones duraderas con quienes confían en nosotros.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        <div className="bg-card shadow-sm border border-border rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Nuestra Visión
          </h2>
          <p className="text-foreground/70 leading-relaxed">
            Ser líderes en el mercado, reconocidos por nuestra excelencia en productos y nuestro compromiso inquebrantable con la satisfacción del cliente. Buscamos innovar constantemente y expandir nuestra oferta para satisfacer las necesidades cambiantes de nuestros consumidores.
          </p>
        </div>

        <div className="bg-card shadow-sm border border-border rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Nuestros Valores
          </h2>
          <ul className="list-disc list-inside text-foreground/70 leading-relaxed">
            <li><strong className="text-foreground">Calidad:</strong> Ofrecer solo lo mejor.</li>
            <li><strong className="text-foreground">Integridad:</strong> Actuar con honestidad y ética.</li>
            <li><strong className="text-foreground">Innovación:</strong> Buscar siempre nuevas y mejores soluciones.</li>
            <li><strong className="text-foreground">Cliente Primero:</strong> Poner las necesidades del cliente en el centro de todo.</li>
            <li><strong className="text-foreground">Sostenibilidad:</strong> Operar de manera responsable con el medio ambiente y la sociedad.</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Conoce a Nuestro Equipo
        </h2>
        <p className="text-lg text-foreground/70">
          Detrás de Comercializadora hay un equipo de profesionales apasionados dedicados a hacer tu experiencia de compra lo más placentera posible. ¡Estamos aquí para ayudarte!
        </p>
        {/* Espacio para futuras card de equipo */}
      </div>

    </div>
  );
}
