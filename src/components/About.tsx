const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-24 md:py-32 px-6 animate-page-enter bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 md:space-y-16">
          {/* Greeting */}
          <p className="font-moontime text-4xl md:text-5xl lg:text-6xl text-[#806751]">
            Oi, que bom te ter por aqui!
          </p>
          
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-playfair text-left font-normal lg:text-4xl text-[#806751]">
            Sobre mim
          </h2>

          {/* Content - Left aligned text only */}
          <div className="max-w-2xl">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-left">
              <p className="text-muted-foreground font-light text-justify">
                Eu sou a Tami, psicóloga clínica e hospitalar.
              </p>
              
              <p className="text-muted-foreground font-light text-justify">
                Ao longo dos anos, minha atuação tem se estendido por diferentes espaços de cuidado. Já estive ao lado de pessoas em hospitais, clínicas, empresas, em contextos de migração e em momentos de intensa vulnerabilidade, onde a presença, a escuta e o acolhimento fazem toda a diferença.
              </p>
              
              <p className="text-muted-foreground font-light text-justify">
                Cada uma dessas vivências deixa marcas e contribui para formar a profissional que me torno todos os dias, alguém que busca sustentar sua prática em ética, sensibilidade e compromisso com o cuidado.
              </p>
              
              <p className="text-muted-foreground font-light text-justify">
                Entendo que nenhuma técnica e nenhum conhecimento têm valor real se não estiverem acompanhados de empatia, presença e uma escuta verdadeira. E é essa a psicologia que escolho exercer, sensível e humana.
              </p>
            </div>
          </div>

          {/* Currículo Section */}
          <div className="pt-8 md:pt-12 space-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-left text-[#806751]">
              Currículo
            </h3>
            
            <div className="space-y-8">
              <div className="space-y-4 text-left">
                <h4 className="text-xl md:text-2xl font-playfair font-normal mb-4 text-[#7a634f]">
                  Formação Acadêmica
                </h4>
                <p className="text-muted-foreground font-light text-justify">
                  Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                </p>
                <p className="text-muted-foreground font-light text-justify">
                  Mobilidade acadêmica Santander Universidades - Universitat de Lleida / Espanha
                </p>
                <p className="text-muted-foreground font-light text-justify">
                  Esp. em Psicologia da Saúde (Urgência e Emergência) - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                </p>
                <p className="text-muted-foreground font-light text-justify">
                  Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)
                </p>
              </div>

              <div className="space-y-4 pt-6 md:pt-8">
                <h4 className="text-xl md:text-2xl font-playfair font-normal text-left text-[#806751]">
                  Registro Profissional
                </h4>
                <div className="text-left space-y-2">
                  <p className="text-muted-foreground font-light">
                    CRP 07/34490
                  </p>
                  <p className="text-sm text-muted-foreground font-light">
                    Conselho Regional de Psicologia - RS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
