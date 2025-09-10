const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted animate-fade-in transition-all duration-1000 ease-in-out">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <div className="space-y-16">
          {/* Large Typography Logo Style */}
          <div className="space-y-4">
            <h1 className="font-playfair text-8xl md:text-9xl lg:text-[12rem] font-light leading-none">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-7xl">TAMI BERTI</span>
            </h1>
            
          </div>
          
          {/* Simple subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">Psicóloga Clínica</p>
        </div>
      </div>
    </section>;
};
export default Hero;