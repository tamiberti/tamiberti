const benefits = [
  "Fortalecimento da autoestima",
  "Olhar mais gentil sobre si",
  "Relacionamentos mais saudáveis",
  "Mais leveza no dia a dia",
  "Autonomia emocional",
  "Compreensão dos próprios padrões",
];

const TherapyBenefits = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-primary/10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal italic text-foreground">
            O que você pode conquistar com apoio terapêutico
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            A combinação entre vínculo, escuta ativa e técnicas terapêuticas torna possível acessar mudanças concretas e duradouras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background/70 backdrop-blur-sm rounded-2xl p-8 text-center border border-border/20 shadow-soft"
            >
              <h3 className="text-lg md:text-xl font-playfair font-semibold italic text-primary-foreground">
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyBenefits;
