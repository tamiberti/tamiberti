import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const About = () => {
  return <section id="about" className="py-24 md:py-32 px-6 animate-page-enter">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-12 md:space-y-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-playfair text-primary text-left font-normal lg:text-4xl">
            Sobre mim
          </h2>

          {/* Content */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-left">
            <p className="text-xl text-primary text-left md:text-lg font-extrabold">
              Oi, que bom te ter por aqui!
            </p>
            
            <p className="text-muted-foreground font-light text-justify">Eu sou a Tami, psicóloga clínica há cinco anos, com experiência também na área da psicologia hospitalar. Natural de Porto Alegre, no Rio Grande do Sul, estou vivenciando pela segunda vez o processo de migração para fora do país. Por isso, meu atendimento acontece de forma online, o que nos permite trabalhar juntos independentemente de onde você esteja.</p>
            
            <p className="text-muted-foreground font-light text-justify">Atendo exclusivamente o público adulto e atuo a partir da Terapia Sistêmica, abordagem que busca compreender cada pessoa dentro de suas relações e contextos. Nessa perspectiva, os vínculos e ambientes são entendidos como elementos que influenciam nossas escolhas, emoções e formas de estar no mundo. 


A terapia é um espaço para dar voz ao que sentimos, até mesmo àquilo que nem sempre conseguimos nomear. É um lugar de escuta, onde podemos revisitar histórias, emoções e aspectos de nós mesmos que, por vezes, ficaram adormecidos ou silenciados. Para que isso aconteça, é essencial que a relação terapêutica seja construída com confiança, acolhimento e autenticidade, pois é nesse encontro que nasce a possibilidade de transformação.</p>
            
            <p className="text-muted-foreground font-light text-justify">
              Nosso trabalho começa com uma avaliação clínica, para que possamos nos conhecer melhor e eu possa compreender sua história e identificar de que forma posso ajudar. A partir daí, seguimos com o processo terapêutico, no qual construímos, passo a passo, um espaço seguro de acolhimento e reflexão. Nele, vamos estabelecer objetivos juntos, respeitando sempre seu ritmo e suas necessidades.
            </p>
            
            <p className="text-muted-foreground font-light">Se tiver alguma dúvida, fique à vontade para me procurar. 
Conte comigo!</p>
          </div>

          {/* Formação Section - Accordion */}
          <div className="pt-8 md:pt-12">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="formacao" className="border-border/30">
                <AccordionTrigger className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-left text-primary hover:no-underline py-6">
                  Currículo
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-8 pt-4">
                    <div className="space-y-4 text-left">
                      <h4 className="text-xl md:text-2xl font-playfair font-normal text-primary mb-4">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>;
};
export default About;