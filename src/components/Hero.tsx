import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background animate-fade-in px-6 pt-16">
      <div className="container mx-auto text-center max-w-6xl w-full">
        {/* Logo Image - Ampliado para ocupar a página */}
        <div className="flex justify-center w-full">
          <img 
            src={logo} 
            alt="Tami Berti - Psicóloga Clínica" 
            className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
