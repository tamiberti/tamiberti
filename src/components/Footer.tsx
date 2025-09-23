import leafBackground from "@/assets/leaf-background.jpg";

const Footer = () => {
  return (
    <footer 
      className="py-12 px-6 relative"
      style={{
        backgroundImage: `url(${leafBackground})`,
        backgroundSize: '120%',
        backgroundPosition: 'center 30%',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'crisp-edges'
      }}
    >
      <div className="absolute inset-0 bg-background/40"></div>
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <p className="text-foreground text-sm">
          © 2024 Tami Berti • Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;