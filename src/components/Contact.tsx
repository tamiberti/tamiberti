import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section id="contact" className="py-32 px-6 bg-contact-background animate-slide-up transition-all duration-1000 ease-in-out">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-16 text-center">
          {/* Section Title */}
          <h2 className="font-cormorant text-2xl md:text-3xl font-medium text-primary">
            Entre em contato
          </h2>

          {/* Simple Contact Info */}
          <div className="space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">Vamos conversar? </p>
            
            <div className="space-y-4 text-lg">
              <p className="text-muted-foreground font-light tracking-wide">📧 tamisberti@gmail.com.br</p>
              <p className="text-muted-foreground font-light tracking-wide">📱 (51) 992188634</p>
            </div>

            {/* Simple CTA Button */}
            <div className="pt-8">
              <Button className="font-inter bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg font-light rounded-full transition-all duration-300 hover:scale-105" onClick={() => window.open('https://wa.me/5551992188634?text=Olá%2C+gostaria+de+agendar+uma+consulta', '_blank')}>
                Agende sua consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;