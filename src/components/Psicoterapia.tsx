const Psicoterapia = () => {
  return (
    <section id="psicoterapia" className="min-h-screen py-24 md:py-32 px-6 animate-page-enter bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 md:space-y-16">
          {/* How sessions work */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-normal text-[#806751]">
              Como são os encontros:
            </h2>
            
            <div className="space-y-6 max-w-3xl">
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light text-justify">
                A primeira sessão é um momento para escutar com atenção a tua história, dúvidas e expectativas. A partir daí, seguimos juntos com o processo terapêutico, construindo passo a passo um espaço seguro de acolhimento e reflexão.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light text-justify">
                As sessões tem duração de 50 minutos e são realizadas na modalidade Online.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light text-justify">
                A frequência mais comum é semanal, mas pode ser ajustada conforme necessidade e momento de vida.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-light text-justify">
                Entre em contato para agendar a primeira sessão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psicoterapia;
