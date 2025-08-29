import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const Resume = () => {
  const education = [
    {
      degree: "Ph.D. em Psicologia Clínica",
      institution: "Universidade da Califórnia, Los Angeles",
      year: "2008",
      details: "Dissertação: Intervenções Cognitivo-Comportamentais para Transtornos de Ansiedade"
    },
    {
      degree: "M.A. em Psicologia",
      institution: "Universidade da Califórnia, Los Angeles",
      year: "2005",
      details: "Ênfase em Psicologia Clínica e Métodos de Pesquisa"
    },
    {
      degree: "B.A. em Psicologia",
      institution: "Universidade Stanford",
      year: "2003",
      details: "Magna Cum Laude, Phi Beta Kappa"
    }
  ];

  const experience = [
    {
      position: "Psicóloga Clínica",
      organization: "Consultório Particular",
      period: "2010 - Presente",
      responsibilities: [
        "Fornecer terapia individual, de casal e familiar",
        "Conduzir avaliações e exames psicológicos",
        "Desenvolver e implementar planos de tratamento",
        "Manter carga ativa de 25-30 clientes"
      ]
    },
    {
      position: "Psicóloga Clínica Sênior",
      organization: "Centro de Bem-Estar da Califórnia",
      period: "2008 - 2010",
      responsibilities: [
        "Liderou equipe multidisciplinar de tratamento",
        "Supervisionou estagiários de doutorado em psicologia",
        "Desenvolveu protocolos de tratamento para transtornos de ansiedade",
        "Conduziu sessões de terapia em grupo"
      ]
    },
    {
      position: "Estagiária em Psicologia",
      organization: "Centro Médico UCLA",
      period: "2007 - 2008",
      responsibilities: [
        "Forneceu terapia na unidade psiquiátrica de internação",
        "Conduziu avaliações neuropsicológicas",
        "Participou de consultas de caso",
        "Completou mais de 2000 horas de prática supervisionada"
      ]
    }
  ];

  const certifications = [
    "Psicóloga Clínica Licenciada - Califórnia (PSY12345)",
    "Praticante Certificada em Cuidado Informado sobre Trauma",
    "Certificação em Terapia EMDR",
    "Certificação em Terapia Cognitivo-Comportamental",
    "Certificação em Terapia de Casal (Método Gottman)"
  ];

  const publications = [
    "Berti, T. (2019). Intervenções Baseadas em Mindfulness para Ansiedade: Uma Meta-Análise. Revista de Psicologia Clínica, 75(8), 1432-1448.",
    "Berti, T., & Johnson, M. (2018). A Eficácia da TCC no Tratamento da Depressão: Um Estudo de Acompanhamento de 10 Anos. Revisão Psicológica, 42(3), 256-271.",
    "Berti, T. (2017). Integrando Tecnologia na Prática Terapêutica Moderna. Psicólogo Americano, 72(5), 389-402."
  ];

  return (
    <section id="resume" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Formação Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 15 anos de experiência dedicada em psicologia clínica, pesquisa e prática terapêutica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <GraduationCap className="w-6 h-6 mr-3 text-primary" />
                Formação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary/30 pl-6">
                  <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-sm text-muted-foreground italic">{edu.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <Briefcase className="w-6 h-6 mr-3 text-primary" />
                Experiência Profissional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-secondary/30 pl-6">
                  <h3 className="font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-secondary font-medium">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <ul className="space-y-1">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications & Licenses */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <Award className="w-6 h-6 mr-3 text-primary" />
                Certificações e Licenças
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-2 px-4 border-primary/30 text-primary w-full justify-start"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Publications & Research */}
          <Card className="shadow-medium bg-gradient-card border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-xl font-playfair text-foreground">
                <BookOpen className="w-6 h-6 mr-3 text-primary" />
                Publicações Recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <div key={index} className="p-4 bg-accent/20 rounded-lg">
                    <p className="text-sm text-muted-foreground leading-relaxed">{pub}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professional Memberships */}
        <Card className="mt-8 shadow-medium bg-gradient-card border-0">
          <CardHeader>
            <CardTitle className="text-xl font-playfair text-foreground text-center">
              Membros Profissionais e Afiliações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-4">
                <p className="font-medium text-foreground">Associação Americana de Psicologia</p>
                <p className="text-sm text-muted-foreground">Membro desde 2008</p>
              </div>
              <div className="p-4">
                <p className="font-medium text-foreground">Associação de Psicologia da Califórnia</p>
                <p className="text-sm text-muted-foreground">Membro Ativo</p>
              </div>
              <div className="p-4">
                <p className="font-medium text-foreground">Associação Internacional de Terapeutas</p>
                <p className="text-sm text-muted-foreground">Membro do Conselho</p>
              </div>
              <div className="p-4">
                <p className="font-medium text-foreground">Consórcio de Cuidado Informado sobre Trauma</p>
                <p className="text-sm text-muted-foreground">Praticante Certificada</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;