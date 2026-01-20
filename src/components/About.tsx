import tamiProfile from "@/assets/tami-profile.jpg";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 md:py-32 px-6 animate-page-enter bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16 md:space-y-20">
          {/* Profile Photo and Title - Alice Abadi style */}
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
            <img 
              alt="Tami Berti - Psicóloga" 
              className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg flex-shrink-0" 
              src="/lovable-uploads/807a122b-80c3-4150-b09a-3788976d0b30.jpg" 
            />
            <div className="flex flex-col flex-1">
              <h2 className="text-3xl md:text-4xl font-playfair font-normal text-[#806751] mb-8">
                Sobre mim
              </h2>
              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p className="text-muted-foreground font-light">
                  Oi, que bom te ter por aqui!
                </p>
                <p className="text-muted-foreground font-light">
                  Eu sou a Tami, psicóloga clínica e hospitalar.
                </p>
                
                <p className="text-muted-foreground font-light">
                  Ao longo dos anos, minha atuação tem se estendido por diferentes espaços de cuidado. Já estive ao lado de pessoas em hospitais e clínicas, em cenários de emergência e em contextos de migração. Momentos de intensa vulnerabilidade, onde a presença, a escuta e o acolhimento fazem toda a diferença.
                </p>
                
                <p className="text-muted-foreground font-light">
                  Cada uma dessas vivências deixa marcas e contribui para formar a profissional que me torno todos os dias, alguém que busca sustentar sua prática na ética, sensibilidade e compromisso com o cuidado.
                </p>
                
                <p className="text-muted-foreground font-light">
                  A psicoterapia é um convite para dar voz ao que sentimos, revisitar histórias e criar possibilidades de mudança. Com base nos fundamentos teóricos que sustentam a minha atuação, busco compreender as necessidades de cada pessoa de forma única, respeitando sua história, seu ritmo e seus processos.
                </p>
                
                <p className="text-muted-foreground font-light">
                  Entendo que nenhuma técnica e nenhum conhecimento têm valor real se não estiverem acompanhados de empatia, presença e uma escuta verdadeira. E é essa a psicologia que escolho exercer, sensível e humana.
                </p>
                <p className="text-muted-foreground font-light">
                  Se quiser saber mais ou tiver alguma dúvida, fique à vontade para me procurar. Conta comigo!
                </p>
              </div>
            </div>
          </div>

          {/* Currículo Section - Centralized */}
          <div className="pt-8 md:pt-12 space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-[#806751]">
              Currículo
            </h3>
            
            <div className="space-y-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-playfair font-normal mb-4 text-[#7a634f]">
                  Formação Acadêmica
                </h4>
                <p className="text-muted-foreground font-light">
                  Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                </p>
                <p className="text-muted-foreground font-light">
                  Mobilidade acadêmica Santander Universidades - Universitat de Lleida / Espanha
                </p>
                <p className="text-muted-foreground font-light">
                  Esp. em Psicologia da Saúde (Urgência e Emergência) - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                </p>
                <p className="text-muted-foreground font-light">
                  Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)
                </p>
              </div>

              <div className="space-y-4 pt-6 md:pt-8">
                <h4 className="text-xl md:text-2xl font-playfair font-normal text-[#806751]">
                  Registro Profissional
                </h4>
                <div className="space-y-2">
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
