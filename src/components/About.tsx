const About = () => {
  return <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16">
          {/* Section Title */}
          <h2 className="font-playfair text-5xl md:text-6xl font-light text-center">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre Mim
            </span>
          </h2>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            <p className="text-foreground">
              Oi, que coisa boa ter você por aqui!
            </p>
            
            <p className="text-muted-foreground">
              Me chamo Tami Berti, sou psicóloga clínica formada pela Universidade de São Paulo. 
              Meu trabalho é fortalecer nossa relação terapêutica e estar ao seu lado nos 
              momentos de dificuldade e ao longo do seu crescimento pessoal.
            </p>
            
            <p className="text-muted-foreground">
              Especializo-me em Terapia Cognitivo-Comportamental, oferecendo um atendimento 
              sensível e personalizado. A psicoterapia pode ser um espaço de acolhimento 
              e transformação, sempre baseada em evidências científicas.
            </p>
            
            <p className="text-foreground font-light">
              Conta comigo!
            </p>
          </div>

          {/* Simple Credentials */}
          <div className="text-center space-y-2 pt-8">
            <p className="text-sm text-muted-foreground"> CRP 07/34490</p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default About;