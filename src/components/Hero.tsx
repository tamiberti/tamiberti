import logoImage from "@/assets/logo.png";

const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-hero animate-fade-in">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <div className="space-y-6">
          {/* Logo - Maior e em destaque */}
          <div className="flex justify-center animate-scale-in">
            <img 
              src={logoImage} 
              alt="Tami Berti Logo" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
            />
          </div>
          
          {/* Name - Tamanho médio */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light leading-none text-primary">
            TAMI BERTI
          </h1>
          
          {/* Subtitle - Menor */}
          <p className="text-base font-light tracking-wide text-muted-foreground md:text-xl">
            Psicóloga Clínica
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;