const benefits = [
  "Desenvolvimento de recursos de enfrentamento",
  "Compreensão dos próprios padrões",
  "Maior clareza emocional",
  "Fortalecimento da autoestima e autonomia",
  "Regulação emocional mais saudável",
  "Melhora nos relacionamentos",
];

const TherapyBenefits = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <p className="font-light text-xs md:text-sm tracking-[0.3em] uppercase text-accent">
            Benefícios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal text-foreground">
            O que você pode conquistar com apoio terapêutico
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            A combinação entre vínculo, escuta ativa e técnicas terapêuticas torna possível acessar mudanças concretas e duradouras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => {
            const tones = ["bg-primary/70", "bg-accent/70", "bg-secondary"];
            return (
              <div
                key={index}
                className={`${tones[index % 3]} rounded-sm p-8 md:p-10 text-center shadow-soft hover:shadow-medium transition-all duration-300`}
              >
                <p className="font-playfair italic text-sm text-foreground/60 mb-3">
                  0{index + 1}
                </p>
                <h3 className="text-lg md:text-xl font-playfair font-normal text-foreground tracking-wide">
                  {benefit}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TherapyBenefits;
