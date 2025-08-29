import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Heart, Brain, Calendar, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Terapia Individual",
      duration: "50 minutos",
      price: "R$ 300",
      description: "Sessões individuais focadas em seus objetivos pessoais e desafios.",
      features: [
        "Tratamento de ansiedade e depressão",
        "Terapia informada sobre trauma",
        "Terapia cognitivo-comportamental",
        "Intervenções baseadas em mindfulness"
      ]
    },
    {
      icon: Users,
      title: "Terapia de Casal",
      duration: "60 minutos",
      price: "R$ 400",
      description: "Fortaleça seu relacionamento através de melhor comunicação e compreensão.",
      features: [
        "Treinamento em habilidades de comunicação",
        "Estratégias de resolução de conflitos",
        "Construção de intimidade e conexão",
        "Aconselhamento pré-matrimonial"
      ]
    },
    {
      icon: Heart,
      title: "Terapia Familiar",
      duration: "60 minutos",
      price: "R$ 360",
      description: "Abordar dinâmicas familiares e melhorar relacionamentos dentro do sistema familiar.",
      features: [
        "Questões de relacionamento pais-filhos",
        "Desafios de famílias mistas",
        "Preocupações comportamentais de adolescentes",
        "Padrões de comunicação familiar"
      ]
    },
    {
      icon: Brain,
      title: "Avaliação Psicológica",
      duration: "2-3 horas",
      price: "R$ 800",
      description: "Avaliação abrangente para entender o funcionamento cognitivo e emocional.",
      features: [
        "Avaliação de TDAH e dificuldades de aprendizagem",
        "Avaliação de personalidade",
        "Avaliação cognitiva",
        "Recomendações de planejamento de tratamento"
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Serviços Profissionais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serviços abrangentes de saúde mental adaptados para atender às suas necessidades únicas e apoiar sua jornada em direção ao bem-estar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="shadow-medium bg-gradient-card border-0 hover:shadow-strong transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-playfair text-foreground">{service.title}</CardTitle>
                      <div className="flex items-center gap-4 mt-1">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="text-primary font-semibold text-lg">
                          {service.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">O que está incluído:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full mt-6 bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-accent/20 rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
            Agendamento Flexível e Convênios
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Horários de Atendimento</h4>
              <p className="text-muted-foreground">Consultas noturnas e de fim de semana disponíveis para acomodar sua agenda.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Convênios Aceitos</h4>
              <p className="text-muted-foreground">Principais planos de saúde aceitos. Ajudaremos a verificar sua cobertura.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Opções de Telemedicina</h4>
              <p className="text-muted-foreground">Sessões online seguras disponíveis para sua conveniência e conforto.</p>
            </div>
          </div>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground"
          >
            Contato para Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;