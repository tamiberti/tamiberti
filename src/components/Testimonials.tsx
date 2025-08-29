import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Dra. Berti foi fundamental para me ajudar a trabalhar minha ansiedade. Sua abordagem compassiva e estratégias práticas fizeram uma diferença significativa na minha vida diária. Finalmente sinto que tenho as ferramentas para gerenciar meu estresse de forma eficaz.",
      treatment: "Terapia Individual - Ansiedade"
    },
    {
      name: "Michael & Jennifer R.",
      location: "Santa Monica, CA",
      rating: 5,
      text: "Nosso casamento estava à beira do colapso quando conhecemos a Dra. Berti. Através de sua orientação, aprendemos a nos comunicar melhor e reconstruir a confiança. Agora estamos mais fortes do que nunca e não podemos agradecê-la o suficiente por ajudar a salvar nosso relacionamento.",
      treatment: "Terapia de Casal"
    },
    {
      name: "David L.",
      location: "Beverly Hills, CA",
      rating: 5,
      text: "Após lutar contra a depressão por anos, a Dra. Berti me ajudou a entender as causas raiz e desenvolver estratégias de enfrentamento. Sua abordagem baseada em evidências combinada com cuidado genuíno fez toda a diferença. Estou vivendo uma vida mais plena agora.",
      treatment: "Terapia Individual - Depressão"
    },
    {
      name: "A Família Johnson",
      location: "Pasadena, CA",
      rating: 5,
      text: "Dra. Berti ajudou nossa família a navegar por um momento difícil quando nosso adolescente estava passando por dificuldades. Suas sessões de terapia familiar melhoraram nossa comunicação e nos aproximaram. Somos gratos por sua expertise e paciência.",
      treatment: "Terapia Familiar"
    },
    {
      name: "Emma K.",
      location: "Manhattan Beach, CA",
      rating: 5,
      text: "A avaliação psicológica que a Dra. Berti conduziu foi completa e esclarecedora. Finalmente entender meu TDAH mudou minha vida. Suas recomendações me ajudaram a ter sucesso de maneiras que nunca pensei serem possíveis.",
      treatment: "Avaliação Psicológica"
    },
    {
      name: "Robert S.",
      location: "West Hollywood, CA",
      rating: 5,
      text: "A abordagem informada sobre trauma da Dra. Berti me ajudou a processar experiências que pensei que nunca conseguiria superar. Seu ambiente seguro e acolhedor me permitiu curar no meu próprio ritmo. Agora consigo seguir em frente com confiança.",
      treatment: "Terapia de Trauma"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Depoimentos de Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias reais de clientes que experimentaram transformação positiva através da terapia.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center shadow-soft bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Clientes Atendidos</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Satisfação do Cliente</div>
            </CardContent>
          </Card>
          <Card className="text-center shadow-soft bg-gradient-card border-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-medium bg-gradient-card border-0 hover:shadow-strong transition-all duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="border-t border-border pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                      {testimonial.treatment}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="inline-block shadow-medium bg-gradient-card border-0 p-8">
            <CardContent className="p-0">
              <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                Pronta para Começar Sua Jornada?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Junte-se a centenas de clientes que encontraram cura e crescimento através de terapia compassiva e profissional.
              </p>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">* Os nomes dos clientes foram alterados para proteger a privacidade</p>
                <p>Todos os depoimentos são de clientes reais com consentimento por escrito</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;