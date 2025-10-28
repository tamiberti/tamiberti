import logo from "@/assets/logo.png";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-background animate-fade-in px-6 pt-16">
      <div className="container mx-auto text-center max-w-4xl w-full">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo Image */}
          <div className="w-full max-w-md animate-scale-in opacity-90">
            <img src={logo} alt="Tami Berti - Psicóloga Clínica" className="w-full h-auto object-contain" style={{
            filter: 'brightness(0.85) contrast(1.1)'
          }} />
          </div>
          
          {/* Name */}
          <h1 style={{
          animationDelay: '300ms',
          animationFillMode: 'both'
        }} className="text-5xl md:text-7xl lg:text-8xl font-cinzel tracking-wider animate-fade-in text-[#8d6f5b]">
            TAMI BERTI
          </h1>
          
          {/* Subtitle */}
          <p style={{
          animationDelay: '600ms',
          animationFillMode: 'both'
        }} className="text-2xl md:text-3xl lg:text-4xl font-crimson italic animate-fade-in text-[#937562] mx-0">
            Psicóloga Clínica
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;