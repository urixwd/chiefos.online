
import { motion } from "framer-motion";
import { StageSection } from "../types/stage";

interface StageProps {
  section: StageSection;
  isReversed?: boolean;
}

export const Stage = ({ section, isReversed = false }: StageProps) => {
  return (
    <section className="h-screen py-4 sm:py-6 px-4 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid grid-cols-2 gap-2 md:gap-12 items-center ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 px-2 md:px-8"
          >
            <h2 className="font-montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-tight text-[#31356E]">
              {section.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < section.title.split('\n').length - 1 && <br />}
                </span>
              ))}
              {section.boldText && (
                <span className="font-bold block mt-2">{section.boldText}</span>
              )}
            </h2>
            
            {section.paragraph && (
              <p className="text-base sm:text-lg text-[#31356E]/80 leading-relaxed">
                {section.paragraph}
              </p>
            )}
          </motion.div>

          {/* Image Column */}
          <div className={`${isReversed ? 'order-first lg:order-last' : ''}`}>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              src={section.imageUrl}
              alt="Stage Screenshot"
              className="w-full h-auto object-contain max-h-[60vh]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
