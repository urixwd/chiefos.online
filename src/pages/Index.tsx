import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { Stage } from "../components/Stage";
import { stageSections } from "../types/stage";
import InfoSection from "../components/InfoSection";
import DesktopPromoSection from "../components/DesktopPromoSection";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      {stageSections.map((section, index) => (
        <Stage
          key={section.id}
          section={section}
          isReversed={index % 2 === 0}
        />
      ))}
      <Testimonials />
      <section id="contact-form" className="py-16 px-6 bg-gray-50">
        <ContactForm />
      </section>
      <InfoSection />
      <DesktopPromoSection />
      <Footer />
    </main>
  );
};

export default Index;
