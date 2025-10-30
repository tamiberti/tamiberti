import logoImage from "@/assets/logo.png";

const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-hero animate-fade-in">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <div className="space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <img 
              src={logoImage} 
              alt="Tami Berti Logo" 
              className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain"
            />
          </div>
          
          {/* Name */}
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light leading-none text-primary">
            TAMI BERTI
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg font-light tracking-wide mt-8 text-muted-foreground md:text-2xl">
            Psicóloga Clínica
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;