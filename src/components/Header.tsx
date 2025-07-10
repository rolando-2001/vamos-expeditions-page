import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-tertiary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">V</span>
            </div>
            <span className="text-xl font-bold text-foreground">Vamos Expeditions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
            <a href="#caracteristicas" className="text-foreground hover:text-primary transition-colors">Características</a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">Beneficios</a>
            <a href="#qr" className="text-foreground hover:text-primary transition-colors">Código QR</a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
             <a href="https://vamosexpeditions.netlify.app/login" target="_blank" rel="noopener noreferrer">
              Comenzar
             </a>
              
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">Inicio</a>
              <a href="#caracteristicas" className="text-foreground hover:text-primary transition-colors">Características</a>
              <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">Beneficios</a>
              <a href="#qr" className="text-foreground hover:text-primary transition-colors">Código QR</a>
              <Button variant="default" className="bg-primary hover:bg-primary/90 w-full">
                Comenzar
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;