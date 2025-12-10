import { Button } from "@/components/ui/button";
import contactBg from "@/assets/contact-background.png";
const Contact = () => {
  return <section id="contact" className="py-24 md:py-32 px-6 animate-slide-up bg-cover bg-center bg-no-repeat min-h-screen flex items-center" style={{
    backgroundImage: `url(${contactBg})`
  }}>
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-12 md:space-y-16 text-center">
          {/* Section Title */}
          <h2 className="text-2xl font-playfair font-normal text-neutral-50 md:text-6xl my-0 py-0">
            Entre em contato
          </h2>

          {/* Simple Contact Info */}
          <div className="space-y-6 md:space-y-8">
            
            
            <div className="space-y-3 text-base md:text-lg">
              <p className="font-light text-neutral-50 text-3xl">📧 tamisberti@gmail.com.br</p>
              <p className="font-light text-neutral-50 text-3xl">📱 (51) 99218-8634</p>
            </div>
          </div>

          {/* CVV Section */}
          <div className="mt-16 pt-12 border-t border-border/30 space-y-6">
            <h3 className="text-xl md:text-2xl font-playfair font-normal text-foreground">
              Precisa de atendimento urgente?
            </h3>
            <p className="text-muted-foreground font-light text-sm md:text-base max-w-xl mx-auto">
              O Centro de Valorização da Vida oferece apoio emocional e atua na prevenção do suicídio por meio de um atendimento voluntário e acolhedor. Para conversar, clique no botão abaixo.
            </p>
            <Button onClick={() => window.open('https://cvv.org.br/chat/', '_blank')} className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-light">
              Chat CVV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Fixed CTA Button - Alice Abadi style */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button onClick={() => window.open('https://wa.me/5551992188634?text=Oi%2C+Tami!+Gostaria+de+informações+sobre+psicoterapia+online+contigo.+Pode+me+auxiliar%3F', '_blank')} className="px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm font-light text-primary-foreground bg-[#d1bfb3]">
          Agende sua consulta
          <span className="ml-2">📱</span>
        </Button>
      </div>
    </section>;
};
export default Contact;