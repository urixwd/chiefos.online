import { motion } from "framer-motion";

interface SkipperCTAProps {
  sectionId?: string;
}

export const SkipperCTA = ({ sectionId }: SkipperCTAProps) => {
  return (
    <section
      id={sectionId}
      className="py-16 md:py-24 px-6 bg-gradient-to-br from-chiefnavy to-chiefnavy/90 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-chiefyellow rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chiefyellow rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-gilroy text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Skipper?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-gilroy text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
        >
          Join more <span className="font-bold text-chiefyellow">+700 skippers</span> who have shared their experiences with our community and earned credits for their next sailing adventure
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            href="https://app.chiefos.online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-gilroy bg-chiefyellow text-chiefnavy px-10 py-5 rounded-lg text-xl md:text-2xl font-semibold hover:bg-opacity-90 transition-all duration-200 shadow-lg"
          >
            Try now!
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
