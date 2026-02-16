import { motion } from "framer-motion";

interface PrivacySecurityProps {
  sectionId?: string;
}

export const PrivacySecurity = ({ sectionId }: PrivacySecurityProps) => {
  return (
    <section
      id={sectionId}
      className="py-16 md:py-24 px-6 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-gilroy text-3xl md:text-4xl font-bold text-chiefnavy mb-6"
        >
          Privacy & Security You Can Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-gilroy text-lg md:text-xl text-gray-700 leading-relaxed mb-4"
        >
          At ChiefOS, your information and data are fully encrypted and
          invisible to anyone without a direct request. We take your privacy
          seriously and continuously work to enhance protection.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-gilroy text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          We invite you to review our{" "}
          <a
            href="/legal/privacy.html"
            className="text-chiefnavy font-semibold underline hover:opacity-80 transition-opacity"
          >
            Privacy Policy
          </a>{" "}
          and share any suggestions for additional steps we can take to
          safeguard your information even further.
        </motion.p>
      </div>
    </section>
  );
};
