import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QrCode, Smartphone, Download, Share2, Scan, CheckCircle } from "lucide-react";
import qrImage from "@/assets/qr-section.jpg";

const QRSection = () => {
  return (
    <section id="qr" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Acceso Rápido con Código QR
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Facilita el acceso a tu sistema de gestión turística con nuestro código QR. 
            Escanea y accede instantáneamente desde cualquier dispositivo móvil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* QR Code Display */}
          <div className="text-center">
            <Card className="max-w-md mx-auto shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center justify-center">
                  <QrCode className="mr-2 h-6 w-6 text-primary" />
                  Código QR de Acceso
                </CardTitle>
                <CardDescription>
                  Escanea para acceder al sistema
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="bg-background p-6 rounded-lg shadow-inner mb-6">
                  <img 
                    src={qrImage} 
                    alt="QR Code for Vamos Expeditions System" 
                    className="w-full max-w-48 mx-auto rounded-lg"
                  />
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Descargar QR
                  </Button>
                  <Button variant="secondary" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Compartir
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions and Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Cómo Usar el Código QR
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Abre la Cámara</h4>
                    <p className="text-muted-foreground">Abre la aplicación de cámara en tu dispositivo móvil</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Escanea el QR</h4>
                    <p className="text-muted-foreground">Apunta la cámara hacia el código QR y espera a que se detecte</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Accede al Sistema</h4>
                    <p className="text-muted-foreground">Toca el enlace que aparece para acceder directamente al sistema</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h4 className="text-xl font-semibold text-foreground mb-4">Beneficios del Acceso QR</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Acceso instantáneo sin necesidad de escribir URLs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Compatible con todos los dispositivos móviles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Seguro y encriptado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Ideal para presentaciones y demos</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* QR Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Acceso Móvil</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Optimizado para dispositivos móviles, accede desde cualquier smartphone o tablet.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Scan className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Escaneo Rápido</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Tecnología de escaneo avanzada que funciona incluso en condiciones de poca luz.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <QrCode className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Alta Resolución</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Código QR de alta calidad que mantiene su funcionalidad en cualquier tamaño.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QRSection;