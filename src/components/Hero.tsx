const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted transition-all duration-1000 ease-in-out">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <div className="space-y-16">
          {/* Large Typography Logo Style */}
          <div className="space-y-4">
            <h1 className="font-cormorant text-6xl md:text-7xl lg:text-8xl font-light leading-none tracking-wider">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">TAMI BERTI</span>
            </h1>
          </div>
          
          {/* Simple subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">PSICÓLOGA CLÍNICA</p>
        </div>
      </div>
    </section>;
};
export default Hero;