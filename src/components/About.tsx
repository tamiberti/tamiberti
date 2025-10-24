import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-secondary animate-page-enter">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 md:space-y-16">
          {/* Section Title with script font */}
          <h2 className="text-4xl md:text-5xl font-cormorant italic text-background font-light">
            Oi, que bom te ver por aqui!
          </h2>

          {/* Content */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-background">
            <p className="font-light">
              Me chamo Tami, sou psicóloga clínica e hospitalar.
            </p>
            
            <p className="font-light">
              Minha atuação é embasada na Terapia Sistêmica, abordagem que busca compreender cada pessoa em suas relações e contextos. Entendendo que vínculos, histórias e ambientes influenciam diretamente nossas escolhas, emoções e formas de estar no mundo.
            </p>
            
            <p className="font-light">
              As sessões acontecem na modalidade online, o que nos permite trabalhar juntos, independentemente de onde você esteja.
            </p>
            
            <p className="font-light">
              A terapia é um espaço para dar voz ao que sentimos, revisitar histórias e vivenciar mudanças. Isso se torna possível quando a relação terapêutica é construída com confiança, acolhimento e autenticidade. Nosso trabalho aqui começa com uma avaliação clínica, para que eu possa te conhecer melhor e identificar de que forma posso ajudar. A partir daí, seguimos com o processo terapêutico, no qual construímos, passo a passo, um espaço seguro de acolhimento e reflexão. Nele, vamos estabelecer objetivos juntos, respeitando sempre teu ritmo e tuas necessidades.
            </p>
            
            <p className="font-light">
              O que você busca aqui é legítimo, independente da demanda e siga acolhido com cuidado e comprometimento. Se me permitir duvidar, faça a vontade para me procurar. Conte comigo!
            </p>
          </div>

          {/* Currículo Section - Accordion */}
          <div className="pt-12 md:pt-16">
            <Accordion type="single" collapsible className="w-full border-t border-background/20">
              <AccordionItem value="formacao" className="border-background/20">
                <AccordionTrigger className="hover:no-underline py-8">
                  <div className="flex items-center gap-8 w-full">
                    <h3 className="text-4xl md:text-5xl font-cormorant italic text-background font-light">
                      Currículo
                    </h3>
                    <div className="flex-1 h-px bg-background/20"></div>
                    <span className="text-xs uppercase tracking-[0.2em] text-background/70 font-light">
                      Formação Acadêmica
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8 pt-4 pb-8">
                    <div className="space-y-4">
                      <p className="text-background/90 font-light">
                        Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                      </p>
                      <p className="text-background/90 font-light">
                        Mobilidade acadêmica Santander Universidades - Universitat de Lleida / Espanha
                      </p>
                      <p className="text-background/90 font-light">
                        Esp. em Psicologia da Saúde (Urgência e Emergência) - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                      </p>
                      <p className="text-background/90 font-light">
                        Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)
                      </p>
                    </div>

                    <div className="space-y-4 pt-6 md:pt-8 border-t border-background/20">
                      <h4 className="text-xs uppercase tracking-[0.2em] text-background/70 font-light">
                        Registro Profissional
                      </h4>
                      <div className="space-y-2">
                        <p className="text-background/90 font-light">
                          CRP 07/34490
                        </p>
                        <p className="text-sm text-background/70 font-light">
                          Conselho Regional de Psicologia - RS
                        </p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
