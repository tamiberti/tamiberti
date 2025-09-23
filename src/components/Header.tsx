import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-20">
          {/* Simple centered navigation */}
          <nav className="flex space-x-12 text-lg">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-light"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-light"
            >
              Sobre mim
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-light"
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