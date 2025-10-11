import { motion } from "framer-motion";
import React from "react";

const PromoSection = ({ sectionId }: { sectionId: string }) => {
  const scrollToForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="flex flex-col justify-center items-center bg-gray-50 py-16"
      id={sectionId}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-gilroy font-light text-chiefnavy mb-12 text-center"
      >
        You are one click away from a great guest experience
      </motion.h2>
      <button
        onClick={scrollToForm}
        className="font-gilroy bg-chiefyellow text-chiefnavy px-8 py-4 rounded-lg text-xl md:text-2xl font-semibold hover:bg-opacity-90 transition-all duration-200"
      >
        Get ChiefOS!
      </button>
    </section>
  );
};

export default PromoSection;
