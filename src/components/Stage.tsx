
import { motion } from "framer-motion";
import { StageSection } from "../types/stage";

interface StageProps {
  section: StageSection;
  isReversed?: boolean;
}

export const Stage = ({ section, isReversed = false }: StageProps) => {
  return (
    <section className={`py-16 px-6 ${isReversed ? 'bg-[#F1F0FB]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`grid lg:grid-cols-2 gap-12 items-start ${isReversed ? 'lg:grid-flow-dense' : ''}`}>
          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-light leading-tight text-[#31356E]">
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
              <p className="text-lg text-[#31356E]/80 leading-relaxed">
                {section.paragraph}
              </p>
            )}
          </motion.div>

          {/* Image Column */}
          <div className="lg:pl-8">
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              src={section.imageUrl}
              alt="Stage Screenshot"
              className="w-[85%] lg:w-[65%] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
