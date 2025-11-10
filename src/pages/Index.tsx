import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { Stage } from "../components/Stage";
import { stageSections } from "../types/stage";
import InfoSection from "../components/InfoSection";
import PromoSection from "../components/PromoSection";
import { TrustedBy } from "../components/TrustedBy";
import { CookieBanner } from "../components/CookieBanner";
import FAQ from "../components/FAQ";
import { UseCases } from "../components/UseCases";
import { Pricing } from "../components/Pricing";
import { SkipperCTA } from "../components/SkipperCTA";
import { ServiceProviderSection } from "../components/ServiceProviderSection";
import { ChiefOSImpact } from "../components/ChiefOSImpact";

const Index = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      {stageSections.map((section, index) => (
        <Stage
          key={section.id}
          section={section}
          isReversed={index % 2 === 0}
        />
      ))}
      <UseCases sectionId="use-cases" />
      <Testimonials />
      <SkipperCTA sectionId="skipper-cta" />
      <Pricing sectionId="pricing" />
      <section id="contact-form" className="py-16 px-6 bg-gray-50">
        <ContactForm />
      </section>
      <InfoSection sectionId="info-section" />
      <ServiceProviderSection sectionId="service-provider-section" />
      <FAQ sectionId="faq" />
      <PromoSection sectionId="promo-section" />
      <Footer sectionId="footer" />
      <CookieBanner />
    </main>
  );
};

export default Index;
