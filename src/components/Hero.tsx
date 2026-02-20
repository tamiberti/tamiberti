import heroImage from "@/assets/hero-main.png";

const Hero = () => {
  return (
    <section className="h-[60vh] sm:h-screen flex items-center justify-center animate-fade-in relative overflow-hidden" style={{ backgroundColor: 'hsl(25, 33%, 92%)' }}>
      <img 
        src={heroImage} 
        alt="Tami Berti - Psicóloga Clínica" 
        className="w-full h-full object-contain sm:object-cover"
      />
    </section>
  );
};
export default Hero;