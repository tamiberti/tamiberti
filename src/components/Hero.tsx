import { BlobPeach, BlobMustard, BlobRose } from "./WatercolorShapes";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-secondary animate-fade-in pt-20 pb-16 px-6"
      aria-label="Tami Berti - Psicóloga Clínica"
    >
      {/* Decorative organic shapes */}
      <BlobPeach className="absolute -top-10 -left-20 w-[55%] max-w-[700px] opacity-90" />
      <BlobMustard className="absolute top-20 right-0 w-[50%] max-w-[600px] opacity-80" />
      <BlobRose className="absolute bottom-0 left-1/4 w-[45%] max-w-[550px] opacity-70" />

      {/* Centered title card */}
      <div className="relative z-10 text-center max-w-2xl mx-auto bg-background/85 backdrop-blur-sm px-8 py-10 md:px-14 md:py-14 rounded-sm shadow-soft">
        <p className="font-light text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4">
          Psicóloga Clínica
        </p>
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-normal text-foreground leading-tight">
          TAMI BERTI
        </h1>
        <div className="mt-6 mx-auto w-16 h-px bg-foreground/40" />
        <p className="mt-6 font-light text-base md:text-lg text-muted-foreground italic">
          Um espaço de escuta, acolhimento e cuidado.
        </p>
      </div>
    </section>
  );
};

export default Hero;
