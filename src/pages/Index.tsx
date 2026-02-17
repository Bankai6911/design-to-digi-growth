import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";

import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <WhyChooseUs />
      
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
