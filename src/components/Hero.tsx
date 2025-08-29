import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Heart } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-subtle"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        {/* Dynamic Gradient Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-hero shadow-strong flex items-center justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Curando Mentes,
          <br />
          <span className="text-secondary-light">Restaurando Esperança</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 font-inter">
          Serviços profissionais de psicologia com Dra. Tami Berti. 
          Experimente terapia compassiva e baseada em evidências, personalizada para sua jornada única.
        </p>

        {/* Key Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-light">15+</div>
            <div className="text-white/80">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-light">500+</div>
            <div className="text-white/80">Clientes Atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-light">95%</div>
            <div className="text-white/80">Taxa de Sucesso</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-strong text-lg px-8 py-4"
          >
            <Calendar className="mr-2 w-5 h-5" />
            Agendar Consulta
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-4"
          >
            Saiba Mais
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;