import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo/Brand - Script Font like the image */}
          <div className="flex-shrink-0">
            <h1 className="font-script text-2xl lg:text-3xl text-foreground font-medium">
              Tami Berti
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm lg:text-base text-foreground hover:text-muted-foreground transition-colors font-light tracking-wide uppercase"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm lg:text-base text-foreground hover:text-muted-foreground transition-colors font-light tracking-wide uppercase"
            >
              Sobre mim
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm lg:text-base text-foreground hover:text-muted-foreground transition-colors font-light tracking-wide uppercase"
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