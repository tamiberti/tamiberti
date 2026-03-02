import heroImage from "@/assets/hero-main.png";

const Hero = () => {
  return (
    <section
      className="h-screen w-full animate-fade-in relative overflow-hidden"
      style={{
        backgroundColor: 'hsl(25, 33%, 92%)',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      role="img"
      aria-label="Tami Berti - Psicóloga Clínica"
    />
  );
};

export default Hero;
