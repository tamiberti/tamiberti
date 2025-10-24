import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background animate-fade-in px-6 pt-16">
      <div className="container mx-auto text-center max-w-4xl">
        {/* Logo Image */}
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="Tami Berti - Psicóloga Clínica" 
            className="w-64 md:w-80 lg:w-96 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
