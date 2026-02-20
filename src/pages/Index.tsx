import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GrowthEcosystem from "@/components/GrowthEcosystem";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <GrowthEcosystem />
      <Services />
      <Industries />
      <Process />
      <WhyChooseUs />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
