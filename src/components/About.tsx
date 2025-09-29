const About = () => {
  return <section id="about" className="py-24 md:py-32 px-6 animate-page-enter">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-12 md:space-y-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair text-primary text-left font-normal">
            Sobre mim
          </h2>

          {/* Content */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-left">
            <p className="text-xl md:text-2xl font-light text-primary text-left">
              Oi, que bom te ter por aqui!
            </p>
            
            <p className="text-muted-foreground font-light text-justify">Eu sou a Tami, psicóloga clínica há cinco anos, com experiência também na área da psicologia hospitalar. Natural de Porto Alegre no Rio Grande do Sul, estou vivenciando pela segunda vez o processo de migração para fora do país. Por isso, atuo de forma online, o que nos permite trabalhar juntos independentemente de onde você esteja.</p>
            
            <p className="text-muted-foreground font-light text-justify">Meu atendimento é direcionado ao público adulto, através da abordagem da Terapia Sistêmica, que busca compreender cada pessoa em suas relações e contextos. Nessa perspectiva, entendemos que os vínculos e ambientes exercem grande influência sobre nossas escolhas, emoções e formas de estar no mundo.</p>
            
            <p className="text-muted-foreground font-light text-justify">Nosso trabalho começa com uma avaliação clínica, para que possamos nos conhecer melhor e eu possa compreender sua história e identificar de que forma posso ajudar. A partir daí, seguimos com o processo terapêutico, no qual construímos, passo a passo, um espaço seguro de acolhimento e reflexão. Nele, vamos estabelecer objetivos juntos, respeitando sempre seu ritmo e suas necessidades.</p>
            
            <p className="text-muted-foreground font-light">Se tiver alguma dúvida, fique à vontade para me procurar.
Conte comigo!</p>
            
            
          </div>

          {/* Formação Section */}
          <div className="space-y-8 md:space-y-12 pt-8 md:pt-12 border-t border-border/30">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-left text-primary">
              Formação
            </h3>
            
            <div className="space-y-4 text-left">
              <p className="text-muted-foreground font-light text-justify">
                Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
              </p>
              <p className="text-muted-foreground font-light text-justify">Mobilidade acadêmica Santander Universidades - Universitat de Lleida / Espanha</p>
              <p className="text-muted-foreground font-light text-justify">Esp. em Psicologia da Saúde (Urgência e Emergência) - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)</p>
              <p className="text-muted-foreground font-light text-justify">
                Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)
              </p>
            </div>

            <div className="space-y-4 pt-6 md:pt-8">
              <h4 className="text-xl md:text-2xl font-playfair font-normal text-left text-primary">
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
    </section>;
};
export default About;