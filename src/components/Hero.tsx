import heroImage from "@/assets/hero-main.png";

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-contain bg-center bg-no-repeat animate-fade-in"
      style={{ backgroundImage: `url(${heroImage})`, backgroundColor: '#f5f0eb' }}
    >
    </section>
  );
};
export default Hero;