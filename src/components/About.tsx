const About = () => {
  return <section id="about" className="py-32 px-6 animate-fade-in transition-all duration-1000 ease-in-out">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-light text-left">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre mim
            </span>
          </h2>

          {/* Content */}
          <div className="space-y-6 text-lg leading-relaxed text-left max-w-3xl">
            <p className="tracking-wide text-red-950 text-3xl font-light">
              Oi, que bom te ter por aqui!
            </p>
            
            <p className="text-muted-foreground font-light tracking-wide">
              Me chamo Tami Berti e sou psicóloga clínica e hospitalar.
            </p>
            
            <p className="text-muted-foreground font-light tracking-wide">
              Nosso trabalho juntos começa com uma avaliação clínica, para que eu possa compreender melhor tua história e identificar de que forma posso te ajudar.
            </p>
            
            <p className="text-muted-foreground font-light tracking-wide">
              A partir disso, seguiremos com o processo de psicoterapia na abordagem Sistêmica, sempre respeitando teu ritmo e tuas necessidades.
            </p>
            
            <p className="text-muted-foreground font-light tracking-wide">
              Se tiveres qualquer dúvida, estarei à disposição.
            </p>
            
            <p className="text-foreground font-light tracking-wide">
              Conta comigo!
            </p>
          </div>

          {/* Formação Section */}
          <div className="space-y-12">
            <h3 className="text-2xl md:text-3xl font-light text-left text-primary">
              Formação
            </h3>
            
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Graduação em Psicologia - PUCRS
              </p>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Esp. em Urgência e Emergência - PUCRS
              </p>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                Esp. em Terapia Sistêmica - CEFI
              </p>
            </div>

            <div className="space-y-4 pt-8">
              <h4 className="text-xl md:text-2xl font-light text-left text-primary">
                Registro Profissional
              </h4>
              <div className="space-y-2">
                <p className="text-lg text-muted-foreground font-light tracking-wide">
                  CRP 07/34490
                </p>
                <p className="text-muted-foreground font-light tracking-wide">
                  Conselho Regional de Psicologia - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;