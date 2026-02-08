import tamiProfile from "@/assets/tami-profile.jpg";
const About = () => {
  return <section id="about" className="min-h-screen py-24 md:py-32 px-6 animate-page-enter bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-16 md:space-y-20">
          {/* Profile Photo and Title - Side by side, photo matching text height */}
          <div className="flex flex-col md:flex-row items-stretch gap-10 md:gap-12">
            <div className="md:w-1/3 flex-shrink-0">
              <img alt="Tami Berti - Psicóloga" className="w-full h-full object-cover rounded-lg" src="/lovable-uploads/807a122b-80c3-4150-b09a-3788976d0b30.jpg" />
            </div>
            <div className="flex flex-col flex-1">
              <h2 className="text-3xl md:text-4xl font-playfair font-normal text-[#806751] mb-8">
                Sobre mim
              </h2>
              <div className="space-y-5 text-base md:text-lg leading-relaxed">
              <p className="text-muted-foreground font-light text-justify">Oi, que bom te receber por aqui! Eu sou a Tami, psicóloga clínica e hospitalar, e meu trabalho é oferecer um espaço seguro, acolhedor e ético para quem sente que precisa de apoio emocional.</p>
                
                <p className="text-muted-foreground font-light text-justify">
                  Minha trajetória passa por diferentes contextos de cuidado, como hospitais, clínicas, situações de emergência e processos de migração. Estar ao lado de pessoas em momentos de fragilidade me ensinou que, mais do que respostas prontas, o que realmente transforma é ser escutado com atenção, respeito e sensibilidade.
                </p>
                
                <p className="text-muted-foreground font-light text-justify">A psicoterapia que ofereço é baseada na Terapia Sistêmica e construída de forma singular para cada pessoa, respeitando sua história, seus vínculos e seu tempo. Acredito em um cuidado humano, empático e comprometido, onde você possa falar com liberdade, elaborar suas experiências e criar novos caminhos com mais clareza e autonomia. Se fizer sentido para você, será um prazer caminhar junto!</p>
              </div>
            </div>
          </div>

          {/* Currículo Section - Same style as Psicoterapia */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-[#806751]">
              Currículo
            </h2>
            
            <div className="space-y-8 max-w-3xl">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-playfair font-normal text-[#7a634f]">
                  Formação Acadêmica
                </h3>
                
                <div className="space-y-1">
                  <p className="text-base md:text-lg leading-relaxed text-foreground font-semibold">
                    Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
                    Graduação em Psicologia
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
                    Esp. em Psicologia da Saúde (Urgência e Emergência)
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">Intercâmbio acadêmico <span className="font-semibold text-foreground">Universidade de Lleida / ESPANHA</span>
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-base md:text-lg leading-relaxed text-foreground font-semibold">
                    Centro de Estudos da Família e do Indivíduo (CEFI)
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light">
                    Esp. em Terapia Sistêmica
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-playfair font-normal text-[#806751]">
                  Registro Profissional
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light text-justify">
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