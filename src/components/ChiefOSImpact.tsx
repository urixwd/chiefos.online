import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface ChiefOSImpactProps {
  sectionId?: string;
}

export const ChiefOSImpact = ({ sectionId }: ChiefOSImpactProps) => {
  return (
    <section
      id={sectionId}
      className="py-16 md:py-24 px-6 bg-gradient-to-br from-chiefnavy/5 to-chiefyellow/5 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-64 h-64 bg-chiefyellow rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-chiefnavy rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-chiefyellow" size={48} fill="currentColor" />
          </div>
          <h2 className="font-gilroy text-4xl md:text-5xl font-bold text-chiefnavy mb-4">
            ChiefOS Impact
          </h2>
          <p className="font-gilroy text-xl md:text-2xl text-gray-700 font-semibold">
            Our Impact. Our Purpose. The beating heart of our business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6"
        >
          <p className="font-gilroy text-lg md:text-xl text-gray-700 leading-relaxed">
            ChiefOS impact empowers each of us to use our strengths to support our community.
          </p>

          <p className="font-gilroy text-lg md:text-xl text-gray-700 leading-relaxed">
            Our pricing model ensures that any leftovers beyond our business effort costs are dedicated to a greater cause. This year, we are proud to support nonprofits like{" "}
            <a
              href="https://breakingwaves.co.il/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-chiefnavy hover:text-chiefyellow transition-colors duration-200 underline"
            >
              Breaking Waves
            </a>
            , helping create positive change where it matters most.
          </p>

          <p className="font-gilroy text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
            As we grow, our impact grows!
          </p>

          <p className="font-gilroy text-lg md:text-xl text-gray-700 leading-relaxed">
            Contact us to suggest any non-profits we can support in the future.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
