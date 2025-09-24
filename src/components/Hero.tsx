const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Clean geometric accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/30 rounded-bl-[100px]" />
      
      <div className="container mx-auto px-8 lg:px-16 text-center max-w-6xl relative z-10">
        <div className="space-y-12">
          {/* Main Title - Clean Typography */}
          <div className="space-y-6">
            <h1 className="font-inter text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none text-foreground">
              TAMI BERTI
            </h1>
            <div className="w-16 h-px bg-foreground mx-auto" />
          </div>
          
          {/* Simple subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-md mx-auto">
            Psicóloga Clínica
          </p>
        </div>
      </div>
    </section>
  );
};
export default Hero;