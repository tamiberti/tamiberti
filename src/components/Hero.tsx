const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background animate-fade-in px-6">
      <div className="container mx-auto text-center max-w-4xl space-y-12">
        {/* Logo "tb" - Minimalist monogram */}
        <div className="flex justify-center mb-8">
          <div className="text-8xl md:text-9xl font-cormorant text-primary/30 tracking-tighter">
            tb
          </div>
        </div>
        
        {/* Name with letter spacing */}
        <div className="space-y-6">
          <h1 className="font-playfair text-2xl md:text-3xl tracking-[0.3em] text-primary font-light uppercase">
            TAMI BERTI
          </h1>
          
          {/* Subtitle in italic */}
          <p className="font-cormorant italic text-xl md:text-2xl text-primary/70 font-light">
            psicóloga clínica
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-accent text-accent-foreground uppercase text-xs tracking-[0.2em] font-light hover:bg-accent/90 transition-all duration-300"
          >
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
