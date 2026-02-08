import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento para escutar com atenção a tua história, dúvidas e expectativas. A partir daí, seguimos juntos com o processo terapêutico, construindo passo a passo um espaço seguro de acolhimento e reflexão.",
  },
  {
    question: "Quanto tempo dura cada sessão e com que frequência elas acontecem?",
    answer:
      "As sessões tem duração de 50 minutos e são realizadas na modalidade Online. A frequência mais comum é semanal, mas pode ser ajustada conforme necessidade e momento de vida.",
  },
  {
    question: "Como agendar uma sessão?",
    answer:
      "Entre em contato pelo WhatsApp para agendar a primeira sessão. Terei prazer em te acolher e esclarecer qualquer dúvida sobre o processo terapêutico.",
  },
];

const Psicoterapia = () => {
  return (
    <section
      id="psicoterapia"
      className="min-h-screen py-24 md:py-32 px-6 animate-page-enter bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-[#806751]">
              Dúvidas Frequentes
            </h2>

            <Accordion type="single" collapsible className="w-full max-w-3xl">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-border/40"
                >
                  <AccordionTrigger className="text-base md:text-lg font-light text-foreground hover:no-underline hover:text-[#806751] transition-colors py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg leading-relaxed text-muted-foreground font-light text-justify pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psicoterapia;
