const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract Organic Shapes Background - Inspired by textured abstract art */}
      <div className="absolute inset-0 -z-10">
        <svg 
          className="absolute inset-0 w-full h-full opacity-40" 
          viewBox="0 0 1440 800" 
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Large circle - Terra cotta */}
          <circle
            cx="200"
            cy="150"
            r="280"
            fill="hsl(21 39% 50%)"
            opacity="0.6"
            className="mix-blend-multiply"
          />
          
          {/* Medium circle - Coral/Orange */}
          <circle
            cx="400"
            cy="200"
            r="320"
            fill="hsl(15 55% 60%)"
            opacity="0.5"
            className="mix-blend-multiply"
          />
          
          {/* Large circle bottom right - Light peach */}
          <circle
            cx="1100"
            cy="600"
            r="350"
            fill="hsl(29 45% 71%)"
            opacity="0.4"
            className="mix-blend-multiply"
          />
          
          {/* Medium circle bottom - Gray beige */}
          <circle
            cx="800"
            cy="650"
            r="280"
            fill="hsl(66 12% 50%)"
            opacity="0.3"
            className="mix-blend-multiply"
          />
          
          {/* Small accent circle */}
          <circle
            cx="1200"
            cy="200"
            r="180"
            fill="hsl(31 60% 85%)"
            opacity="0.5"
            className="mix-blend-multiply"
          />
          
          {/* Additional texture circle */}
          <circle
            cx="600"
            cy="500"
            r="220"
            fill="hsl(21 39% 50%)"
            opacity="0.2"
            className="mix-blend-multiply"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center max-w-6xl relative z-10">
        <div className="space-y-12 animate-fade-in">
          {/* Massive Typography - Maximum Impact */}
          <div className="space-y-4">
            <h1 className="font-playfair text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-light leading-none tracking-tight">
              <span className="text-primary">TAMI</span>
            </h1>
            <h1 className="font-playfair text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-light leading-none tracking-tight">
              <span className="text-secondary">BERTI</span>
            </h1>
          </div>
          
          {/* Subtitle with breathing room */}
          <p className="text-xl md:text-2xl lg:text-3xl font-light tracking-wider text-foreground/80 mt-16">
            Psicóloga Clínica
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;