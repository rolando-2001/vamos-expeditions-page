import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Calendar, 
  FileText, 
  DollarSign, 
  BarChart3, 
  Shield, 
  Smartphone,
  Clock,
  Users,
  TrendingUp
} from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Gestión de Reservas",
      description: "Sistema automatizado para gestionar todas tus reservas turísticas de manera eficiente y sin errores."
    },
    {
      icon: FileText,
      title: "Cotizaciones Automáticas",
      description: "Genera cotizaciones profesionales en PDF de forma instantánea con todos los detalles del servicio."
    },
    {
      icon: DollarSign,
      title: "Control de Costos",
      description: "Monitorea y controla todos los costos operativos con reportes detallados y análisis financiero."
    },
    {
      icon: BarChart3,
      title: "Reportes Analíticos",
      description: "Obtén insights valiosos con dashboards interactivos para la toma de decisiones estratégicas."
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Sistema de autenticación robusto que protege toda la información de tu empresa y clientes."
    },
    {
      icon: Smartphone,
      title: "Acceso Móvil",
      description: "Gestiona tu negocio desde cualquier dispositivo con nuestra interfaz responsive y moderna."
    },
    {
      icon: Clock,
      title: "Tiempo Real",
      description: "Actualizaciones en tiempo real de reservas, disponibilidad y estados de servicios."
    },
    {
      icon: Users,
      title: "Multi-usuario",
      description: "Permite que tu equipo trabaje colaborativamente con diferentes niveles de acceso."
    },
    {
      icon: TrendingUp,
      title: "Escalabilidad",
      description: "Sistema diseñado para crecer con tu negocio, soportando miles de reservas simultáneas."
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro sistema integral está diseñado para transformar completamente la gestión 
            de tu empresa turística con tecnología de vanguardia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="bg-card rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Panel de Control Intuitivo
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Accede a toda la información importante desde un dashboard centralizado. 
                Visualiza métricas clave, gestiona reservas y controla tu negocio con una interfaz moderna y fácil de usar.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Dashboard en tiempo real
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Métricas de rendimiento
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Gestión centralizada
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src={dashboardPreview} 
                alt="Dashboard Preview" 
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;