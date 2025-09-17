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
            <p className="tracking-wide text-3xl font-light text-slate-700">
              Oi, que bom te ter por aqui!
            </p>
            
            <p className="text-muted-foreground font-light tracking-wide text-justify">Me chamo Tami Berti e sou psicóloga clínica, com experiência também na área hospitalar.
Minha principal abordagem é a Terapia Sistêmica, que busca compreender cada pessoa dentro de suas relações e contextos, valorizando a forma como os vínculos e ambientes influenciam nossas escolhas e sentimentos.</p>
            
            <p className="text-muted-foreground font-light tracking-wide text-justify">Tenho experiência com luto, dor, processos de adoecimento, relacionamentos e autoconhecimento. Atualmente, venho direcionando meu olhar especialmente para os processos migratórios, um tema que atravessa também a minha própria história. Ele foi objeto de estudo durante a faculdade, esteve presente na minha vivência de intercâmbio na Espanha e, em breve, fará parte novamente da minha vida em um novo processo migratório.</p>
            
            <p className="text-muted-foreground font-light tracking-wide text-justify">Nosso trabalho juntos começa com uma avaliação clínica, para que eu possa compreender melhor tua história e identificar de que forma posso te ajudar.
A partir daí, seguimos com o processo terapêutico, no qual construímos, passo a passo, um espaço seguro de acolhimento e reflexão. Nele, vamos estabelecer objetivos juntos, respeitando sempre teu ritmo e tuas necessidades.</p>
            
            <p className="text-muted-foreground font-light tracking-wide">Se tiveres qualquer dúvida, estarei à disposição.</p>
            
            <p className="font-light tracking-wide text-yellow-900">
              Conta comigo!
            </p>
          </div>

          {/* Formação Section */}
          <div className="space-y-12 text-slate-500">
            <h3 className="text-2xl md:text-3xl font-light text-left text-primary">
              Formação
            </h3>
            
            <div className="space-y-6 max-w-3xl">
              <p className="text-lg text-muted-foreground font-light tracking-wide">Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
Mobilidade acadêmica Santander Universidades - Universitat de Lleida - Espanha </p>
              <p className="text-lg text-muted-foreground font-light tracking-wide">Esp. em Urgência e Emergência -  Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)</p>
              <p className="text-lg text-muted-foreground font-light tracking-wide">Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)</p>
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