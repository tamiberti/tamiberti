import { Button } from "@/components/ui/button";
import leafBackground from "@/assets/leaf-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center animate-fade-in transition-all duration-1000 ease-in-out relative"
      style={{
        backgroundImage: `url(${leafBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/30"></div>
      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        <div className="space-y-16">
          {/* Large Typography Logo Style */}
          <div className="space-y-4">
            <h1 className="font-cormorant text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-wide">
              <span className="text-primary">TAMI BERTI</span>
            </h1>
            
          </div>
          
          {/* Simple subtitle */}
          <p className="font-cormorant text-xl md:text-2xl text-muted-foreground font-light tracking-wide italic">Psicóloga Clínica</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;