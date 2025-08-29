import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Users, Award } from "lucide-react";
import profileImage from "@/assets/tami-berti-profile.jpg";

const About = () => {
  const specializations = [
    "Ansiedade e Depressão",
    "Terapia de Trauma",
    "Terapia de Casal",
    "Terapia Cognitivo-Comportamental",
    "Terapia Baseada em Mindfulness",
    "Terapia Familiar"
  ];

  const values = [
    {
      icon: Heart,
      title: "Cuidado Compassivo",
      description: "Cada cliente recebe atenção personalizada em um ambiente seguro e sem julgamentos."
    },
    {
      icon: Brain,
      title: "Prática Baseada em Evidências",
      description: "Usando abordagens terapêuticas comprovadas cientificamente para resultados ideais."
    },
    {
      icon: Users,
      title: "Abordagem Colaborativa",
      description: "Trabalhando juntos para desenvolver estratégias que se adequem às suas necessidades e objetivos únicos."
    },
    {
      icon: Award,
      title: "Excelência Profissional",
      description: "Comprometida com a educação continuada e manutenção dos mais altos padrões profissionais."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre Dra. Tami Berti
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicada a ajudar indivíduos e famílias a navegar pelos desafios da vida com compaixão e expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src={profileImage}
                alt="Dra. Tami Berti - Psicóloga Profissional"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            {/* Floating Quote */}
            <Card className="absolute -bottom-8 -right-8 max-w-xs shadow-strong bg-card">
              <CardContent className="p-6">
                <p className="italic text-muted-foreground mb-2">
                  "A saúde mental não é um destino, mas um processo de crescimento e autodescoberta."
                </p>
                <p className="font-semibold text-primary">- Dra. Tami Berti</p>
              </CardContent>
            </Card>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-playfair text-3xl font-semibold text-foreground">
                Sua Parceira no Bem-Estar Mental
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com mais de 15 anos de experiência em psicologia clínica, estou comprometida em fornecer 
                terapia compassiva e baseada em evidências que honra a jornada única de cada indivíduo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha abordagem integra várias modalidades terapêuticas, sempre adaptadas para atender às suas 
                necessidades e objetivos específicos. Acredito em criar um ambiente seguro e acolhedor onde 
                a cura e o crescimento podem florescer.
              </p>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="font-semibold text-xl text-foreground mb-4">Áreas de Especialização</h4>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-secondary/20 text-secondary-dark border-secondary/30"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="bg-accent/30 p-6 rounded-xl">
              <h4 className="font-semibold text-xl text-foreground mb-4">Formação e Credenciais</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ph.D. em Psicologia Clínica, Universidade da Califórnia</li>
                <li>• Psicóloga Clínica Licenciada (Licença #PSY12345)</li>
                <li>• Membro da Associação Americana de Psicologia</li>
                <li>• Certificada em Cuidado Informado sobre Trauma</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="font-playfair text-3xl font-semibold text-center text-foreground mb-12">
            Minha Abordagem Terapêutica
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-soft bg-gradient-card border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-lg text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;