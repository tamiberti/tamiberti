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
                <h3 className="font-playfair font-bold text-xl">Dr. Tami Berti</h3>
                <p className="text-primary-foreground/80">Clinical Psychologist</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Providing compassionate, evidence-based therapy to help individuals, 
              couples, and families achieve mental wellness and personal growth.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">1234 Wellness Blvd, Beverly Hills, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">hello@tamiberti.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('resume')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Resume
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>Individual Therapy</p>
              <p>Couples Counseling</p>
              <p>Family Therapy</p>
              <p>Psychological Assessment</p>
              <p>Trauma Therapy</p>
              <p>Anxiety & Depression Treatment</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © {currentYear} Dr. Tami Berti, Clinical Psychologist. All rights reserved.
            </div>
            <div className="flex space-x-6 text-primary-foreground/80 text-sm">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
          <div className="text-center text-primary-foreground/60 text-xs mt-4">
            Licensed Clinical Psychologist • PSY12345 • State of California
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;