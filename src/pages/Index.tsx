
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <section className="py-16 bg-gray-50">
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
