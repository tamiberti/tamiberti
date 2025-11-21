import logoImage from "@/assets/logo.png";
import heroBackground from "@/assets/tami-berti-profile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start animate-fade-in">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Tami Berti" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10 max-w-2xl">
        <div className="space-y-8 text-left">
          {/* Logo */}
          <div className="animate-scale-in">
            <img 
              src={logoImage} 
              alt="Tami Berti Logo" 
              className="w-48 md:w-64 lg:w-72 h-auto object-contain filter brightness-0 invert" 
            />
          </div>
          
          {/* Name */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wider">
            TAMI BERTI
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light tracking-wide text-white/90">
            Psicóloga Clínica
          </p>
          
          {/* Introduction */}
          <p className="text-base md:text-lg font-light text-white/80 leading-relaxed max-w-xl">
            Olá! Sou Tami Berti, psicóloga
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;