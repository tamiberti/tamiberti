const About = () => {
  return <section id="about" className="py-32 px-6 animate-fade-in transition-all duration-1000 ease-in-out">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          {/* Section Title */}
          <h2 className="font-cormorant text-2xl md:text-3xl font-medium text-left text-primary">
            Sobre mim
          </h2>

          {/* Content */}
          <div className="space-y-6 text-lg leading-relaxed text-left max-w-3xl">
            <p className="font-dancing text-2xl md:text-3xl tracking-wide text-accent">
              Oi, que bom te ter por aqui!
            </p>
            
            <p className="font-inter text-muted-foreground font-light tracking-wide text-justify">Me chamo Tami Berti e sou psicóloga clínica e hospitalar.</p>
            
            <p className="font-inter text-muted-foreground font-light tracking-wide text-justify">Nosso trabalho juntos começa com uma avaliação clínica, para que eu possa compreender melhor tua história e identificar de que forma posso te ajudar.</p>
            
            <p className="font-inter text-muted-foreground font-light tracking-wide text-justify">A partir disso, seguiremos com o processo de psicoterapia na abordagem Sistêmica, sempre respeitando teu ritmo e tuas necessidades.</p>
            
            <p className="font-inter text-muted-foreground font-light tracking-wide">Se tiveres qualquer dúvida, estarei à disposição.</p>
            
            <p className="font-cormorant text-lg font-medium tracking-wide text-primary italic">
              Conta comigo!
            </p>
          </div>

          {/* Formação Section */}
          <div className="space-y-12 text-slate-500">
            <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-left text-primary">
              Formação
            </h3>
            
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg text-muted-foreground font-light tracking-wide">Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
Mobilidade acadêmica Santander Universidades - Universitat de Lleida - Espanha </p>
              <p className="text-lg text-muted-foreground font-light tracking-wide">Esp. em Urgência e Emergência -  Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)</p>
              <p className="text-lg text-muted-foreground font-light tracking-wide">Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)</p>
            </div>

            <div className="space-y-4 pt-8">
              <h4 className="font-cormorant text-xl md:text-2xl font-medium text-left text-primary">
                Registro Profissional
              </h4>
              <div className="space-y-2">
                <p className="font-inter text-lg text-muted-foreground font-light tracking-wide">
                  CRP 07/34490
                </p>
                <p className="font-inter text-muted-foreground font-light tracking-wide">
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