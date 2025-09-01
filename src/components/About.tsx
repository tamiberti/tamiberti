import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-foreground mb-6">
              Quem Sou Eu
            </h2>
            <div className="w-16 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Sou Tami Berti, psicóloga formada pela Universidade de São Paulo com 
                especialização em Terapia Cognitivo-Comportamental e mais de 8 anos 
                de experiência clínica.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acredito que cada pessoa tem em si a capacidade de crescimento e 
                transformação. Meu trabalho é oferecer um espaço seguro e acolhedor 
                onde você possa explorar seus pensamentos e sentimentos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Especializo-me no atendimento de adultos e adolescentes, com foco 
                em ansiedade, depressão, relacionamentos e desenvolvimento pessoal.
              </p>
            </div>
            
            <Card className="shadow-soft bg-gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="font-playfair text-xl text-foreground mb-6">Formação</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground">Psicologia</p>
                    <p className="text-sm text-muted-foreground">Universidade de São Paulo (USP)</p>
                    <p className="text-sm text-muted-foreground">CRP 06/123456</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Especialização TCC</p>
                    <p className="text-sm text-muted-foreground">Instituto de Terapia Cognitiva</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Experiência</p>
                    <p className="text-sm text-muted-foreground">8+ anos de prática clínica</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;