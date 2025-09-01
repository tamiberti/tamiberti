import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <h1 className="font-playfair text-5xl md:text-7xl font-light text-foreground">
            Tami Berti
          </h1>
          <div className="w-24 h-px bg-primary mx-auto"></div>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Psicóloga Clínica
          </p>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Acompanhamento psicológico especializado com abordagem humanizada 
            para adultos e adolescentes
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-light"
          >
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;