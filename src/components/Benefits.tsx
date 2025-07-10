import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Target, 
  Zap, 
  TrendingUp,
  Award,
  Globe
} from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Eficiencia Operativa",
      description: "Automatiza procesos manuales y reduce el tiempo de gestión hasta en un 80%.",
      stat: "80%",
      statLabel: "Menos tiempo"
    },
    {
      icon: Target,
      title: "Precisión Mejorada",
      description: "Elimina errores humanos en cálculos de costos y generación de cotizaciones.",
      stat: "95%",
      statLabel: "Menos errores"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento del Negocio",
      description: "Mejora la calidad del servicio y aumenta la satisfacción del cliente.",
      stat: "45%",
      statLabel: "Más reservas"
    },
    {
      icon: Award,
      title: "Calidad Superior",
      description: "Ofrece un servicio profesional que te posiciona como líder en el sector.",
      stat: "98%",
      statLabel: "Satisfacción"
    },
    {
      icon: Globe,
      title: "Escalabilidad Global",
      description: "Sistema preparado para expandir tu negocio a nivel latinoamericano.",
      stat: "∞",
      statLabel: "Potencial"
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beneficios Transformadores
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre cómo nuestro sistema revolucionará tu empresa turística y te ayudará 
            a alcanzar nuevos niveles de éxito en el mercado latinoamericano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-muted-foreground mb-4">
                  {benefit.description}
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-primary">{benefit.stat}</span>
                  <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.slice(3).map((benefit, index) => (
            <Card key={index + 3} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-tertiary rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-muted-foreground mb-4">
                  {benefit.description}
                </CardDescription>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-primary">{benefit.stat}</span>
                  <span className="text-sm text-muted-foreground">{benefit.statLabel}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Methodology Section */}
        <div className="bg-gradient-to-r from-primary to-tertiary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Metodología Ágil Scrum
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Desarrollamos tu sistema utilizando metodología Scrum para garantizar entregas iterativas, 
            adaptabilidad constante y mejoras continuas basadas en tus necesidades específicas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Desarrollo Iterativo</h4>
              <p className="text-primary-foreground/80 text-sm">Entregas regulares con funcionalidades completas</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Adaptabilidad</h4>
              <p className="text-primary-foreground/80 text-sm">Ajustes basados en feedback continuo</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <CheckCircle className="h-8 w-8 text-primary-foreground mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-primary-foreground mb-2">Calidad Garantizada</h4>
              <p className="text-primary-foreground/80 text-sm">Testing continuo y mejoras constantes</p>
            </div>
          </div>

          <Button 
            size="lg" 
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Conocer Más sobre Nuestra Metodología
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;