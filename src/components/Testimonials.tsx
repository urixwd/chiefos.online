
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-[#F1F0FB]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-montserrat font-light text-[#31356E] mb-12 text-center"
        >
          And the guests who already<br />used it?
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="flex-shrink-0">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://chiefos-website.s3.eu-central-003.backblazeb2.com/testimonials/1.webp"
                  alt="Alex B"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-lg md:text-xl text-[#31356E] font-light mb-6 leading-relaxed">
                "This service gives you tons of confidence,
                like you're sitting with me on the yacht.
                There's no doubt that any skipper who
                charters a yacht would love to have you
                by his side."
              </p>
              
              <div>
                <h3 className="font-montserrat font-semibold text-[#31356E] text-lg">Alex B</h3>
                <p className="text-[#31356E]/80">
                  Israeli Navy officer<br />
                  ~20 years skipper
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
