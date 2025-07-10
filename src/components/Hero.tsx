import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.webp";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vamos Expeditions Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-tertiary/90 via-tertiary/70 to-primary/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
              Sistema de Gestión Turística
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Revoluciona tu
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gestión Turística
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl leading-relaxed">
            Automatiza reservas, genera cotizaciones y controla costos con
            nuestro sistema integral diseñado específicamente para Vamos
            Expeditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group"
            >
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary bg-primary-foreground/10 px-8 py-4 text-lg backdrop-blur-sm"
            >
              <a href="https://vamosexpeditions.netlify.app/login">
                
                Ver Demo
              </a>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                500+
              </div>
              <div className="text-primary-foreground/80">
                Reservas Automatizadas
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                95%
              </div>
              <div className="text-primary-foreground/80">
                Reducción de Errores
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">
                24/7
              </div>
              <div className="text-primary-foreground/80">Disponibilidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
