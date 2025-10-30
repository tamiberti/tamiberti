import logoImage from "@/assets/logo.png";

const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-hero animate-fade-in">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <div className="space-y-3">
          {/* Logo - Maior e em destaque */}
          <div className="flex justify-center animate-scale-in">
            <img 
              src={logoImage} 
              alt="Tami Berti Logo" 
              className="w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain"
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