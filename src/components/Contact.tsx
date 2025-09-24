import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 px-8 lg:px-16 bg-muted/30 relative">
      {/* Background geometric element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/20 rounded-bl-[100px]" />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content with Serif Font like the image */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl font-normal text-foreground mb-6">
                Entre em contato
              </h2>
              <div className="w-12 h-px bg-foreground" />
            </div>

            <p className="text-xl lg:text-2xl font-light text-foreground leading-relaxed">
              Vamos conversar?
            </p>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <span>tamisberti@gmail.com.br</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-lg">📱</span>
                <span>(51) 992188634</span>
              </p>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="flex justify-center lg:justify-end">
            <div className="text-center">
              <Button 
                className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 text-base font-light transition-all duration-300 hover:scale-105" 
                onClick={() => window.open('https://wa.me/5551992188634?text=Olá%2C+gostaria+de+agendar+uma+consulta', '_blank')}
              >
                Agende sua consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;