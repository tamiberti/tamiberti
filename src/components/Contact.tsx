import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section id="contact" className="py-32 px-6 transition-all duration-1000 ease-in-out">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16 text-center">
          {/* Section Title */}
          <div className="text-left">
            <h2 className="font-playfair text-3xl md:text-4xl font-light">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
          </div>

          {/* Simple Contact Info */}
          <div className="space-y-8 text-left max-w-3xl">
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              Vamos conversar? Entre em contato comigo.
            </p>
            
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground font-light tracking-wide">📧 tamisberti@gmail.com.br</p>
              <p className="text-muted-foreground font-light tracking-wide">📱 (51) 992188634</p>
            </div>

            {/* Simple CTA Button */}
            <div className="pt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-light rounded-full" onClick={() => window.open('https://wa.me/5551992188634?text=Olá, gostaria de agendar uma consulta', '_blank')}>
                Agende sua consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;