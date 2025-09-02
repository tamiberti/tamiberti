const Curriculum = () => {
  return (
    <section id="curriculum" className="py-32 px-6 transition-all duration-1000 ease-in-out">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          {/* Section Title */}
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Currículo
            </span>
          </h2>

          {/* Content */}
          <div className="space-y-12 max-w-3xl mx-auto">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl md:text-3xl font-light text-primary">
                Formação
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-light tracking-wide">
                  Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                </p>
                <p className="text-muted-foreground font-light tracking-wide">
                  Graduação em Psicologia Clínica
                </p>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl md:text-3xl font-light text-primary">
                Especialização
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-light tracking-wide">
                  Terapia Cognitivo-Comportamental
                </p>
                <p className="text-muted-foreground font-light tracking-wide">
                  Abordagem baseada em evidências científicas
                </p>
              </div>
            </div>

            {/* Registration */}
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl md:text-3xl font-light text-primary">
                Registro Profissional
              </h3>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-light tracking-wide">
                  CRP 07/34490
                </p>
                <p className="text-muted-foreground font-light tracking-wide">
                  Conselho Regional de Psicologia - Rio Grande do Sul
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;