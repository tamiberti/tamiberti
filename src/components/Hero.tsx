const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in">
      {/* Organic Waves Background - Inspired by desert landscape */}
      <div className="absolute inset-0 -z-10">
        <svg 
          className="absolute inset-0 w-full h-full" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bottom layer - Darkest brown */}
          <path
            fill="hsl(21 39% 30%)"
            d="M0,500 Q360,450 720,500 T1440,500 L1440,800 L0,800 Z"
            opacity="0.9"
          />
          
          {/* Second layer - Brown sugar */}
          <path
            fill="hsl(21 39% 50%)"
            d="M0,400 Q360,350 720,420 T1440,400 L1440,800 L0,800 Z"
            opacity="0.8"
          />
          
          {/* Third layer - Tan */}
          <path
            fill="hsl(29 45% 71%)"
            d="M0,320 Q360,280 720,340 T1440,320 L1440,800 L0,800 Z"
            opacity="0.7"
          />
          
          {/* Fourth layer - Light peach */}
          <path
            fill="hsl(31 60% 85%)"
            d="M0,240 Q360,200 720,260 T1440,240 L1440,800 L0,800 Z"
            opacity="0.6"
          />
          
          {/* Top layer - Lightest */}
          <path
            fill="hsl(31 60% 96%)"
            d="M0,180 Q360,140 720,200 T1440,180 L1440,800 L0,800 Z"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center max-w-5xl relative z-10">
        <div className="space-y-8">
          {/* Large Typography Logo Style */}
          <div className="space-y-2">
            <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl font-normal leading-none">
              <span className="text-primary"></span>
            </h1>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-light leading-none">
              <span className="text-secondary">TAMI BERTI</span>
            </h1>
          </div>
          
          {/* Simple subtitle */}
          <p className="text-lg font-light tracking-wide mt-8 text-primary md:text-2xl">
            Psicóloga Clínica
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;