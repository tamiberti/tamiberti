import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TherapyTopics from "@/components/TherapyTopics";
import TherapyBenefits from "@/components/TherapyBenefits";
import Psicoterapia from "@/components/Psicoterapia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <TherapyTopics />
        <TherapyBenefits />
        <Psicoterapia />
        <Contact />
        <Footer />
      </div>
  );
};

export default Index;
