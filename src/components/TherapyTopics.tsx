import { Brain, HeartCrack, Flame, SearchX, ThumbsDown } from "lucide-react";

const topics = [
  { icon: Brain, title: "Problemas de ansiedade", description: "Pensamentos acelerados, inseguranças e preocupações que tomam conta da rotina." },
  { icon: HeartCrack, title: "Dificuldades nos relacionamentos", description: "Conflitos frequentes, dificuldade de comunicação ou repetições que causam sofrimento." },
  { icon: Flame, title: "Estresse e esgotamento emocional", description: "Sensação de sobrecarga no trabalho ou na vida pessoal, que afeta seu bem-estar." },
  { icon: SearchX, title: "Autocrítica excessiva", description: "Exigência constante, culpa recorrente e dificuldade de reconhecer suas conquistas." },
  { icon: ThumbsDown, title: "Baixa autoestima", description: "Sentimento de inadequação, comparação constante e dificuldade em se valorizar." },
];

const TherapyTopics = () => {
  return (
    <section id="psicoterapia" className="py-24 md:py-32 px-6 bg-primary/60">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <p className="font-light text-xs md:text-sm tracking-[0.3em] uppercase text-primary-foreground/70">
            Atenção e cuidado
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-normal text-foreground">
            Mesmo as situações que parecem pequenas merecem{" "}
            <span className="italic">atenção e cuidado.</span>
          </h2>
          <p className="text-base md:text-lg text-foreground/70 font-light">
            A terapia pode ajudar você a compreender e lidar com:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-background rounded-sm p-6 text-center space-y-4 shadow-soft border-t-4 border-accent"
            >
              <div className="flex justify-center">
                <topic.icon className="w-10 h-10 text-accent" strokeWidth={1.2} />
              </div>
              <p className="font-light text-xs tracking-[0.25em] uppercase text-muted-foreground">
                0{index + 1}
              </p>
              <h3 className="text-base md:text-lg font-playfair font-normal text-foreground">
                {topic.title}
              </h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapyTopics;
