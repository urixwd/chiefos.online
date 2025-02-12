
import { motion } from "framer-motion";

export const Features = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-light leading-tight">
              Chief.OS is the only AI mate<br />
              that navigates with you every<br />
              step of the way
            </h2>
            
            {/* SVG diagram */}
            <svg 
              viewBox="0 0 200 100" 
              className="w-full max-w-md"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="50" r="20" fill="#3F5B6B" opacity="0.2"/>
              <circle cx="100" cy="50" r="20" fill="#3F5B6B" opacity="0.4"/>
              <circle cx="170" cy="50" r="20" fill="#3F5B6B" opacity="0.6"/>
              <line x1="50" y1="50" x2="80" y2="50" stroke="#3F5B6B" strokeWidth="2"/>
              <line x1="120" y1="50" x2="150" y2="50" stroke="#3F5B6B" strokeWidth="2"/>
            </svg>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <img
              src="https://f003.backblazeb2.com/file/chiefos-website/screenshots/screenshot-1.png"
              alt="Chief.OS Screenshot"
              className="rounded-lg shadow-xl w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
