import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-tertiary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">V</span>
              </div>
              <span className="text-xl font-bold">Vamos Expeditions</span>
            </div>
            <p className="text-tertiary-foreground/80 leading-relaxed">
              Revolucionando la gestión turística en Latinoamérica con tecnología de vanguardia 
              y soluciones integrales para tu empresa.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#caracteristicas" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Características</a></li>
              <li><a href="#beneficios" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Beneficios</a></li>
              <li><a href="#qr" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Código QR</a></li>
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Documentación</a></li>
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Soporte</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Gestión de Reservas</a></li>
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Cotizaciones PDF</a></li>
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Control de Costos</a></li>
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Reportes Analíticos</a></li>
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Autenticación Segura</a></li>
              <li><a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">Soporte 24/7</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-tertiary-foreground/80">info@vamosexpeditions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-tertiary-foreground/80">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-tertiary-foreground/80">Ciudad de México, México</span>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Contáctanos
            </Button>
          </div>
        </div>

        <Separator className="bg-tertiary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-tertiary-foreground/80 text-sm">
            © 2024 Vamos Expeditions. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-tertiary-foreground/80 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;