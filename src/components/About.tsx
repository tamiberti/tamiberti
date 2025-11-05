import profileImage from "@/assets/tami-berti-profile.jpg";
const About = () => {
  return <section id="about" className="py-24 md:py-32 px-6 animate-page-enter">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 md:space-y-16">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-playfair text-left font-normal lg:text-4xl text-[#806751]">
            Sobre mim
          </h2>

          {/* Content with Image */}
          <div className="grid md:grid-cols-[1fr,auto] gap-8 md:gap-12 items-start">
            <div className="space-y-6 text-base md:text-lg leading-relaxed text-left">
              <p className="text-xl text-left md:text-lg font-extrabold text-[#806751]">
                Oi, que bom te ter por aqui!
              </p>
              
              <p className="text-muted-foreground font-light text-justify">Eu sou a Tami, psicóloga clínica e hospitalar. Minha atuação é voltada ao cuidado emocional de adultos e embasada na Terapia Sistêmica, uma abordagem que compreende cada pessoa em suas relações e contextos, reconhecendo que vínculos, histórias e ambientes influenciam  nossas escolhas, emoções e formas de estar no mundo.</p>
              
              <p className="text-muted-foreground font-light text-justify">As minhas sessões acontecem de forma online, o que nos permite trabalhar juntos, independentemente de onde você esteja. Atendo em especial brasileiros que vivem fora do país, acolhendo as particularidades de quem atravessa o processo de migração e os desafios de se reinventar longe de casa. Ainda assim, este é um espaço aberto a todas as pessoas que buscam cuidar de si com mais presença e gentileza.</p>
              
              <p className="text-muted-foreground font-light text-justify">Nosso trabalho começa com uma avaliação clínica, para que eu possa te conhecer e entender de que forma posso te ajudar. A partir daí, seguimos juntos com o processo terapêutico, construindo passo a passo um espaço seguro de acolhimento e reflexão. Nesse percurso, definimos objetivos em conjunto, respeitando sempre o teu ritmo e as tuas necessidades.


A terapia é um convite a dar voz ao que sentimos, revisitar histórias e criar possibilidades de mudança. Esse processo acontece a partir de uma relação construída com confiança, ética e autenticidade, sustentada pela escuta atenta e livre de julgamentos.</p>
              
              <p className="text-muted-foreground font-light">Se quiser saber mais ou tiver alguma dúvida, fique à vontade para me procurar.
Conta comigo!</p>
            </div>

            {/* Profile Image */}
            <div className="md:w-64 lg:w-80 animate-fade-in">
              <img src={profileImage} alt="Tami Berti" className="rounded-lg shadow-medium w-full object-cover" />
            </div>
          </div>

          {/* Formação Section - Now as continuous text */}
          <div className="pt-8 md:pt-12 space-y-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-left text-[#806751]">
              Currículo
            </h3>
            
            <div className="space-y-8">
              <div className="space-y-4 text-left">
                <h4 className="text-xl md:text-2xl font-playfair font-normal mb-4 text-[#7a634f]">
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
                <h4 className="text-xl md:text-2xl font-playfair font-normal text-left text-[#806751]">
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
          </div>
        </div>
      </div>
    </section>;
};
export default About;