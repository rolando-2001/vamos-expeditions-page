import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import QRSection from "@/components/QRSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <QRSection />
      <Footer />
    </div>
  );
};

export default Index;
