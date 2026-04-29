import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "Quando devo buscar a psicoterapia?",
    answer:
      "A psicoterapia pode fazer sentido em diferentes momentos da vida: quando você busca apoio emocional, atravessa um período desafiador, enfrenta mudanças importantes ou simplesmente deseja se conhecer melhor. Não é necessário estar em crise para começar. Cuidar da saúde mental também pode ser um movimento preventivo, de autoconhecimento e de transformação contínua.",
  },
  {
    question: "Quanto tempo dura cada sessão e com que frequência elas acontecem?",
    answer:
      "Os encontros acontecem uma vez por semana e têm duração de 50 minutos. A frequência pode ser ajustada de acordo com as necessidades do paciente e o andamento do processo terapêutico.",
  },
  {
    question: "Como funcionam as sessões online?",
    answer:
      "As sessões são realizadas exclusivamente na modalidade online, por meio de plataforma de videochamada. O link de acesso é enviado próximo ao horário da consulta. É importante que o paciente esteja em um local tranquilo, onde possa falar com liberdade e sem interrupções. Para um melhor aproveitamento do atendimento, recomenda-se um ambiente com boa iluminação e conexão de internet estável.",
  },
];

const Psicoterapia = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="duvidas"
      className="py-24 md:py-32 px-6 animate-page-enter bg-secondary"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Left side - Title */}
          <div className="md:w-1/3 flex-shrink-0">
            <p className="font-light text-xs md:text-sm tracking-[0.3em] uppercase text-accent mb-3">
              {"\n"}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-normal text-foreground leading-tight">
              Dúvidas
              <br />
              <span className="italic">frequentes</span>
            </h2>
          </div>

          {/* Right side - Accordion */}
          <div className="flex-1 space-y-4 w-full">
            {faqItems.map((item, index) => (
              <div key={index}>
                {/* Trigger */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between bg-background rounded-sm px-6 py-4 text-left transition-all hover:bg-background/80 shadow-soft"
                >
                  <span className="text-base md:text-lg font-light text-foreground">
                    {item.question}
                  </span>
                  <span className="ml-4 flex-shrink-0 text-accent">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </span>
                </button>

                {/* Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-4 text-base md:text-lg leading-relaxed text-foreground/90 font-light text-justify">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psicoterapia;
