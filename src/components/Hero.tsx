import heroImage from "@/assets/hero-main.png";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat animate-fade-in"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
    </section>
  );
};
export default Hero;