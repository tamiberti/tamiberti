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
            
            <p className="text-muted-foreground font-light text-justify">Eu sou a Tami, gaúcha, natural de Porto Alegre. Sou psicóloga clínica há cinco anos, com experiência também na área da psicologia hospitalar. Atualmente vivencio pela segunda vez o processo de imigração,  experiência que me aproxima dos desafios de quem escolhe (ou precisa) viver fora do seu país. Por isso, tenho me dedicado a acolher brasileiros que atravessam esse caminho, oferecendo um espaço de escuta, compreensão e apoio. Meu atendimento acontece de forma online, o que nos permite trabalhar juntos, independentemente de onde você esteja.</p>
            
            <p className="text-muted-foreground font-light text-justify">Atendo exclusivamente adultos e atuo a partir da Terapia Sistêmica, abordagem que busca compreender cada pessoa em suas relações e contextos. Entendendo que vínculos, histórias e ambientes influenciam diretamente nossas escolhas, emoções e formas de estar no mundo.</p>
            
            <p className="text-muted-foreground font-light text-justify">A terapia é um espaço para dar voz ao que sentimos, revisitar histórias e vivenciar mudanças. Isso se torna possível quando a relação terapêutica é construída com confiança, acolhimento e autenticidade. Nosso trabalho aqui começa com uma avaliação clínica, para que eu possa te conhecer melhor e identificar de que forma posso ajudar. A partir daí, seguimos com o processo terapêutico, no qual construímos, passo a passo, um espaço seguro de acolhimento e reflexão. Nele, vamos estabelecer objetivos juntos, respeitando sempre teu ritmo e tuas necessidades.</p>
            
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