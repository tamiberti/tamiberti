const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-hero animate-fade-in">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        <div className="space-y-8">
          {/* Large Typography Logo Style - Alice Abadi inspired */}
          <div className="space-y-2">
            <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl font-normal leading-none">
              <span className="text-primary text-7xl"></span>
            </h1>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light leading-none">
              <span className="text-secondary">TAMI BERTI</span>
            </h1>
          </div>
          
          {/* Simple subtitle */}
          <p className="text-lg font-light tracking-wide mt-8 text-amber-600 md:text-2xl">
            Psicóloga Clínica
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;