import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-16">
          <nav className="flex space-x-8 md:space-x-12 text-sm md:text-base">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary hover:text-primary/80 transition-colors font-light uppercase tracking-wider"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-primary/80 transition-colors font-light uppercase tracking-wider"
            >
              Sobre mim
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-primary/80 transition-colors font-light uppercase tracking-wider"
            >
              Contato
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
