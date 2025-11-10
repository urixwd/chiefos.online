import { motion } from "framer-motion";

interface ServiceProviderSectionProps {
  sectionId?: string;
}

export const ServiceProviderSection = ({ sectionId }: ServiceProviderSectionProps) => {
  return (
    <section
      id={sectionId}
      className="py-16 md:py-24 px-6 bg-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-chiefnavy rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-chiefyellow rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-gilroy text-4xl md:text-5xl font-bold text-chiefnavy mb-6"
        >
          Service provider?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-gilroy text-xl md:text-2xl text-gray-700 leading-relaxed"
        >
          Come and partner with us to <span className="font-bold text-chiefnavy">maximize your scope of service</span>
        </motion.p>
      </div>
    </section>
  );
};
