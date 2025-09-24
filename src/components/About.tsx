const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-8 lg:px-16 bg-background relative">
      {/* Background geometric element */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/20 rounded-tr-[80px]" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Title */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl lg:text-4xl font-light text-foreground mb-8">
              Sobre mim
            </h2>
            <div className="w-12 h-px bg-foreground" />
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <p className="text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
                Oi, que bom te ter por aqui!
              </p>
              
              <div className="space-y-6 text-base lg:text-lg leading-relaxed text-muted-foreground">
                <p>Me chamo Tami Berti e sou psicóloga clínica, com experiência também na área hospitalar. Minha principal abordagem é a Terapia Sistêmica, que busca compreender cada pessoa dentro de suas relações e contextos, valorizando a forma como os vínculos e ambientes influenciam nossas escolhas e sentimentos.</p>
                
                <p>Tenho experiência com luto, dor, processos de adoecimento, relacionamentos e autoconhecimento. Atualmente, venho direcionando meu olhar especialmente para os processos migratórios, um tema que atravessa também a minha própria história. Ele foi objeto de estudo durante a faculdade, esteve presente na minha vivência de intercâmbio na Espanha e, em breve, fará parte novamente da minha vida em um novo processo migratório.</p>
                
                <p>Nosso trabalho juntos começa com uma avaliação clínica, para que eu possa compreender melhor tua história e identificar de que forma posso te ajudar. A partir daí, seguimos com o processo terapêutico, no qual construímos, passo a passo, um espaço seguro de acolhimento e reflexão. Nele, vamos estabelecer objetivos juntos, respeitando sempre teu ritmo e tuas necessidades.</p>
                
                <p>Se tiveres qualquer dúvida, estarei à disposição.</p>
                
                <p className="text-foreground font-medium">
                  Conta comigo!
                </p>
              </div>
            </div>

            {/* Formação Section */}
            <div className="pt-12 space-y-8">
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-foreground mb-6">
                  Formação
                </h3>
                <div className="w-8 h-px bg-foreground mb-6" />
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)<br/>
                Mobilidade acadêmica Santander Universidades - Universitat de Lleida - Espanha</p>
                <p>Esp. em Urgência e Emergência - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)</p>
                <p>Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)</p>
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-light text-foreground mb-4">
                  Registro Profissional
                </h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>CRP 07/34490</p>
                  <p>Conselho Regional de Psicologia - RS</p>
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