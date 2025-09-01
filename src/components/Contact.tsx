import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16 text-center">
          {/* Section Title */}
          <h2 className="font-playfair text-5xl md:text-6xl font-light">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contato
            </span>
          </h2>

          {/* Simple Contact Info */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Vamos conversar? Entre em contato comigo.
            </p>
            
            <div className="space-y-4 text-lg">
              <p className="text-foreground">
                📧 contato@tamiberti.com.br
              </p>
              <p className="text-foreground">
                📱 (11) 99999-9999
              </p>
              <p className="text-muted-foreground text-base">
                São Paulo, SP • Atendimento presencial e online
              </p>
            </div>

            {/* Simple CTA Button */}
            <div className="pt-8">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-light rounded-full"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá, gostaria de agendar uma consulta', '_blank')}
              >
                Agende sua consulta
              </Button>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-12 border-t border-border">
            <p className="text-sm text-muted-foreground">
              CRP 06/123456 • Atendimento conforme o Código de Ética Profissional do Psicólogo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;