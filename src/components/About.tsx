import tamiProfile from "@/assets/tami-profile.jpg";
import { SquiggleAccent } from "./WatercolorShapes";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 animate-page-enter bg-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative">
        <div className="space-y-20">
          {/* Profile + bio with framed photo (Josephine style) */}
          <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
            <div className="md:w-2/5 flex-shrink-0 relative">
              {/* Framed photo card */}
              <div className="relative bg-background p-3 shadow-medium rotate-[-2deg]">
                <img
                  alt="Tami Berti - Psicóloga"
                  className="w-full aspect-[4/5] object-cover"
                  src="/lovable-uploads/807a122b-80c3-4150-b09a-3788976d0b30.jpg"
                />
              </div>
              <SquiggleAccent className="absolute -bottom-6 -right-4 w-24 opacity-80" />
            </div>

            <div className="flex flex-col flex-1">
              <p className="font-light text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-3">
                Bem-vindo
              </p>
              <h2 className="text-3xl lg:text-5xl font-playfair font-normal text-foreground mb-8 md:text-sm">
                {"\n"}
              </h2>
              <div className="space-y-5 text-base md:text-lg leading-relaxed">
                <p className="text-muted-foreground font-light text-justify">
                  Oi! Que bom te receber por aqui!
                </p>
                <p className="text-muted-foreground font-light text-justify">
                  Eu sou a Tami, psicóloga clínica e hospitalar, especialista em Terapia Sistêmica e
                  Psicologia da Saúde. Ofereço um espaço seguro, acolhedor e ético para quem deseja
                  compreender suas emoções, reduzir a ansiedade e lidar com o estresse do dia a dia
                  de uma forma mais saudável e consciente.
                </p>
                <p className="text-muted-foreground font-light text-justify">
                  A psicoterapia que ofereço é fundamentada na Terapia Sistêmica e construída de
                  forma singular para cada pessoa, respeitando sua história, seus vínculos e seu
                  tempo. Promovo um cuidado humano, empático e comprometido, onde você pode falar
                  com liberdade, elaborar suas experiências e criar novos caminhos com mais clareza
                  e autonomia.
                </p>
                <p className="text-muted-foreground font-light text-justify">
                  Se fizer sentido para você, será um prazer caminharmos juntos!
                </p>
              </div>
            </div>
          </div>

          {/* Currículo block - mustard panel like "How it Works" */}
          <div className="bg-accent/80 rounded-sm p-8 md:p-14 relative">
            <p className="font-light text-xs md:text-sm tracking-[0.3em] uppercase text-accent-foreground/70 mb-3 text-center">
              FORMAÇÃO ACADÊMICA
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal text-accent-foreground mb-10 text-center">
              {"\n"}
            </h2>

            <div className="space-y-8 max-w-3xl mx-auto">
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-playfair font-normal text-accent-foreground">
                  {"\n"}
                </h3>

                <div className="space-y-1">
                  <p className="text-base md:text-lg leading-relaxed text-accent-foreground font-semibold">
                    Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-accent-foreground/80 font-light">
                    <span className="mr-2">•</span>Graduação em Psicologia
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-accent-foreground/80 font-light">
                    <span className="mr-2">•</span>Esp. em Psicologia da Saúde (Urgência e Emergência)
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-base md:text-lg leading-relaxed text-accent-foreground font-semibold">
                    Universidade de Lleida / ESPANHA
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-accent-foreground/80 font-light">
                    <span className="mr-2">•</span>Intercâmbio acadêmico
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-base md:text-lg leading-relaxed text-accent-foreground font-semibold">
                    Centro de Estudos da Família e do Indivíduo (CEFI)
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-accent-foreground/80 font-light">
                    <span className="mr-2">•</span>Esp. em Terapia Sistêmica
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-accent-foreground/20">
                <h3 className="text-xl md:text-2xl font-playfair font-normal text-accent-foreground">
                  Registro Profissional
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-accent-foreground font-light">
                  CRP 07/34490
                </p>
                <p className="text-sm text-accent-foreground/70 font-light">
                  Conselho Regional de Psicologia - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
