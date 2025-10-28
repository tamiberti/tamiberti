const Contact = () => {
  return <section id="contact" className="py-24 md:py-32 px-6 bg-secondary-light animate-slide-up">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 md:space-y-16">
          {/* Section Title - Mixed typography */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-6xl font-playfair uppercase tracking-wide text-primary font-light">
              VAMOS
            </h2>
            <h2 className="text-5xl md:text-7xl font-cormorant italic text-primary font-light -mt-2">
              conversar
            </h2>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary/70 font-light">
                Telefone
              </h3>
              <p className="text-lg md:text-xl text-primary font-light">
                (51) 99218-8634
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-primary/70 font-light">
                E-mail
              </h3>
              <p className="text-lg md:text-xl text-primary font-light">
                tamisberti@gmail.com.br
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button onClick={() => window.open('https://wa.me/5551992188634?text=Oi%2C+Tami!+Gostaria+de+informações+sobre+psicoterapia+online+contigo.+Pode+me+auxiliar%3F', '_blank')} className="px-10 py-4 uppercase text-xs tracking-[0.2em] font-light transition-all duration-300 bg-slate-500 hover:bg-slate-400 text-slate-950">
              Entre em contato
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;