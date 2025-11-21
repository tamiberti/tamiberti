import profileImage from "@/assets/tami-berti-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-12 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* Profile Image - Centered at top */}
        <div className="flex justify-center mb-12 md:mb-16">
          <img 
            src={profileImage} 
            alt="Tami Berti" 
            className="w-64 md:w-80 lg:w-96 rounded-lg shadow-medium object-cover animate-fade-in" 
          />
        </div>
        
        <div className="space-y-12 md:space-y-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-playfair text-center font-normal text-foreground">
            Sobre mim
          </h2>

          {/* Content */}
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground font-light">
              Eu sou a Tami, psicóloga clínica e hospitalar. Minha atuação é voltada ao cuidado emocional de adultos e embasada na Terapia Sistêmica, uma abordagem que compreende cada pessoa em suas relações e contextos, reconhecendo que vínculos, histórias e ambientes influenciam nossas escolhas, emoções e formas de estar no mundo.
            </p>
            
            <p className="text-muted-foreground font-light">
              A terapia é um convite a dar voz ao que sentimos, revisitar histórias e criar possibilidades de mudança. Esse processo acontece a partir de uma relação construída com confiança, ética e autenticidade, sustentada pela escuta atenta e livre de julgamentos.
            </p>
            
            <p className="text-muted-foreground font-light">
              As minhas sessões acontecem de forma online, o que nos permite trabalhar juntos, independentemente de onde você esteja. Atendo em especial brasileiros que vivem fora do país, acolhendo as particularidades de quem atravessa o processo de migração e os desafios de se reinventar longe de casa. Ainda assim, este é um espaço aberto a todas as pessoas que buscam cuidar de si com mais presença e gentileza.
            </p>
            
            <p className="text-muted-foreground font-light">
              Nosso trabalho começa com uma avaliação clínica, para que eu possa te conhecer e entender de que forma posso te ajudar. A partir daí, seguimos juntos com o processo terapêutico, construindo passo a passo um espaço seguro de acolhimento e reflexão. Nesse percurso, definimos objetivos em conjunto, respeitando sempre o teu ritmo e as tuas necessidades.
            </p>
            
            <p className="text-muted-foreground font-light">
              Se quiser saber mais ou tiver alguma dúvida, fique à vontade para me procurar. Conta comigo!
            </p>
          </div>

          {/* Formação Section */}
          <div className="pt-8 md:pt-12 space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-normal text-foreground">
              Formação e Registro
            </h3>
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-3">
                <p className="text-muted-foreground font-light">
                  Graduação em Psicologia - Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)
                </p>
                <p className="text-muted-foreground font-light">
                  Mobilidade acadêmica Santander Universidades - Universitat de Lleida / Espanha
                </p>
                <p className="text-muted-foreground font-light">
                  Esp. em Psicologia da Saúde (Urgência e Emergência) - PUCRS
                </p>
                <p className="text-muted-foreground font-light">
                  Esp. em Terapia Sistêmica - Centro de Estudos da Família e do Indivíduo (CEFI)
                </p>
              </div>

              <div className="pt-4 space-y-2">
                <p className="text-muted-foreground font-light">
                  CRP 07/34490
                </p>
                <p className="text-sm text-muted-foreground font-light">
                  Conselho Regional de Psicologia - RS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
