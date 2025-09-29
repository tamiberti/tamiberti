import { Button } from "@/components/ui/button";
const Contact = () => {
  return <section id="contact" className="py-24 md:py-32 px-6 animate-slide-up">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-12 md:space-y-16 text-center">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-playfair font-normal text-primary">
            Entre em contato
          </h2>

          {/* Simple Contact Info */}
          <div className="space-y-6 md:space-y-8">
            
            
            <div className="space-y-3 text-base md:text-lg">
              <p className="text-muted-foreground font-light">📧 tamisberti@gmail.com.br</p>
              <p className="text-muted-foreground font-light">📱 (51) 992188634</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed CTA Button - Alice Abadi style */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm font-light" onClick={() => window.open('https://wa.me/5551992188634?text=Olá%2C+gostaria+de+agendar+uma+consulta', '_blank')}>
          Agende sua consulta
          <span className="ml-2">📱</span>
        </Button>
      </div>
    </section>;
};
export default Contact;