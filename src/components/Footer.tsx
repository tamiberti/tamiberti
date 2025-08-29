import { Heart, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl">Dra. Tami Berti</h3>
                <p className="text-primary-foreground/80">Psicóloga Clínica</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Fornecendo terapia compassiva e baseada em evidências para ajudar indivíduos, 
              casais e famílias a alcançar o bem-estar mental e crescimento pessoal.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Rua do Bem-Estar, 1234, São Paulo, SP 01234-567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">contato@tamiberti.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Currículo
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>Terapia Individual</p>
              <p>Terapia de Casal</p>
              <p>Terapia Familiar</p>
              <p>Avaliação Psicológica</p>
              <p>Terapia de Trauma</p>
              <p>Tratamento de Ansiedade e Depressão</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} Dra. Tami Berti, Psicóloga Clínica. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-primary-foreground/80 text-sm">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Termos de Serviço
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Aviso LGPD
              </a>
            </div>
          </div>
          <div className="text-center text-primary-foreground/60 text-xs mt-4">
            Psicóloga Clínica Licenciada • CRP 06/123456 • Conselho Regional de Psicologia - São Paulo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;