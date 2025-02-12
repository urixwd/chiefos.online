
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <section id="contact-form" className="py-16 px-6 bg-gray-50">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
